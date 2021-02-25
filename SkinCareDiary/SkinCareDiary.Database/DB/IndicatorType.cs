using System.Collections.Generic;

namespace SkinCareDiary.Database.DB
{
    public class IndicatorType
    {
        public int Id { get; set; }
        public string Name { get; set; }
        
        public List<Indicator> Indicators { get; set; }
    }
}