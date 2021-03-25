using Microsoft.EntityFrameworkCore.Migrations;

namespace SkinCareDiary.Database.Migrations
{
    public partial class changeProductstableToShelfAndChangeSomeAttribut3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_AllProducts_AllProductsId",
                table: "Products");

            migrationBuilder.DropForeignKey(
                name: "FK_Products_ProductTypes_ProductTypeId",
                table: "Products");

            migrationBuilder.DropForeignKey(
                name: "FK_Products_Routines_RoutineId",
                table: "Products");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Products",
                table: "Products");

            migrationBuilder.RenameTable(
                name: "Products",
                newName: "Shelves");

            migrationBuilder.RenameIndex(
                name: "IX_Products_RoutineId",
                table: "Shelves",
                newName: "IX_Shelves_RoutineId");

            migrationBuilder.RenameIndex(
                name: "IX_Products_ProductTypeId",
                table: "Shelves",
                newName: "IX_Shelves_ProductTypeId");

            migrationBuilder.RenameIndex(
                name: "IX_Products_AllProductsId",
                table: "Shelves",
                newName: "IX_Shelves_AllProductsId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Shelves",
                table: "Shelves",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Shelves_AllProducts_AllProductsId",
                table: "Shelves",
                column: "AllProductsId",
                principalTable: "AllProducts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Shelves_ProductTypes_ProductTypeId",
                table: "Shelves",
                column: "ProductTypeId",
                principalTable: "ProductTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Shelves_Routines_RoutineId",
                table: "Shelves",
                column: "RoutineId",
                principalTable: "Routines",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Shelves_AllProducts_AllProductsId",
                table: "Shelves");

            migrationBuilder.DropForeignKey(
                name: "FK_Shelves_ProductTypes_ProductTypeId",
                table: "Shelves");

            migrationBuilder.DropForeignKey(
                name: "FK_Shelves_Routines_RoutineId",
                table: "Shelves");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Shelves",
                table: "Shelves");

            migrationBuilder.RenameTable(
                name: "Shelves",
                newName: "Products");

            migrationBuilder.RenameIndex(
                name: "IX_Shelves_RoutineId",
                table: "Products",
                newName: "IX_Products_RoutineId");

            migrationBuilder.RenameIndex(
                name: "IX_Shelves_ProductTypeId",
                table: "Products",
                newName: "IX_Products_ProductTypeId");

            migrationBuilder.RenameIndex(
                name: "IX_Shelves_AllProductsId",
                table: "Products",
                newName: "IX_Products_AllProductsId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Products",
                table: "Products",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_AllProducts_AllProductsId",
                table: "Products",
                column: "AllProductsId",
                principalTable: "AllProducts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Products_ProductTypes_ProductTypeId",
                table: "Products",
                column: "ProductTypeId",
                principalTable: "ProductTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Routines_RoutineId",
                table: "Products",
                column: "RoutineId",
                principalTable: "Routines",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
