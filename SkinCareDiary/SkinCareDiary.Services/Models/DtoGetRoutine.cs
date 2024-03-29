using System;
using System.Collections.Generic;

namespace SkinCareDiary.Services.Models
{
    public class DtoGetRoutine
    {
        public string RoutineType { get; set; }
        public string Note { get; set; }
        public string Stress { get; set; }
        public float Water { get; set; }
        public float Sleep { get; set; }
        public int RoutineId { get; set; }        
        public DateTime RoutineDate { get; set; }
        public DateTime? RoutineEndDate { get; set; }
        public Dictionary<string, bool> DayOfWeek { get; set; }
        public List<DtoProductsFromNewRoutine> Cleanser { get; set; }
        public List<DtoProductsFromNewRoutine> Treatment { get; set; }
        public List<DtoProductsFromNewRoutine> Moisturizer { get; set; }
        public List<DtoProductsFromNewRoutine> SunScreen { get; set; }
        public List<DtoProductsFromNewRoutine> Other { get; set; }
    }
}