using System.Collections.Generic;

namespace SkinCareDiary.Database.DB
{
    public class TypeOfRoutine
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Routine> Routines { get; set; }
    }
}