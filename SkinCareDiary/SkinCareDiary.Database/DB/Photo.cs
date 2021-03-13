using System;

namespace SkinCareDiary.Database.DB
{
    public class Photo
    {
        public int Id { get; set; }
        public string NewName { get; set; }
        public DateTime Date { get; set; } // +time
        public string OriginalName { get; set; }
        public int RoutineId { get; set; }
        public Routine Routine { get; set; }
    }
}