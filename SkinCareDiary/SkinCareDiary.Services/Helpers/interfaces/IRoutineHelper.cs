using System;
using System.Collections.Generic;
using SkinCareDiary.Services.Models;

namespace SkinCareDiary.Services.Helpers.interfaces
{
    public interface IRoutineHelper
    {
        int CreateRoutine(DtoNewRoutine routine, int userId);
        void AddProduct(List<DtoProductsFromNewRoutine> products, int productTypeId,int routineId);
        public DtoGetRoutine GetEditRoutine(string routineType, DateTime routineDate, int userId);
        int EditRoutine(int routineId, DtoEditRoutine newRoutine, int userId);
    }
}