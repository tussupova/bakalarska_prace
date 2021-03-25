using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SkinCareDiary.Services.Helpers;
using SkinCareDiary.Services.Models;
using SkinCareDiary.Services.Models.User;

namespace SkinCareDiary.Be.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController:ControllerBase
    {
        private readonly IProductHelper _productHelper;
        
        public ProductController(IProductHelper productHelper)
        {
            _productHelper = productHelper;
        }
        
        [HttpGet("getUsersProducts/{userId}")]
        
        public  List<DtoGetUsersProduct> GetUsersProduct(int userId)
        {
            return _productHelper.GetUsersProduct(userId);
          
        }
        [HttpGet("searchProduct/{chars}")]
        
        public  List<DtoGetUsersProduct> GetUsersProduct(string chars)
        {
            return _productHelper.SearchProducts(chars);
          
        }
        
        [HttpPost("removeUsersProduct/{productId}")]
        [ProducesResponseType(typeof(DtoDeleteUsersProduct), StatusCodes.Status200OK)]
        public IActionResult DeleteProduct(int productId)
        {
            var product = _productHelper.RemoveProduct(productId);
            if (product)
            {
                return Ok(1);
            }
            
            return Conflict();
        }
    }
}