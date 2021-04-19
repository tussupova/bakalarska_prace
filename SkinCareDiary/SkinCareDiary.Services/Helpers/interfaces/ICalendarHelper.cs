using System.Collections.Generic;
using System.IO;
using SkinCareDiary.Services.Models;

namespace SkinCareDiary.Services.Helpers
{
    public interface ICalendarHelper
    {
        List<ExportingData> ExportToExcel(int userId);
        List<DtoGetPhotos> GetPhotos(int userId);
        byte[] GetZipArchive(List<DtoGetPhotos> files, MemoryStream stream);
        List<DtoGetUsersRoutine> RenderCalendar(int userId);

    }
}