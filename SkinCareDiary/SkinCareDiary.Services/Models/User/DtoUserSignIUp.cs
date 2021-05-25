using System.ComponentModel.DataAnnotations;

namespace SkinCareDiary.Services.Models.User
{
    public class DtoUserSignIUp
    {
        [Required]
        [MinLength(3)]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        
        [Required]
        [MinLength(6)]
        public string Password { get; set; }
        
        public string Gender { get; set; }
        public string SkinType { get; set; }
        public string BirthDay { get; set; }

    }
}