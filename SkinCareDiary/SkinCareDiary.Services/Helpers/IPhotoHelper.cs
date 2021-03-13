using System;
using SkinCareDiary.Services.Models;

namespace SkinCareDiary.Services.Helpers
{
    public interface IPhotoHelper
    {
        void UploadPhotos(string originalName, string newName, int userId, int routineId, DateTime date);
    }
}