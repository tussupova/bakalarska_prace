using System.Linq;
using SkinCareDiary.Database.DB;
using SkinCareDiary.Services.Models.User;

namespace SkinCareDiary.Services.Helpers
{
    public class LoginHelper: ILoginHelper
    {
        private readonly IJwtHelper _jwtHelper;
        private readonly RepositoryContext _context;

        public LoginHelper(IJwtHelper jwtHelper, RepositoryContext context)
        {
            _jwtHelper = jwtHelper;
            _context = context;
        }

        public DtoUserResponse Login(string login, string password)
        {
            var db = _context;
            
                var x = db.Users.Where(o => o.Email == login).FirstOrDefault();
                if (x == null)
                {
                    return null;
                }

                var hashedPassword = _jwtHelper.HashPassword(password, x.Salt);

                if (_jwtHelper.HashEquals(hashedPassword, x.Password))
                {
                    return MapUserToDtoUserResponse(x);
                }

                return null;
            
        }

        private DtoUserResponse MapUserToDtoUserResponse(User user)
        {
            //ony for user, not for admin
            var dtoUser = new DtoUserResponse
            {
                Id = user.Id,
                Gender = user.Gender,
                Name = user.Name,
                BirthDay = user.BirthDay,
                SkinType = user.SkinType,
                Email = user.Email,
                Token = _jwtHelper.GenerateJwtToken(user),
            };

            return dtoUser;
        }


        //for new user - SignIn
        public DtoUserResponse CreateAccount(DtoUserSignIUp customer)
        {
            var context = _context;
                var salt = _jwtHelper.GenerateSalt();
                var newUser = new User()
                {
                    Name = customer.Name,
                    Gender = customer.Gender,
                    BirthDay = customer.BirthDay,
                    Salt = salt,
                    Password = _jwtHelper.HashPassword(customer.Password, salt),
                    Email = customer.Email

                    //TODO add other attributes
                };
                if (IsUserExist(newUser))
                {
                    return null;
                }

                context.Users.Add(newUser);
                context.SaveChanges();
                return MapUserToDtoUserResponse(newUser);
            }
        

        public bool IsUserExist(User user)
        {
            var db = _context;
            
                return db.Users.Any(o => o.Email == user.Email);
            
        }
    }
}