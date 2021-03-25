using Microsoft.EntityFrameworkCore.Migrations;

namespace SkinCareDiary.Database.Migrations
{
    public partial class changeAllProductsID : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Shelves_AllProducts_AllProductsId",
                table: "Shelves");

            migrationBuilder.DropColumn(
                name: "AllProductId",
                table: "Shelves");

            migrationBuilder.AlterColumn<int>(
                name: "AllProductsId",
                table: "Shelves",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Shelves_AllProducts_AllProductsId",
                table: "Shelves",
                column: "AllProductsId",
                principalTable: "AllProducts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Shelves_AllProducts_AllProductsId",
                table: "Shelves");

            migrationBuilder.AlterColumn<int>(
                name: "AllProductsId",
                table: "Shelves",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "AllProductId",
                table: "Shelves",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_Shelves_AllProducts_AllProductsId",
                table: "Shelves",
                column: "AllProductsId",
                principalTable: "AllProducts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
