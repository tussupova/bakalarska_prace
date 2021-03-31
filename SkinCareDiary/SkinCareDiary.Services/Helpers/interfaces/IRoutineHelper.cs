using System.Collections.Generic;
using SkinCareDiary.Services.Models;

namespace SkinCareDiary.Services.Helpers
{
    public interface IRoutineHelper
    {
        int CreateRoutine(DtoNewRoutine routine, int userId);
        void AddProduct(List<DtoProductsFromNewRoutine> products, int productTypeId,int routineId);

    }
}