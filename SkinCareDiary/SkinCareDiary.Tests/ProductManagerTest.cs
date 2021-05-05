using Microsoft.EntityFrameworkCore;
using SkinCareDiary.Services.Helpers;
using SkinCareDiary.Services.Models;
using Xunit;

namespace SkinCareDiary.Tests
{
    public class ProductManagerTest
    {
        [Fact]
        public void RemoveProductTest()
        {
            var optionsBuilder = new DbContextOptionsBuilder<TestRepositoryContext>();
            optionsBuilder.UseInMemoryDatabase("ProductManagerTestDb");
            using var context = new TestRepositoryContext(optionsBuilder.Options);
            var product = new ProductHelper(context);
            
            var newProduct = new DtoNewProductToShelf()
            {
                ProductId = 1,
                RoutineId = 1
            };
            var productInDb=product.AddProductToShelf(newProduct);
            Assert.True(product.RemoveProduct(1));
            
            
        }

        [Fact]
        public void AddProductTest()
        {
            var optionsBuilder = new DbContextOptionsBuilder<TestRepositoryContext>();
            optionsBuilder.UseInMemoryDatabase("ProductManagerTestDb");
            using var context = new TestRepositoryContext(optionsBuilder.Options);
            var product = new ProductHelper(context);
            
            var newProduct = new DtoNewProductToShelf()
            {
                ProductId = 1,
                RoutineId = 1
            };
            Assert.True(product.AddProductToShelf(newProduct));
        
        }
        }
    }
