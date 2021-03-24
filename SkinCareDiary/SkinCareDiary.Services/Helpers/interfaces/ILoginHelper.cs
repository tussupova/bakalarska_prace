using SkinCareDiary.Services.Models.User;

namespace SkinCareDiary.Services.Helpers
{
    public interface ILoginHelper
    {
        DtoUserResponse Login(string login, string password);
        DtoUserResponse CreateAccount(DtoUserSignIUp customer);
    }
}