using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using SkinCareDiary.Services.Helpers;
using SkinCareDiary.Services.Settings;

namespace SkinCareDiary.Be
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<RouteOptions>(options => options.LowercaseUrls = true);
           services.AddCors(options =>
            {
                options.AddDefaultPolicy(builder =>
                {
                    builder.AllowAnyOrigin()
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
            });
            

            // settings
            services.Configure<JwtSettings>(Configuration.GetSection(nameof(JwtSettings)));

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo {Title = "SkinCareDiary.Be", Version = "v1"});
            });


            // JWT autentizace
            var jwtSettings = Configuration.GetSection("JwtSettings").Get<JwtSettings>();
            var encodedKey =
                Encoding.ASCII.GetBytes(
                    Convert.ToBase64String(
                        Encoding.ASCII.GetBytes(jwtSettings.Secret)
                    )
                );
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(
                    options =>
                    {
                        options.RequireHttpsMetadata = false;
                        options.SaveToken = true;
                        options.ClaimsIssuer = jwtSettings.Issuer;
                        options.Audience = jwtSettings.Issuer;
                        options.TokenValidationParameters = new TokenValidationParameters
                        {
                            ValidateIssuer = true,
                            ValidateAudience = true,
                            ValidateLifetime = false,
                            RequireAudience = true,
                            ValidateIssuerSigningKey = false,
                            RequireExpirationTime = true,
                            ValidIssuer = jwtSettings.Issuer,
                            ValidAudience = jwtSettings.Issuer,
                            IssuerSigningKey = new SymmetricSecurityKey(encodedKey)
                        };
                    }
                );


            // dependency injection registrace
            services.AddScoped<ILoginHelper, LoginHelper>();
            services.AddScoped<IRoutineHelper, RoutineHelper>();
            services.AddScoped<IJwtHelper, JwtHelper>();
            services.AddScoped<IPhotoHelper, PhotoHelper>();
            services.AddScoped<IProductHelper, ProductHelper>();
            services.AddScoped<ICalendarHelper, CalendarHelper>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "SkinCareDiary.Be v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseCors();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });

            app.UseStaticFiles();
            app.UseStaticFiles(new StaticFileOptions()
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"Resources")),
                RequestPath = new PathString("/Resources")
            });
        }
    }
}