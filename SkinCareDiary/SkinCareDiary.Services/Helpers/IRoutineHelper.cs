using SkinCareDiary.Services.Models;

namespace SkinCareDiary.Services.Helpers
{
    public interface IRoutineHelper
    {
        void CreateRoutine(DtoCreateRoutine routine);
    }
}