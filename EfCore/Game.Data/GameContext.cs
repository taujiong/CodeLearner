using Game.Domain;
using Microsoft.EntityFrameworkCore;

namespace Game.Data
{
    public class GameContext : DbContext
    {
        public DbSet<League> Leagues { get; set; }
        public DbSet<Club> Clubs { get; set; }
        public DbSet<Player> Players { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql("Server=localhost;Database=Game;Uid=root;Pwd=Pas5w0rd*");
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Club>(b =>
            {
                b.Property(c => c.DateOfEstablishment)
                    .HasColumnType("date");
                b.Property(c => c.Name)
                    .HasMaxLength(20);
            });
        }
    }
}