using SkinCareDiary.Database.DB;
using SkinCareDiary.Services.Models;

namespace SkinCareDiary.Services.Helpers
{
    public class RoutineHelper : IRoutineHelper
    {
        public void CreateRoutine(DtoCreateRoutine routine)
        {
            using (var context= new RepositoryContext())
            {
                var newRoutine = new Routine()
                {
                    User = routine.User,
                    TypeOfRoutine = routine.TypeOfRoutine,
                    RoutineDate = routine.RoutineDate,
                    Products = routine.Products,
                    Nodes = routine.Nodes,
                    Photos = routine.Photos,
                    Indicators = routine.Indicators

                };
            }
        }
    }
}