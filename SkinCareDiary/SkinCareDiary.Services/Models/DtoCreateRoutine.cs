using System.Collections.Generic;
using SkinCareDiary.Database.DB;

namespace SkinCareDiary.Services.Models
{
    public class DtoCreateRoutine
    {
        
     
        public Database.DB.User User { get; set; }
        public TypeOfRoutine TypeOfRoutine { get; set; }
        public RoutineDate RoutineDate { get; set; }
        public List<Product> Products { get; set; }
        public List<Indicator> Indicators { get; set; }
        public List<Photo> Photos { get; set; }
        public List<Note> Nodes { get; set; }
    }
}