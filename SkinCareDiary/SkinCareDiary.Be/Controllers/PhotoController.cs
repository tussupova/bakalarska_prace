using System.Collections.Generic;
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
            return Ok(333);
        }
    }
}