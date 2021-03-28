using System;
using System.Collections.Generic;
using System.IO;
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
        public List<ExportingData> ExportToExcel(int userId)
        {
            //2021-03-27 14:32:17.254000
            var data = new List<ExportingData>();
            var dateTime = new DateTime(2021,3,27,14,32,17);
            //27.03.2021  14:32:17

            using (var db = new RepositoryContext())
            {
                var routines = db.Routines.Include(o => o.RoutineDate)
                    .Include(o => o.TypeOfRoutine)
                    .Include(o => o.Shelves)
                    .ThenInclude(o => o.AllProducts)
                    .Include(o=>o.Indicators)
                    .ThenInclude(o=>o.IndicatorType)
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
                    Stress = x.Indicators.Where(o=>o.IndicatorTypeId==2).Select(o=>o.Value),
                    Water = x.Indicators.Where(o=>o.IndicatorTypeId==1).Select(o=>o.Value),
                }).ToList();
                
                
                return data;
            }
        }

        public void SaveToZip()
        {
            /*string DirectoryPath = "";
            string[] filenames = Directory.GetFiles(DirectoryPath);
            string OutputFilePath = "";

            // 'using' statements guarantee the stream is closed properly which is a big source
            // of problems otherwise.  Its exception safe as well which is great.
            using (ZipOutputStream outputStream = new ZipOutputStream(System.IO.File.Create(OutputFilePath)))
            {
                outputStream.SetLevel(9);
                byte[] buffer = new byte[4096];
                var ImageList = new List<string>();
                ImageList.Add("https://cdn.notinoimg.com/list_2k/eucerin/4005800264665_01-o__2.jpg");
                ImageList.Add("https://cdn.notinoimg.com/list_2k/eucerin/4005800168376_01-o__15.jpg");
                for (int i = 0; i < ImageList.Count; i++)
                {
                    ZipEntry entry = new ZipEntry(Path.GetFileName(ImageList[i]));
                    entry.DateTime = DateTime.Now;
                    entry.IsUnicodeText = true;
                    outputStream.PutNextEntry(entry);
                    using (FileStream oFileStream = System.IO.File.OpenRead(ImageList[i]))
                    {
                        int sourceByte;
                        do
                        {
                            sourceByte = oFileStream.Read(buffer, 0, buffer.Length);
                            outputStream.Write(buffer, 0, sourceByte);
                        } while (sourceByte > 0);
                    }
                }
                
            }*/
        }
    }
}