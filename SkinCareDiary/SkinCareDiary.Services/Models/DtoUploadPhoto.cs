using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;

namespace SkinCareDiary.Services.Models
{
    public class DtoUploadPhoto
    {
        public string Name { get; set; }
        public string Path { get; set; }
        public DateTime Date { get; set; }
        public int RoutineId { get; set; }
        //public List<IFormFile> FromFiles { get; set; }
    }
}