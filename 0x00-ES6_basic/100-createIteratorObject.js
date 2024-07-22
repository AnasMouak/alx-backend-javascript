export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  let employeesList = [];
  
  for (const department in allEmployees) {
    if (allEmployees.hasOwnProperty(department)) {
      employeesList = employeesList.concat(allEmployees[department]);
    }
  }
  
  return employeesList[Symbol.iterator]();
}
