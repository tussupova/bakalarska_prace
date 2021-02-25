using Microsoft.AspNetCore.Mvc;
using SkinCareDiary.Services.Models.User;

namespace SkinCareDiary.Be.Controllers
{ 
    [ApiController]
    [Route("[controller]")]
    
    public class UserController: ControllerBase
    {
        [HttpPost]
        public int Post(DtoCustomer user)
        {
            if (user.Name == "Tom")
            {
                return 2;
            }

            return 1;
        }
    }
}