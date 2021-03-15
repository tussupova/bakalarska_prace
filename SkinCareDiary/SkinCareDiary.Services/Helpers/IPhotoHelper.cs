using System;
using System.Collections.Generic;
using SkinCareDiary.Services.Models;

namespace SkinCareDiary.Services.Helpers
{
    public interface IPhotoHelper
    {
        void UploadPhotos(string originalName, string newName, int userId, int routineId, DateTime date);

        DtoGetPhotos GetPhotosFromId(int photoId);
        public List<DtoPhotosInfo> GetPhotosInfo(int routineId);
    }
}