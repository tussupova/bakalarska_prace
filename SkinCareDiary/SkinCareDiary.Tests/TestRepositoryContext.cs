using Microsoft.EntityFrameworkCore;
using SkinCareDiary.Database.DB;

namespace SkinCareDiary.Tests
{
    public class TestRepositoryContext: RepositoryContext
    {
        
        public TestRepositoryContext(){}
        public TestRepositoryContext(DbContextOptions options): base(options){}
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }
    }
}