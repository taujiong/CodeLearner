using System;
using System.Collections.Generic;

namespace Game.Domain
{
    public class Player
    {
        public Player()
        {
            GamePlayers = new List<GamePlayer>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime BirthDay { get; set; }

        public int ResumeId { get; set; }
        public Resume Resume { get; set; }

        public List<GamePlayer> GamePlayers { get; set; }
    }
}