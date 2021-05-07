using System;
using Microsoft.AspNetCore.Authorization;
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
            if (User.Identity != null)
            {
                var x = int.Parse(User.Identity.Name ?? throw new InvalidOperationException());

                var routineDto = _routineHelper.CreateRoutine(newRoutine, x);
                if (routineDto != null)
                {
                    return Ok(routineDto);
                }
            }

            return Conflict();
        }
        
        [HttpGet("editRoutine")]
        [Authorize]
        public DtoGetRoutine EditRoutine([FromQuery]string routineType, DateTime routineDate)
        {
            if (User.Identity != null)
            {
                var userId = int.Parse(User.Identity.Name ?? throw new InvalidOperationException());
                
                return _routineHelper.GetEditRoutine(routineType, routineDate, userId);
            }
           

            return null;
        }
    }
}