using Microsoft.EntityFrameworkCore.Migrations;

namespace SkinCareDiary.Database.Migrations
{
    public partial class routineDate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Routines_Dates_RoutineDateId",
                table: "Routines");

            migrationBuilder.DropColumn(
                name: "DateId",
                table: "Routines");

            migrationBuilder.AlterColumn<int>(
                name: "RoutineDateId",
                table: "Routines",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Routines_Dates_RoutineDateId",
                table: "Routines",
                column: "RoutineDateId",
                principalTable: "Dates",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Routines_Dates_RoutineDateId",
                table: "Routines");

            migrationBuilder.AlterColumn<int>(
                name: "RoutineDateId",
                table: "Routines",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "DateId",
                table: "Routines",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_Routines_Dates_RoutineDateId",
                table: "Routines",
                column: "RoutineDateId",
                principalTable: "Dates",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
