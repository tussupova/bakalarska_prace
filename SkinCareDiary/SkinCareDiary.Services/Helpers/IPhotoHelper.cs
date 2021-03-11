using System;
using SkinCareDiary.Services.Models;

namespace SkinCareDiary.Services.Helpers
{
    public interface IPhotoHelper
    {
        DtoUploadPhoto UploadPhotos(DtoUploadPhoto photos);
    }
}