﻿namespace SkinCareDiary.Database.DB
{
    public class Note
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public string Date { get; set; } // +time
        
        public int RoutineId { get; set; }
        public Routine Routine { get; set; }
    }
}