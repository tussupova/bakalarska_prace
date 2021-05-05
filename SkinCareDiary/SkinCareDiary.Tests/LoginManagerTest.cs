using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using SkinCareDiary.Database.DB;
using SkinCareDiary.Services.Helpers;
using SkinCareDiary.Services.Models.User;
using SkinCareDiary.Services.Settings;
using Xunit;

namespace SkinCareDiary.Tests
{
    public class LoginManagerTest
    {
        [Fact]
        public void NewUser()
        {
      
        var jwtSettings = new OptionsWrapper<JwtSettings>(new JwtSettings
        {
            Issuer = "http://localhost",
            Secret = "secret1245"
        });
        var jwtHelper = new JwtHelper(jwtSettings);
        var optionsBuilder = new DbContextOptionsBuilder<TestRepositoryContext>();
        optionsBuilder.UseInMemoryDatabase("loginManagerTestDb");
        using var context = new TestRepositoryContext(optionsBuilder.Options);

      
        var login = new LoginHelper(jwtHelper, context);
        var newUser = new DtoUserResponse()
        {
            Id = 1,
            Name = "UnitTest",
            Email = "UnitTest@unit.test"
        };
        var newUser2 = new DtoUserSignIUp()
        {
            Name = "UnitTest",
            Email = "UnitTest@unit.test",
            Password = "unittest"
        };
        var x = login.CreateAccount(newUser2);
        x.Token = null;
        Assert.Equal(newUser, x);
   
        
        }
        [Fact]
        public void Login()
        {
            var jwtSettings = new OptionsWrapper<JwtSettings>(new JwtSettings
            {
                Issuer = "http://localhost",
                Secret = "secret1245"
            });
            var jwtHelper = new JwtHelper(jwtSettings);
            var optionsBuilder = new DbContextOptionsBuilder<TestRepositoryContext>();
            optionsBuilder.UseInMemoryDatabase("loginManagerTestDb");
            using var context = new TestRepositoryContext(optionsBuilder.Options);

      
            var login = new LoginHelper(jwtHelper, context);
            var newUser = new DtoUserResponse()
            {
                Id = 1,
                Name = "UnitTest",
                Email = "UnitTest@unit.test"
            };
            var newUser2 = new DtoUserSignIUp()
            {
                Name = "UnitTest",
                Email = "UnitTest@unit.test",
                Password = "unittest"
            };
            var x = login.CreateAccount(newUser2);
            x.Token = null;
            Assert.Equal(x,login.Login("UnitTest@unit.test", "unittest"));
            
        }
        
    }
}