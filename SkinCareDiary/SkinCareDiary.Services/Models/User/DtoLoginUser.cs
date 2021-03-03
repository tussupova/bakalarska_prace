using System.ComponentModel.DataAnnotations;

namespace SkinCareDiary.Services.Models.User
{
    public class DtoLoginUser
    {
        [Required]
        public string Email { get; set; }
        
        [Required]
        public string Password { get; set; }
    }
}