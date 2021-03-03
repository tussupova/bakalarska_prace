using System.Linq;
using System.Net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Org.BouncyCastle.Crypto.Tls;
using SkinCareDiary.Database.DB;
using SkinCareDiary.Services.Helpers;
using SkinCareDiary.Services.Models.User;

namespace SkinCareDiary.Be.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ILoginHelper _loginHelper;

        public UserController(ILoginHelper loginHelper)
        {
            _loginHelper = loginHelper;
        }

        [HttpPost("signUp")]
        [ProducesResponseType(typeof(DtoUserResponse), StatusCodes.Status200OK)]
        public IActionResult SignUp(DtoUserSignIUp user)
        {
            var userDto = _loginHelper.CreateAccount(user);
            if (userDto != null)
            {
                return Ok(userDto);
            }


            return Conflict();
        }

        [HttpPost("login")]
        [ProducesResponseType(typeof(DtoUserResponse), StatusCodes.Status200OK)]
        public IActionResult Login(DtoLoginUser user)
        {
            var userDto = _loginHelper.Login(user.Email, user.Password);
            if (userDto != null)
            {
                return Ok(userDto);
            }

            return Unauthorized();
        }

        [HttpPost("token")]
        [ProducesResponseType(typeof(DtoUserResponse), StatusCodes.Status200OK)]
        public IActionResult Token(DtoLoginUser user)
        {
            var userDto = _loginHelper.Login(user.Email, user.Password);
            if (userDto != null)
            {
                return Ok(userDto);
            }

            return Unauthorized();
        }

        [HttpGet("test")]
        [Authorize]
        public IActionResult Test()
        {
            return Ok(123);
        }
    }
}