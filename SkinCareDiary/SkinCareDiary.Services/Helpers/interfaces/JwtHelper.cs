using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.Extensions.Options;
using SkinCareDiary.Database.DB;
using SkinCareDiary.Services.Settings;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;

namespace SkinCareDiary.Services.Helpers
{
    public class JwtHelper : IJwtHelper
    {
        private const int Iterations = 100000;
        private const int HashSize = 256 / 8;
        private const int SaltSize = 128 / 8;

        private readonly JwtSettings _jwtSettings;

        public JwtHelper(IOptions<JwtSettings> jwtSettings)
        {
            _jwtSettings = jwtSettings.Value;
        }

        public byte[] GenerateSalt()
        {
            using var provider = new RNGCryptoServiceProvider();
            var result = new byte[SaltSize];
            provider.GetBytes(result);

            return result;
        }

        public byte[] HashPassword(string password, byte[] salt)
        {
            return KeyDerivation.Pbkdf2(password, salt, KeyDerivationPrf.HMACSHA512, Iterations, HashSize);
        }

        public bool HashEquals(IEnumerable<byte> hash1, IEnumerable<byte> hash2)
        {
            return hash1.SequenceEqual(hash2);
        }

        public string GenerateJwtToken(User user)
        {
            var now = DateTime.UtcNow;
            return GenerateJwtToken(user, _jwtSettings.Secret, now, now.AddMonths(1));
        }

        private string GenerateJwtToken(User user, string key, DateTime now, DateTime expiration)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(
                new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new List<Claim>
                    {
                        new Claim(ClaimTypes.Name, user.Id.ToString(), ClaimValueTypes.Integer32)
                    }),
                    IssuedAt = now,
                    NotBefore = now,
                    Expires = expiration,
                    Issuer = _jwtSettings.Issuer,
                    Audience = _jwtSettings.Issuer,
                    SigningCredentials = new SigningCredentials(
                        new SymmetricSecurityKey(GetKey(key)),
                        SecurityAlgorithms.HmacSha512Signature
                    )
                }
            );

            return tokenHandler.WriteToken(token);
        }

        private static byte[] GetKey(string secret)
        {
            return Encoding.ASCII.GetBytes(
                Convert.ToBase64String(
                    Encoding.ASCII.GetBytes(secret)
                )
            );
        }
    }
}