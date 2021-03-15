using System;
using Microsoft.AspNetCore.Http;

namespace SkinCareDiary.Services.Models
{
    public class DtoGetPhotos
    {
       public string Name { get; set; }
       public string Type { get; set; }
       public byte [] Data { get; set; }
    }
}