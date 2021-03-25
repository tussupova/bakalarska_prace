using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace SkinCareDiary.Database.DB
{
    public class RepositoryContext : DbContext
    {
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

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql("server=localhost;database=kymbat;user=root;password=kymbat",
                    new MySqlServerVersion(new Version(8, 0, 21)))
                .UseLoggerFactory(LoggerFactory.Create(builder => builder.AddConsole()));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Routine>()
                .HasKey(e => e.Id);
        }
    }
}