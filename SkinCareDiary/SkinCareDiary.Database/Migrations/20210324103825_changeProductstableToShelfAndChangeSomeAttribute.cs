using Microsoft.EntityFrameworkCore.Migrations;

namespace SkinCareDiary.Database.Migrations
{
    public partial class changeProductstableToShelfAndChangeSomeAttribute : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AllProductId",
                table: "Products",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "AllProductsId",
                table: "Products",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Products_AllProductsId",
                table: "Products",
                column: "AllProductsId");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_AllProducts_AllProductsId",
                table: "Products",
                column: "AllProductsId",
                principalTable: "AllProducts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_AllProducts_AllProductsId",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_Products_AllProductsId",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "AllProductId",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "AllProductsId",
                table: "Products");
        }
    }
}
