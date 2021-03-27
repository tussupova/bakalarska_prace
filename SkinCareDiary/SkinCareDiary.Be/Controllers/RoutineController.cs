using System;
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
            var x = int.Parse(User.Identity.Name ?? throw new InvalidOperationException());

            var routineDto = _routineHelper.CreateRoutine(newRoutine, x);
            if (routineDto != null)
            {
                return Ok(routineDto);
            }

            return Conflict();
        }
    }
}