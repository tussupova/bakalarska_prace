namespace SkinCareDiary.Database.DB
{
    public class Shelf
    {
        public int Id { get; set; }
        
        public int RoutineId { get; set; }
        public Routine Routine { get; set; }
        
        public int ProductTypeId { get; set; }
        public ProductType ProductType { get; set; }
        
        public int AllProductsId { get; set; }
        public AllProducts AllProducts { get; set; }
        
    }
}