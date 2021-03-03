using System.Linq;
using SkinCareDiary.Database.DB;
using SkinCareDiary.Services.Models.User;

namespace SkinCareDiary.Services.Helpers
{
    public static class LoginHelper
    {
        public static DtoUserRequest WhoIsLogined { get; set; }

        public static DtoUserResponse Login(string login, string password)
        {
            using (var db= new RepositoryContext())
            {
                var x = db.Users.Where(o => o.Email == login).Where(o => o.Password == password).FirstOrDefault();
                return MapUserToDtoUserResponse(x);
            }
        }

        public static DtoUserResponse GetUserFromId(int id)
        {
            using (var db= new RepositoryContext())
            {
                var x = db.Users.Where(o => o.Id == id).FirstOrDefault();
                return MapUserToDtoUserResponse(x);
            }
        }
        public static DtoUserResponse MapUserToDtoUserResponse(User user)
        {
            if (user == null)
            {
                return null;
            }
            //ony for user, not for admin
            var dtoUser = new DtoUserResponse
            {
                Id = user.Id,
                Gender = user.Gender,
                Name = user.Name,
                BirthDay = user.BirthDay,
                SkinType = user.SkinType,
                Password = user.Password,
                Email = user.Email
            };

            return dtoUser;
        }
        

        //for new user - SignIn
        public static void CreateAccount(DtoUserRequest customer)
        {
            using (var context = new RepositoryContext())
                {
                    var newUser = new User()
                    {
                        Name = customer.Name,
                        Gender=customer.Gender,
                        BirthDay=customer.BirthDay,
                        Password = customer.Password, 
                        Email = customer.Email
                        
                        //TODO add other attributes
                    };
                    context.Users.Add(newUser);
                    context.SaveChanges();
                    WhoIsLogined = customer;
                }
        }

        
        static public void LogOut()
        {
            WhoIsLogined = null;
        }



    }
}