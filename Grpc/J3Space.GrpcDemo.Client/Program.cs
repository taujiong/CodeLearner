using System;
using System.Threading.Tasks;
using Grpc.Net.Client;

namespace J3Space.GrpcDemo.Client
{
    internal class Program
    {
        private static async Task Main(string[] args)
        {
            await GetEmployeeById(2);
        }

        public static async Task GetEmployeeById(int id)
        {
            using var channel = GrpcChannel.ForAddress("https://localhost:5001");
            var client = new EmployeeService.EmployeeServiceClient(channel);
            var employee = await client.GetByIdAsync(new GetByIdRequest
            {
                Id = id
            });

            Console.WriteLine($"Response messages: {employee}");
        }
    }
}