using System.Collections.Generic;
using SkinCareDiary.Services.Models;

namespace SkinCareDiary.Services.Helpers
{
    public interface ICalendarHelper
    {
        List<ExportingData> ExportToExcel(int userId);
        void SaveToZip();
    }
}