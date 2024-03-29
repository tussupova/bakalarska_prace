using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net.Mime;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.EntityFrameworkCore;
using SkinCareDiary.Database.DB;
using SkinCareDiary.Services.Models;

namespace SkinCareDiary.Services.Helpers
{
    public class PhotoHelper : IPhotoHelper
    {
        public void UploadPhotos(string originalName, string newName, int routineId, DateTime date)
        {
            using (var db = new RepositoryContext())
            {
                var newPhotos = new Photo()
                {
                    RoutineId = routineId,
                    Date = date,
                    NewName = newName,
                    OriginalName = originalName,
                };
                db.Photos.Add(newPhotos);
                db.SaveChanges();
            }
        }

        public DtoGetPhotos GetPhotosFromId(int photoId)
        {
            using (var db = new RepositoryContext())
            {
                var x = db.Photos.Where(o => o.Id == photoId).FirstOrDefault();
                var folderName = Path.Combine("Resources", "Images");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                if (x != null)
                {
                    var fullPath = Path.Combine(pathToSave, x.NewName);
                    var provider = new FileExtensionContentTypeProvider();
                    string contentType;
                    if (!provider.TryGetContentType(x.OriginalName, out contentType))
                    {
                        contentType = "application/octet-stream";
                    }

                    FileInfo fileInfo = new FileInfo(fullPath);
                    byte[] data = new byte[fileInfo.Length];
                    using (FileStream fs = fileInfo.OpenRead())
                    {
                        fs.Read(data, 0, data.Length);

                        var newDtoGetPhotos = new DtoGetPhotos()
                        {
                            Name = x.OriginalName,
                            Type = contentType,
                            Data = data
                        };

                        return newDtoGetPhotos;
                    }
                }
            }

            return null;
        }


        public List<DtoPhotosInfo> GetPhotosInfo(int userId)
        {
            var newPhotosInfo = new List<DtoPhotosInfo>();
            using (var db = new RepositoryContext())
            {
                /*
                var photos = db.Photos.Where(o => o.RoutineId == routineId).ToList();
                newPhotosInfo.AddRange(photos.Select(x => new DtoPhotosInfo() {Date = x.Date, OriginalName = x.OriginalName, PhotoId = x.Id})); //==foreach
                */
                var photos = db.Photos.Include(o => o.Routine)
                    .Where(o => o.Routine.UserId == userId);
                newPhotosInfo.AddRange(photos
                    .Select(x => new DtoPhotosInfo()
                        {Date = x.Date, OriginalName = x.OriginalName, PhotoId = x.Id})); //==foreach

                return newPhotosInfo;
            }
        }

        public bool RemovePhoto(int photoId)
        {
            using (var db = new RepositoryContext())
            {
                var photos = db.Photos.FirstOrDefault(o => o.Id == photoId);
                if (photos == null)
                {
                    return false;
                }

                db.Photos.Remove(photos);
                db.SaveChanges();
                return true;
            }
        }
    }
}