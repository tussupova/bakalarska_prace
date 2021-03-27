using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SkinCareDiary.Services.Helpers;
using SkinCareDiary.Services.Models;

namespace SkinCareDiary.Be.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PhotoController : ControllerBase
    {
        private readonly IPhotoHelper _photoHelper;

        public PhotoController(IPhotoHelper photoHelper)
        {
            _photoHelper = photoHelper;
        }

        [HttpPost("upload")]
        [ProducesResponseType(typeof(DtoUploadPhoto), StatusCodes.Status200OK)]
        public IActionResult UploadPhoto([FromForm] DtoUploadPhoto photos)
        {
            try
            {
                for (int i = 0; i < Request.Form.Count; i++)
                {
                    var file = Request.Form.Files[i];
                    var folderName = Path.Combine("Resources", "Images");

                    var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                    if (file.Length > 0)
                    {
                        var name = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName;
                        if (name != null)
                        {
                            var x = Path.GetRandomFileName(); //generate random string
                            x = x.Replace(".", ""); // remove "."
                            var fileName = name.Trim('"');
                            var newName = x + fileName;
                            //var userId = int.Parse(User.Identity.Name ?? throw new InvalidOperationException());

                            _photoHelper.UploadPhotos(fileName, newName, photos.RoutineId,
                                photos.Date); //save to db
                            var fullPath = Path.Combine(pathToSave, newName);
                            var dbPath = Path.Combine(folderName, newName);
                            using (var stream = new FileStream(fullPath, FileMode.Create))
                            {
                                file.CopyTo(stream);
                            }


                            /*return Ok(new {dbPath});*/
                        }
                    }
                    else
                    {
                        return BadRequest();
                    }
                }

                return Ok(123);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }

            return Ok(111);
        }
        
        [HttpGet("getPhotosFromId/{photoId}")]
        
        public  IActionResult DownloadImage(int photoId)
        {
            var file = this._photoHelper.GetPhotosFromId(photoId);

            return File(file.Data, file.Type, file.Name);
        }
 

        [HttpGet("getPhotosInfo/{routineId}")]
        public List<DtoPhotosInfo> GetPhotosInfo(int routineId)
        {
            return _photoHelper.GetPhotosInfo(routineId);
        }
    }
}