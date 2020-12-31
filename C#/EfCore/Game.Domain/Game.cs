using System;
using System.Collections.Generic;

namespace Game.Domain
{
    public class Game
    {
        public Game()
        {
            GamePlayers = new List<GamePlayer>();
        }

        public int Id { get; set; }
        public int Round { get; set; }
        public DateTimeOffset? StartTime { get; set; }

        public List<GamePlayer> GamePlayers { get; set; }
    }
}