namespace SkinCareDiary.Services.Models.User
{
    public class DtoUserResponse
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public string SkinType { get; set; }
        public string BirthDay { get; set; }
        public string Role { get; }
    }
}