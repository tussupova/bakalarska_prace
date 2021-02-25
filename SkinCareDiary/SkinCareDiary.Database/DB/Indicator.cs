namespace SkinCareDiary.Database.DB
{
    public class Indicator
    {
        public int Id { get; set; }
        public int Value { get; set; }
        public string Date { get; set; }
        
        public int RoutineId { get; set; }
        public Routine Routine { get; set; }
        
        public int IndicatorTypeId { get; set; }
        public IndicatorType IndicatorType { get; set; }
    }
}