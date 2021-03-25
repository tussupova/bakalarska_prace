using Microsoft.EntityFrameworkCore.Migrations;

namespace SkinCareDiary.Database.Migrations
{
    public partial class changeIndicatorType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<float>(
                name: "Value",
                table: "Indicators",
                type: "float",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Value",
                table: "Indicators",
                type: "int",
                nullable: false,
                oldClrType: typeof(float),
                oldType: "float");
        }
    }
}
