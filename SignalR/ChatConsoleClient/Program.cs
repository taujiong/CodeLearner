using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR.Client;

namespace ChatConsoleClient
{
    class Program
    {
        static async Task Main(string[] args)
        {
            var connection = new HubConnectionBuilder()
                .WithUrl("https://localhost:5001/Chat")
                .Build();

            connection.Closed += async exception =>
            {
                Console.WriteLine("Connection is closed.");
                await Task.Delay(new Random().Next(0,5) * 1000);
                // await connection.StartAsync();
            };

            await connection.StartAsync();

            connection.On<string, string>("ReceiveMessage", (user, message) =>
            {
                Console.WriteLine($"{user}: {message}");
            });

            while (true)
            {
                var key = Console.ReadKey();
                if (key.Key == ConsoleKey.S)
                {
                    await connection.SendAsync("SendMessage", "console", "hello from console");
                }
                else
                {
                    await connection.StopAsync();
                }
            }
        }
    }
}