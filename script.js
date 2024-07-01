// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  let employees = []; // Array to hold employee objects
  let addMore = true; // Flag to check if the user wants to add more employees

  while (addMore) {
    // Get user input for each property
    let firstName = prompt("Enter employee's first name:");
    let lastName = prompt("Enter employee's last name:");
    let salaryInput = prompt("Enter employee's salary:");

    // Check if salary is a number
    let salary = parseFloat(salaryInput); // Convert input to a number
    while (isNaN(salary)) { // If salary is not a number, prompt again
      salaryInput = prompt("Invalid input. Please enter a numeric value for employee's salary:");
      salary = parseFloat(salaryInput);
    }
    
    // Create an employee object and add it to the array
    let employee = { firstName, lastName, salary };
    employees.push(employee);
    addMore = confirm("Do you want to add another employee?");
  }

    return employees;
}
// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;

  // Sum all salaries
  for (let employee of employeesArray) {
    totalSalary += employee.salary;
  }

  // TODO: Calculate and display the average salary
  let averageSalary = totalSalary / employeesArray.length;

  // Display the result
  console.log(`The average salary is: ${averageSalary.toFixed(2)}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const selectedEmployee = employeesArray[randomIndex];

  console.log("Selected Employee:", selectedEmployee);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', function() {
  trackEmployeeData();
});
