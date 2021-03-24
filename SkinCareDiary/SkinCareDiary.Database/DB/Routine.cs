using System.Collections.Generic;

namespace SkinCareDiary.Database.DB
{
    public class Routine
    {
        public int Id { get; set; }
        
        public int UserId { get; set; }
        public User User { get; set; }
        
        public int TypeOfRoutineId { get; set; }
        public TypeOfRoutine TypeOfRoutine { get; set; }
        
        public int RoutineDateId { get; set; }
        public RoutineDate RoutineDate { get; set; }
        
        public List<Shelf> Shelves { get; set; }
        public List<Indicator> Indicators { get; set; }
        public List<Photo> Photos { get; set; }
        public List<Note> Notes { get; set; }
        
    }
}