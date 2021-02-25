namespace SkinCareDiary.Database.DB
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Brand { get; set; }
        public string Description { get; set; }
        
        public int RoutineId { get; set; }
        public Routine Routine { get; set; }
        
        public int ProductTypeId { get; set; }
        public ProductType ProductType { get; set; }
        
    }
}