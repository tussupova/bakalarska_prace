using System.Collections.Generic;
using SkinCareDiary.Database.DB;

namespace SkinCareDiary.Services.Helpers
{
    public interface IJwtHelper
    {
        byte[] GenerateSalt();
        byte[] HashPassword(string password, byte[] salt);
        bool HashEquals(IEnumerable<byte> hash1, IEnumerable<byte> hash2);
        string GenerateJwtToken(User user);
    }
}