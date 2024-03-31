const fs = require('fs/promises');
// read all the employee data
async function readEmployeesData() {
  const result = await fs.readFile('./employee.json', {
    encoding: 'utf-8',
  });
  const employees = JSON.parse(result);

  return employees;
}
// write the data in the file
async function writeEmployeesData(employee) {
  const data = JSON.stringify(employee, null, 2);
  await fs.writeFile('./employee.json', data);
}
// read all the employess
async function getAllEmployees() {
  let employees = await fs.readFile('./employee.json', {
    encoding: 'utf-8',
  });
  employees = JSON.parse(employees);
  return employees;
}
// read the id give from  the server.js
async function getEmployeeById(id) {
  const employees = await readEmployeesData();
  return employees.find((employee) => employee.id == id);
}
async function addEmployee(employeeData) {
  // find the max id
  // new id=max+1 //employees.length+1 will have logical errors
  let employees = await readEmployeesData();
  let max = 0;
  employees.forEach((employee) => {
    if (max < employee.id) {
      max = employee.id;
    }
  });
  let newId = max + 1;
  const newEmployee = {
    ...employeeData,
    id: newId,
  };
  employees.push(newEmployee);
  await writeEmployeesData(employees);
  return newEmployee;
}

// patch
async function updateEmployeeDataById(id, employeeData) {
  let employees = await readEmployeesData();
  let index = -1;
  employees.forEach((employee, i) => {
    if (id === employee.id) {
      index = i;
    }
  });
  if (index === -1) {
    return -1;
  } else {
    let employee = employees[index];
    console.log(employee);

    employee = {
      ...employee,
      ...employeeData,
    };
    employees[index] = employee;
    await writeEmployeesData(employees);
    return employee;
  }
}
// delete the id
async function removeEmployee(id) {
  let employees = await readEmployeesData();

  let index = -1;

  employees.forEach((employee, i) => {
    if (id == employee.id) {
      index = i;
    }
  });

  let deletedEmployeeDetails;
  if (index !== -1) {
    let result = employees.splice(index, 1);

    await writeEmployeesData(employees);

    if (result.length) {
      deletedEmployeeDetails = result[0];
    }
  }

  return deletedEmployeeDetails;
}

module.exports = {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployeeDataById,
  removeEmployee,
};
