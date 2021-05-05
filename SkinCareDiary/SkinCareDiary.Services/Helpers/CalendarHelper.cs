using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Net.Mime;
using System.Security.Policy;
using ICSharpCode.SharpZipLib.Zip;
using Microsoft.EntityFrameworkCore;
using SkinCareDiary.Database.DB;
using SkinCareDiary.Services.Models;
using ZipFile = System.IO.Compression.ZipFile;


namespace SkinCareDiary.Services.Helpers
{
    public class CalendarHelper : ICalendarHelper
    {
        private readonly IPhotoHelper _photoHelper;

        public CalendarHelper(IPhotoHelper photoHelper)
        {
            _photoHelper = photoHelper;
        }

        public List<ExportingData> ExportToExcel(int userId)
        {
            //2021-03-27 14:32:17.254000
            var data = new List<ExportingData>();
            var dateTime = new DateTime(2021, 3, 27, 14, 32, 17);
            //27.03.2021  14:32:17

            using (var db = new RepositoryContext())
            {
                var routines = db.Routines.Include(o => o.RoutineDate)
                    .Include(o => o.TypeOfRoutine)
                    .Include(o => o.Shelves)
                    .ThenInclude(o => o.AllProducts)
                    .Include(o => o.Indicators)
                    .ThenInclude(o => o.IndicatorType)
                    .Where(o => o.UserId == userId).ToList();
                data = routines.Select(x => new ExportingData
                {
                    Date = x.RoutineDate.Start,
                    RoutineType = x.TypeOfRoutine.Name,
                    Cleanser = string.Join(
                        ", ",
                        x.Shelves.Where(o => o.ProductTypeId == 1)
                            .Select(o => $"{o.AllProducts.Brand} {o.AllProducts.Name}")
                    ),
                    Treatment = string.Join(
                        ", ",
                        x.Shelves.Where(o => o.ProductTypeId == 2)
                            .Select(o => $"{o.AllProducts.Brand} {o.AllProducts.Name}")
                    ),
                    Moisturizer = string.Join(
                        ", ",
                        x.Shelves.Where(o => o.ProductTypeId == 3)
                            .Select(o => $"{o.AllProducts.Brand} {o.AllProducts.Name}")
                    ),
                    Sunscreen = string.Join(
                        ", ",
                        x.Shelves.Where(o => o.ProductTypeId == 4)
                            .Select(o => $"{o.AllProducts.Brand} {o.AllProducts.Name}")
                    ),
                    OtherProducts = string.Join(
                        ", ",
                        x.Shelves.Where(o => o.ProductTypeId == 5)
                            .Select(o => $"{o.AllProducts.Brand} {o.AllProducts.Name}")
                    ),
                    Stress = x.Indicators.Where(o => o.IndicatorTypeId == 2).Select(o => o.Value),
                    Water = x.Indicators.Where(o => o.IndicatorTypeId == 1).Select(o => o.Value),
                }).ToList();


                return data;
            }
        }

        public List<DtoGetPhotos> GetPhotos(int userId)
        {
            var s = ExportToExcel(userId);
            using (var db = new RepositoryContext())
            {
                var photos = db.Routines
                    .Include(o => o.Photos)
                    .Where(o => o.UserId == userId)
                    .SelectMany(o => o.Photos).ToList();

                var dtoPhotos = new List<DtoGetPhotos>();
                foreach (var photo in photos)
                {
                    var x = _photoHelper.GetPhotosFromId(photo.Id);
                    dtoPhotos.Add(x);
                }

                var z = dtoPhotos;
                return dtoPhotos;
            }
        }

        public byte[] GetZipArchive(List<DtoGetPhotos> files, MemoryStream stream)
        {
            byte[] archiveFile;
            using var archiveStream = new MemoryStream();
            using (var archive = new ZipArchive(archiveStream, ZipArchiveMode.Create, true))
            {
                foreach (var file in files)
                {
                    var zipArchiveEntry = archive.CreateEntry(file.Name, CompressionLevel.Fastest);
                    using var zipStream = zipArchiveEntry.Open();
                    zipStream.Write(file.Data, 0, file.Data.Length);
                }

                var excel = archive.CreateEntry("routine.xlsx", CompressionLevel.Fastest);
                using var excelStream = excel.Open();
                var excelData = stream.ToArray();
                excelStream.Write(excelData, 0, excelData.Length);
            }

            archiveFile = archiveStream.ToArray();

            return archiveFile;
        }

        public List<DtoGetUsersRoutine> RenderCalendar(int userId)
        {
            using var db = new RepositoryContext();
            var routines = db.Routines
                .Include(o => o.TypeOfRoutine)
                .Include(o => o.RoutineDate)
                .Where(o => o.UserId == userId)
                .ToList();

            var calendarRoutines = new List<DtoGetUsersRoutine>();

            foreach (var r in routines)
            {
                var now = r.RoutineDate.Start;
                if (r.RoutineDate.End != r.RoutineDate.Start)
                {
                    
                    while (now <= r.RoutineDate.End)
                    {
                        if (IsCorrectDate(now, r.RoutineDate))
                        {
                            calendarRoutines.Add(new DtoGetUsersRoutine
                            {
                                RoutineType = r.TypeOfRoutine.Name,
                                RoutineId = r.Id,
                                Date = now,
                            });
                        }

                        now = now.AddDays(1);
                    }
                }
                calendarRoutines.Add(new DtoGetUsersRoutine
                {
                    RoutineType = r.TypeOfRoutine.Name,
                    RoutineId = r.Id,
                    Date = now,
                });
             
            }

            return calendarRoutines;
        }

        private static bool IsCorrectDate(DateTime now, RoutineDate routineDate)
        {
            return now.DayOfWeek switch
            {
                DayOfWeek.Sunday => routineDate.Sun,
                DayOfWeek.Monday => routineDate.Mon,
                DayOfWeek.Tuesday => routineDate.Tue,
                DayOfWeek.Wednesday => routineDate.Wed,
                DayOfWeek.Thursday => routineDate.Thu,
                DayOfWeek.Friday => routineDate.Fri,
                DayOfWeek.Saturday => routineDate.Sat,
                _ => throw new ArgumentOutOfRangeException()
            };
        }
    }
}