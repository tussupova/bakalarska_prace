using System;
using System.Collections.Generic;

namespace SkinCareDiary.Database.DB
{
    public class RoutineDate
    {
        public int Id { get; set; } //TODO change to date
        public DateTime Start { get; set;  }
        public DateTime End { get; set; }
        public bool Mon { get; set; }
        public bool Tue { get; set; }
        public bool Wed { get; set; }
        public bool Thu { get; set; }
        public bool Fri { get; set; }
        public bool Sat { get; set; }
        public bool Sun { get; set; }
        
        public List<Routine> Routines { get; set; }
    }
}