using System;

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

        public override bool Equals(object? obj)
        {
            if (!(obj is DtoUserResponse x))
            {
                return false;
            }

            return x.Id == Id && x.Name == Name;
        }

        protected bool Equals(DtoUserResponse other)
        {
            return Id == other.Id && Name == other.Name && Email == other.Email && Gender == other.Gender &&
                   SkinType == other.SkinType && BirthDay == other.BirthDay && Role == other.Role &&
                   Token == other.Token;
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Id, Name, Email, Gender, SkinType, BirthDay, Role, Token);
        }
    }
}