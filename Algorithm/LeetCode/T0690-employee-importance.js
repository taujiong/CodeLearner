import { Employee } from "../TypeDefinition.js";

/**
 * https://leetcode-cn.com/problems/employee-importance/
 * 简单，递归
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
  const employee = employees.find((e) => e.id === id);
  if (employee.subordinates.length === 0) return employee.importance;

  const reducer = (acc, cur) => acc + GetImportance(employees, cur);
  return employee.subordinates.reduce(reducer, employee.importance);
};
