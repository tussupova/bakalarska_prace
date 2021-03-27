using System;
using System.Collections.Generic;
using System.Security.Claims;
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
        
        [HttpGet("getUsersProducts")]
        
        public  List<DtoGetUsersProduct> GetUsersProduct()
        {
            if (User.Identity != null)
            {
                var x = int.Parse(User.Identity.Name ?? throw new InvalidOperationException());
           
                return _productHelper.GetUsersProduct(x);
            }
            return null;
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
            //todo musi porovnat i Id uzivatele
            var product = _productHelper.RemoveProduct(productId);
            if (product)
            {
                return Ok(1);
            }
            
            return Conflict();
        }
        
        [HttpPost("addProduct")]
        [ProducesResponseType(typeof(DtoNewProductToShelf), StatusCodes.Status200OK)]
        public IActionResult AddProduct(DtoNewProductToShelf products)
        {
            var x = _productHelper.AddProductToShelf(products);
            if (x)
            {
                return Ok(123456);
            }


            return Conflict();
        }
    }
}