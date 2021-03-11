using System;

namespace SkinCareDiary.Database.DB
{
    public class Indicator
    {
        public int Id { get; set; }
        public float Value { get; set; }
        public DateTime Date { get; set; }
        
        public int RoutineId { get; set; }
        public Routine Routine { get; set; }
        
        public int IndicatorTypeId { get; set; }
        public IndicatorType IndicatorType { get; set; }
    }
}