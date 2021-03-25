using Microsoft.EntityFrameworkCore.Migrations;

namespace SkinCareDiary.Database.Migrations
{
    public partial class PhotosTabelChange2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Url",
                table: "Photos");
            
            migrationBuilder.AddColumn<string>(
                name: "NewName",
                table: "Photos",
                type: "text",
                nullable: true);
            
            migrationBuilder.AddColumn<string>(
                name: "OriginalName",
                table: "Photos",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NewName",
                table: "Photos");

            migrationBuilder.RenameColumn(
                name: "OriginalName",
                table: "Photos",
                newName: "Url");
        }
    }
}
