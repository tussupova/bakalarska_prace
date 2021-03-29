using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
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

                return dtoPhotos;
            }
        }

        public byte[] GetZipArchive(List<DtoGetPhotos> files)
        {
            byte[] archiveFile;
            using (var archiveStream = new MemoryStream())
            {
                using (var archive = new ZipArchive(archiveStream, ZipArchiveMode.Create, true))
                {
                    foreach (var file in files)
                    {
                        var zipArchiveEntry = archive.CreateEntry(file.Name, CompressionLevel.Fastest);
                        using (var zipStream = zipArchiveEntry.Open())
                            zipStream.Write(file.Data, 0, file.Data.Length);
                    }
                }

                archiveFile = archiveStream.ToArray();
            }

            return archiveFile;
        }

        public List<DtoGetUsersRoutine> RenderCalendar(int userId)
        {
            var calendarRoutines = new List<DtoGetUsersRoutine>();
            using (var db = new RepositoryContext())
            {
                var routines = db.Routines.Include(o => o.TypeOfRoutine)
                    .Include(o=>o.RoutineDate)
                    .Where(o => o.UserId == userId).ToList();
                
                calendarRoutines = routines.Select(x => new DtoGetUsersRoutine
                {
                    RoutineType = x.TypeOfRoutine.Name,
                    RoutineId = x.Id,
                    Date = x.RoutineDate.Start,
                }).ToList();

                return calendarRoutines;
            }
        }
    }
}