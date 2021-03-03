namespace SkinCareDiary.Services.Models.User
{
    public class DtoUserResponse //b=>f
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Gender { get; set; }
        public string SkinType { get; set; }
        public string BirthDay { get; set; }
        public string Role { get; set; }
        public string Token { get; set; }
    }
}