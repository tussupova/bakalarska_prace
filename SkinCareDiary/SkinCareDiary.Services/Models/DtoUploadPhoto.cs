using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;

namespace SkinCareDiary.Services.Models
{
    public class DtoUploadPhoto
    {
        public List<IFormFile> Files { get; set; }
        public int UserId { get; set; }
        public int RoutineId { get; set; }
        public DateTime Date { get; set; }
    }
}