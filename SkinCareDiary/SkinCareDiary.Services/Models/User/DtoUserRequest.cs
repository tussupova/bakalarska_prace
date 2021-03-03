namespace SkinCareDiary.Services.Models.User
{
    public class DtoUserRequest // f=>b
    {
        
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Gender { get; set; }
        public string SkinType { get; set; }
        public string BirthDay { get; set; }
        public string Role { get; set; }
    }
}