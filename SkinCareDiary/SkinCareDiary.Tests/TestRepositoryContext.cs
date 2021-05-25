using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using SkinCareDiary.Database.DB;

namespace SkinCareDiary.Tests
{
    public class TestRepositoryContext: RepositoryContext
    {
        
        public TestRepositoryContext(){}
        public TestRepositoryContext(DbContextOptions options): base(options, new LoggerFactory()){}
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }
    }
}