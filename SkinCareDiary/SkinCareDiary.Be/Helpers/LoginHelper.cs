using System.Runtime.CompilerServices;
using SkinCareDiary.Database.DB;
using SkinCareDiary.Services.Models.User;


namespace SkinCareDiary.Be.Helpers
{
    public static class LoginHelper
    {
        public static DtoCustomer WhoIsLogined { get; set; }
        public static bool IsUserExist()
        {
            return false;
        }

        //for new user - SignIn
        public static void CreateAccount(DtoCustomer customer)
        {
            if (IsUserExist()!)
            {
                using (var context = new RepositoryContext())
                {
                    context.Database.EnsureCreated();
                    var newUser = new User()
                    {
                        Name = customer.Name,
                        Gender=customer.Gender,
                        BirthDay=customer.BirthDay
                        
                        //TODO add other attributes
                    };
                    context.Users.Add(newUser);
                    context.SaveChanges();
                    WhoIsLogined = customer;
                }
            } //TODO if user already exist
        }
        //TODO for exist user -LogIn

        
        static public void LogOut()
        {
            WhoIsLogined = null;
        }



    }
}