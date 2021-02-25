using System.Collections.Generic;

namespace SkinCareDiary.Database.DB
{
    public class ProductType
    {
        public int Id { get; set; }
        public string Name { get; set; }
        
        public List<Product> Products { get; set; }
    }
}