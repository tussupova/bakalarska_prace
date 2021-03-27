using SkinCareDiary.Services.Models;

namespace SkinCareDiary.Services.Helpers
{
    public interface IRoutineHelper
    {
        int CreateRoutine(DtoNewRoutine routine, int userId);
    
    }
}