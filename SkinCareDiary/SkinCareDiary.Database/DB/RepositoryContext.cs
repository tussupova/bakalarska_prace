using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace SkinCareDiary.Database.DB
{
    public class RepositoryContext : DbContext
    {
        private readonly ILoggerFactory _loggerFactory; 
        public DbSet<Routine> Routines { get; set; }
        public DbSet<TypeOfRoutine> TypOfRoutines { get; set; }

        public DbSet<Shelf> Shelves { get; set; }
        public DbSet<ProductType> ProductTypes { get; set; }
        public DbSet<AllProducts> AllProducts { get; set; }

        public DbSet<Indicator> Indicators { get; set; }
        public DbSet<IndicatorType> IndicatorTypes { get; set; }

        public DbSet<User> Users { get; set; }
        public DbSet<RoutineDate> Dates { get; set; }
        public DbSet<Note> Notes { get; set; }
        public DbSet<Photo> Photos { get; set; }
        
        public RepositoryContext(): base() {}

        public RepositoryContext(DbContextOptions options, ILoggerFactory loggerFactory) :
            base(options)
        {
            this._loggerFactory = loggerFactory;  
        }
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                var configuration = new ConfigurationBuilder()
                    .SetBasePath(Directory.GetCurrentDirectory())
                    .AddJsonFile("appsettings.Development.json")
                    .Build();
                optionsBuilder
                    .UseLoggerFactory(_loggerFactory)
                    .UseMySql(configuration.GetConnectionString("Database"),
                        new MySqlServerVersion(new Version(8, 0, 21)));

            }
        }
    }
}