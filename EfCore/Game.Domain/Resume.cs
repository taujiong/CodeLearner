namespace Game.Domain
{
    public class Resume
    {
        public int Id { get; set; }
        public string Description { get; set; }

        public int PlayerId { get; set; }
        public Player Player { get; set; }
    }
}