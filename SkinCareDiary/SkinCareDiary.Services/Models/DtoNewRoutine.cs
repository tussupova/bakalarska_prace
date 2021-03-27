using System;
using System.Collections.Generic;

namespace SkinCareDiary.Services.Models
{
    public class DtoNewRoutine
    {
        public string RoutineType { get; set; }
        public string Note { get; set; }
        public List<string> Photos { get; set; }
        public string Stress { get; set; }
        public float Water { get; set; }
        public DateTime? GoToSleep { get; set; }
        public DateTime? WakeUp { get; set; }
        public DateTime RoutineDate { get; set; }
        public DateTime? RoutineEndDate { get; set; }
        public Dictionary<string, bool> DayOfWeek { get; set; }
        public int AmountOfWeek { get; set; }

    }
}