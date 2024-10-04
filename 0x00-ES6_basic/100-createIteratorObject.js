export default function createIteratorObject(report) {
  const employees = [];
  for (const department of Object.getOwnPropertyNames(report.allEmployees)) {
    employees.push(...report.allEmployees[department]);
  }
  return employees;
}
