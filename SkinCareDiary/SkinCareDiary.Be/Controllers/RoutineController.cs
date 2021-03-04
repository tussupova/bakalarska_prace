using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace SkinCareDiary.Be.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class RoutineController: ControllerBase
    {
        [HttpPost("/createRoutine")]
        public void CreateRoutine()
        {
            
        }
        
    }
}