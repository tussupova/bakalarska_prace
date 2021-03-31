using System;
using System.Collections.Generic;
using System.IO;
using ClosedXML.Excel;
using Microsoft.AspNetCore.Mvc;
using SkinCareDiary.Services.Helpers;
using SkinCareDiary.Services.Models;

namespace SkinCareDiary.Be.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CalendarController : ControllerBase
    {
        private readonly ICalendarHelper _calendarHelper;

        public CalendarController(ICalendarHelper calendarHelper)
        {
            _calendarHelper = calendarHelper;
        }

        [HttpPost("exportData")]
        public IActionResult ExportUsersData()
        {
            /*if (User.Identity == null)
            {*/
                //var userId = int.Parse(User.Identity.Name ?? throw new InvalidOperationException());
                //userId = 4;

                try
                {
                    var userId = 4;
                    using (var workbook = new XLWorkbook())
                    {
                        IXLWorksheet worksheet = workbook.Worksheets.Add("Routine");
                        worksheet.Cell(1, 1).Value = "Date";
                        worksheet.Cell(1, 2).Value = "RoutineType";
                        worksheet.Cell(1, 3).Value = "Cleanser";
                    
                        worksheet.Cell(1,4 ).Value = "Treatment";
                        worksheet.Cell(1,5 ).Value = "Moisturizer";
                        worksheet.Cell(1,6 ).Value = "Sunscreen";
                        worksheet.Cell(1,7 ).Value = "Other Products";
                        worksheet.Cell(1,8 ).Value = "Stress";
  
                        var myList = _calendarHelper.ExportToExcel(userId);
                        var row = 1;
                        foreach (var i in myList)
                        {
                            row++;
                            worksheet.Cell(row, 1).Value = i.Date;
                            worksheet.Cell(row, 2).Value = i.RoutineType;
                            worksheet.Cell(row, 3).Value = i.Cleanser;
                            worksheet.Cell(row, 4).Value = i.Treatment;
                            worksheet.Cell(row, 5).Value = i.Moisturizer;
                            worksheet.Cell(row, 6).Value = i.Sunscreen;
                            worksheet.Cell(row, 7).Value = i.OtherProducts;
                            worksheet.Cell(row, 8).Value = i.Stress;
                        }
                        using (var stream = new MemoryStream())
                        {
                            workbook.SaveAs(stream);
                            var content = stream.ToArray();
                            /*return File(content,
                                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                                "routine.xlsx");*/
                            
                            var x = _calendarHelper.GetPhotos(userId);
           
                            return new FileContentResult( _calendarHelper.GetZipArchive(x, stream), "application/zip") { FileDownloadName = "Photos.zip" };

                        }
                    }
                }
                catch (Exception ex)
                {
                    return BadRequest();
                }
            

            return BadRequest();
        }

        [HttpPost("exportImages")]
        public IActionResult ExportUsersImageToZip()
        {
            if (User.Identity == null) return null;
            var id = int.Parse(User.Identity.Name ?? throw new InvalidOperationException());

            var x = _calendarHelper.GetPhotos(id);
           
            //return new FileContentResult( _calendarHelper.GetZipArchive(x), "application/zip") { FileDownloadName = "Photos.zip" };
            return Ok(1);
        }

        [HttpGet("getRoutines")]
        public List<DtoGetUsersRoutine> GetUsersRoutine()
        {
            if (User.Identity == null) return null;
            var id = int.Parse(User.Identity.Name ?? throw new InvalidOperationException());

            return _calendarHelper.RenderCalendar(id);

        }
        
    }
}