namespace SkinCareDiary.Services.Models.User
{
    public abstract class DtoUser : IDtoPerson
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public string SkinType { get; set; }
        public string BirthDay { get; set; }
        public abstract string Role { get; }
        public abstract bool IsAdmin();
        public abstract bool IsUser();
    }
}