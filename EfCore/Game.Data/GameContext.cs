using Game.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Game.Data
{
    public class GameContext : DbContext
    {
        public static readonly ILoggerFactory ConsoleLoggerFactory =
            LoggerFactory.Create(builder =>
            {
                // builder.AddFilter((category, level) =>
                //     category == DbLoggerCategory.Database.Command.Name
                //     && level == LogLevel.Information);
            });

        public DbSet<League> Leagues { get; set; }
        public DbSet<Club> Clubs { get; set; }
        public DbSet<Player> Players { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder
                .UseLoggerFactory(ConsoleLoggerFactory)
                .UseMySql("Server=localhost;Database=Game;Uid=root;Pwd=Pas5w0rd*");
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

            modelBuilder.Entity<GamePlayer>(b => { b.HasKey(gp => new {gp.GameId, gp.PlayerId}); });

            modelBuilder.Entity<Resume>(b =>
            {
                b.HasOne(r => r.Player)
                    .WithOne(p => p.Resume)
                    .HasForeignKey<Resume>(x => x.PlayerId);
            });
        }
    }
}