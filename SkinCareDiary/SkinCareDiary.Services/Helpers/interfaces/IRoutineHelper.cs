using SkinCareDiary.Services.Models;

namespace SkinCareDiary.Services.Helpers
{
    public interface IRoutineHelper
    {
        DtoNewRoutine CreateRoutine(DtoNewRoutine routine, int userId);
    }
}