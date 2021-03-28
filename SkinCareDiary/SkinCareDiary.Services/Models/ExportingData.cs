using System;
using System.Collections.Generic;

namespace SkinCareDiary.Services.Models
{
    public class ExportingData
    {
        
        public DateTime Date { get; set; }
        public string RoutineType { get; set; }
        public string Cleanser { get; set; }
        public string Treatment { get; set; }
        public string Moisturizer { get; set; }
        public string Sunscreen { get; set; }
        public string OtherProducts { get; set; }
        public IEnumerable<float> Stress { get; set; }
        public IEnumerable<float> Water { get; set; }
        public string GoToSleep { get; set; }
        public string WakeUp { get; set; }
        public string Note { get; set; }
    }
}