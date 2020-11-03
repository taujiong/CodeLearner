using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Game.Data.Migrations
{
    public partial class One2One : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ResumeId",
                table: "Players",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Resume",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Description = table.Column<string>(nullable: true),
                    PlayerId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Resume", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Resume_Players_PlayerId",
                        column: x => x.PlayerId,
                        principalTable: "Players",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Resume_PlayerId",
                table: "Resume",
                column: "PlayerId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Resume");

            migrationBuilder.DropColumn(
                name: "ResumeId",
                table: "Players");
        }
    }
}