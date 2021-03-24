using System.Collections.Generic;

namespace SkinCareDiary.Database.DB
{
    public class ProductType
    {
        public int Id { get; set; }
        public string Name { get; set; }
        
        public List<Shelf> Shelves { get; set; }
    }
}