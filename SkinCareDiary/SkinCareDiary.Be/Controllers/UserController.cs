using System.Linq;
using System.Net;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SkinCareDiary.Database.DB;
using SkinCareDiary.Services.Helpers;
using SkinCareDiary.Services.Models.User;

namespace SkinCareDiary.Be.Controllers
{ 
    [ApiController]
    [Route("[controller]")]
    
    public class UserController: ControllerBase
    {
        /*[HttpPost]
        public int Post(DtoUserRequest user)
        {
            LoginHelper.CreateAccount(user);
            return 5;
        }*/

        [HttpPost("login")]
        [ProducesResponseType(typeof(DtoUserResponse), StatusCodes.Status200OK)]
        public IActionResult Login(DtoLoginUser user)
        {
            var userDto = LoginHelper.Login(user.Email, user.Password);
            if (userDto != null)
            {
                return Ok(userDto);
            }

            return Unauthorized();
        }

        [HttpGet]
        public DtoUserResponse Get(int Id)
        {
            return LoginHelper.GetUserFromId(Id);
        }

        
    }
}