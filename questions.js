const inquirer = require('inquirer');
const Department = require('./lib/Department');
const Role = require('./lib/Role');
const Employee = require("./lib/Employee");
const {viewDepartment, viewRole, viewEmployee } = require("./commands");

const promptUser = () => {
    console.log('Employee Manager'); TODO://this need to be jazzed up TODO:
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: ["View all Departments", "Add a Department", "View all Roles", "Add a role", "Update a role", "View all Employees", "Add an Employee"]
        },
    ])
    .then(choice => {
        if(choice.menu === "View all Departments"){
            console.log('View All Departments');
            then
            viewDepartment();
        }
        if(choice.menu === "Add a Department"){
            console.log("Add a Department");
            newDepartment();
        }
        if(choice.menu === "View all Roles"){
            console.log("View all Roles");
            viewRole();
        }
        if(choice.menu === "Add a role"){
            console.log("Add a role");
            newRole();
        }      
        if(choice.menu === "View all Employees"){
            console.log("View all Employees");
            viewEmployee();
        }      
        if(choice.menu === "Add an Employee"){
            console.log("Add an Employee");
            newEmployee();
        }
    })
}

newDepartment = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: "Please enter the Department ID. (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else console.log("Please enter the Department ID.");
                return false;
            }
        },
        {
            type: 'input',
            name: 'title',
            message: "Please enter the Department name. (Required)",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else console.log("Please enter the Department name.");
                return false;
            }
        },
        {
            type: 'confirm',
            name: 'confirm',
            message: "Do you need to enter more?",
            default: false
        }
    ])
        .then(departmentData => {
            const department = new Department(departmentData.title);
            newDepartment(department);
            console.log("New Department has been updated");
            console.log(department);
            if (departmentData.confirm) {
                return promptUser();
            } else {
                return console.log("Employee Manager has been closed.");
            }
        });
};
 newRole = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: "Please enter the Role ID. (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else console.log("Please enter the Role ID.");
                return false;
            }
        },
        {
            type: 'input',
            name: 'title',
            message: "Please enter the Role name. (Required)",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else console.log("Please enter the Role name.");
                return false;
            }
        },
        {
            type: 'input',
            name: 'salary',
            message: "Please enter the Salary for this Role. (Required)",
            validate: salaryInput => {
                if (salaryInput) {
                    return true;
                } else console.log("Please enter the Salary for this Role.");
                return false;
            }
        },
        {
            type: 'input',
            name: 'deptId',
            message: "Please enter the Department this role is part of. (Required)",
            validate: deptIdInput => {
                if (deptIdInput) {
                    return true;
                } else console.log("Please enter the Department this role is part of. ");
                return false;
            }
        },
        {
            type: 'confirm',
            name: 'confirm',
            message: "Do you need to enter more?",
            default: false
        }
    ])
        .then(roleData => {
            const role = new Role(roleData.title);
            newRole(role);
            console.log("New Role has been updated");
            console.log(department);
            if (roleData.confirm) {
                return promptUser();
            } else {
                return console.log("Employee Manager has been closed.");
            }
        });

    };
 newEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: "Please enter the Employee ID. (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else console.log("Please enter the Employee ID");
                return false;
            }
        },
        {
            type: 'input',
            name: 'First Name',
            message: "Please enter the Employee's First Name (Required)",
            validate: firstInput => {
                if (firstInput) {
                    return true;
                } else console.log("Please enter the Employee's First Name.");
                return false;
            }
        },
        {
            type: 'input',
            name: 'Last Name',
            message: "Please enter the Employee's Last Name (Required)",
            validate: lastInput => {
                if (lastInput) {
                    return true;
                } else console.log("Please enter the Employee's Last Name.");
                return false;
            }
        },
        {
            type: 'input',
            name: 'deptId',
            message: "Please enter the Role ID for the employee. (Required)",
            validate: roleIdInput => {
                if (roleIdInput) {
                    return true;
                } else console.log("Please enter the Role ID for the employee. ");
                return false;
            }
        },
        {
            type: 'input',
            name: 'deptId',
            message: "Please enter the Department ID for the employee. (Required)",
            validate: deptIdInput => {
                if (deptIdInput) {
                    return true;
                } else console.log("Please enter the Department ID for the employee. ");
                return false;
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: "Please enter the Manager ID for the employee. (Required)",
            validate: managerIdInput => {
                if (managerIdInput) {
                    return true;
                } else console.log("Please enter the Manager ID for the employee. ");
                return false;
            }
        },
        {
            type: 'confirm',
            name: 'confirm',
            message: "Do you need to enter more?",
            default: false
        }
    ])
        .then(employeeData => {
            const employee = new Employee(employeeData.title);
            newEmployee(employee);
            console.log("New Employee has been updated");
            console.log(employee);
            if (employeeData.confirm) {
                return promptUser();
            } else {
                return console.log("Employee Manager has been closed.");
            }
        });

    };
promptUser();


