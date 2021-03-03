using System.Collections.Generic;

namespace SkinCareDiary.Database.DB
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        
        public string Email { get; set;  }
        public byte[] Password { get; set; }
        public byte[] Salt { get; set; }
        public string Gender { get; set; }
        
        public string SkinType { get; set; }
        public string BirthDay { get; set; }
        
        public List<Routine> Routines { get; set; }
    }
}