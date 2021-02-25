namespace SkinCareDiary.Database.DB
{
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Date { get; set; } // +time
        
        public int RoutineId { get; set; }
        public Routine Routine { get; set; }
    }
}