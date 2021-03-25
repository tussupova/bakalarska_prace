using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SkinCareDiary.Database.DB
{
    public class AllProducts
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Brand { get; set; }
        public string Image { get; set; }
        public List<Shelf> Shelves { get; set; }
    }
}