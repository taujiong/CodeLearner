using System;
using Microsoft.AspNetCore.SignalR.Client;

namespace ChatWebClient
{
    public class SignalRWebClient
    {
        private readonly HubConnection _connection;
        public SignalRWebClient()
        {
            _connection = new HubConnectionBuilder()
                .WithUrl("https://localhost:5001/Chat")
                .Build();

            BindEvents();

            _connection.StartAsync().ConfigureAwait(false).GetAwaiter().GetResult();
        }

        private void BindEvents()
        {
            _connection.On<string, string>("ReceiveMessage", (user, message) =>
            {
                Console.WriteLine($"{user} from others says: {message}");

                SendMessage("web", "hello from web");
            });
        }

        private void SendMessage(string user, string message)
        {
            _connection.SendAsync("SendMessage", user, message);
        }
    }
}