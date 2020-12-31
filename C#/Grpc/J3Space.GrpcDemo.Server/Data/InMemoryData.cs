using System.Collections.Generic;

namespace J3Space.GrpcDemo.Server.Data
{
    public class InMemoryData
    {
        public static readonly List<Employee> Employees = new List<Employee>
        {
            new Employee
            {
                Id = 1,
                Name = "taujiong",
                Salary = 22000
            },
            new Employee
            {
                Id = 2,
                Name = "jarvis",
                Salary = 2212
            },
            new Employee
            {
                Id = 1,
                Name = "jinx",
                Salary = 2203
            }
        };
    }
}