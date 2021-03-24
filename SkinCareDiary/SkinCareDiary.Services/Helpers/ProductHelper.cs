using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using SkinCareDiary.Database.DB;
using SkinCareDiary.Services.Models.User;

namespace SkinCareDiary.Services.Helpers
{
    public class ProductHelper : IProductHelper

    {
        public List<DtoGetUsersProduct> GetUsersProduct(int userId)
        {
            var newProducts = new List<DtoGetUsersProduct>();
            using var db = new RepositoryContext();
            var products = db.Shelves
                .Include(o => o.AllProducts)
                .Where(o => o.Routine.UserId == userId)
                .ToList();

            newProducts = products.Select(x => new DtoGetUsersProduct
                {Brand = x.AllProducts.Brand, Name = x.AllProducts.Name, Id = x.Id, Img = x.AllProducts.Image}
            ).ToList();

            return newProducts;
        }

        public bool RemoveProduct(int productId)
        {
            using (var db = new RepositoryContext())
            {
                var product = db.Shelves.Where(o => o.Id == productId).FirstOrDefault();
                if (product==null)
                {
                    return false;
                }
                db.Shelves.Remove(product);
                db.SaveChanges();
                return true;
            }
            
        }
    }
}