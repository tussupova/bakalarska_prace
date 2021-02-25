namespace SkinCareDiary.Services.Models.User
{
    public class DtoCustomer:DtoUser
    {
        public override string Role => "customer";
        public override bool IsAdmin()
        {
            return false;
        }

        public override bool IsUser()
        {
            return true;
        }
    }
}