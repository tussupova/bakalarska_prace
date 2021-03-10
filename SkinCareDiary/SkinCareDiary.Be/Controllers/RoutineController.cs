using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using SkinCareDiary.Services.Helpers;
using SkinCareDiary.Services.Models;

namespace SkinCareDiary.Be.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RoutineController : ControllerBase
    {
        private readonly IRoutineHelper _routineHelper;

        public RoutineController(IRoutineHelper routineHelper)
        {
            _routineHelper = routineHelper;
        }

        [HttpPost("createRoutine")]
        [ProducesResponseType(typeof(DtoNewRoutine), StatusCodes.Status200OK)]
        public IActionResult CreateRoutine(DtoNewRoutine newRoutine)
        {
            
            var routineDto = _routineHelper.CreateRoutine(newRoutine);
            if (routineDto != null)
            {
                return Ok(123);
            }

            return Conflict();
        }
    }
}