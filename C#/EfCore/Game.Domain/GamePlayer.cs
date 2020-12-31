namespace Game.Domain
{
    public class GamePlayer
    {
        public int GameId { get; set; }
        public int PlayerId { get; set; }

        public Game Game { get; set; }
        public Player Player { get; set; }
    }
}