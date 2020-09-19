using System;
using System.Linq;
using System.Threading.Tasks;
using Grpc.Core;
using J3Space.GrpcDemo.Server.Data;
using Microsoft.Extensions.Logging;

namespace J3Space.GrpcDemo.Server.Services
{
    public class MyEmployeeService : EmployeeService.EmployeeServiceBase
    {
        private readonly ILogger<MyEmployeeService> _logger;

        public MyEmployeeService(ILogger<MyEmployeeService> logger)
        {
            _logger = logger;
        }

        public override Task<Employee> GetById(GetByIdRequest request, ServerCallContext context)
        {
            var employee = InMemoryData.Employees
                .FirstOrDefault(e => e.Id == request.Id);

            if (employee != null) return Task.FromResult(employee);

            throw new Exception($"Employee not found: {request.Id}");
        }
    }
}