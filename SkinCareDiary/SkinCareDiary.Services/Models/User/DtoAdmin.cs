namespace SkinCareDiary.Services.Models.User
{
    
    public  class DtoAdmin : DtoUser
    {
        public override string Role => "admin";
        
        public override bool IsAdmin()
        {
            return true;
        }

        public override bool IsUser()
        {
            return false;
        }
    }
}