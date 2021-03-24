using System.Collections.Generic;
using SkinCareDiary.Services.Models.User;

namespace SkinCareDiary.Services.Helpers
{
    public interface IProductHelper
    {
        List<DtoGetUsersProduct> GetUsersProduct(int userId);
        bool RemoveProduct(int productId);
    }
}