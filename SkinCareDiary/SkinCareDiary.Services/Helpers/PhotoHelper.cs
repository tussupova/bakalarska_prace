using System;
using System.Linq;
using SkinCareDiary.Database.DB;
using SkinCareDiary.Services.Models;

namespace SkinCareDiary.Services.Helpers
{
    public class PhotoHelper : IPhotoHelper
    {
        public void UploadPhotos(string originalName, string newName, int userId, int routineId, DateTime date)
        {
            using (var db = new RepositoryContext())
            {
                var newPhotos = new Photo()
                {
                    RoutineId = routineId,
                    Date = date,
                    NewName = newName,
                    OriginalName = originalName,
                    //Todo add UserId
                };
                db.Photos.Add(newPhotos);
                db.SaveChanges();
            }
        }

        public DtoGetPhotos GetPhotos(int routineId)
        {
            using (var db= new RepositoryContext())
            {
                /*var photos = db.Photos.Where(o => o.RoutineId == routineId).ToList();
                var newGetPhotos = new DtoGetPhotos()
                {
                    //Date = 
                }*/
            }

            return null;
        }
    }
}