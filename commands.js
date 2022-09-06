const cTable = require('console.table');
const index = require('./index');
const db = require('./db/connection');


const viewDepartments = () => {
    db.execute(
        `SELECT * FROM departments;`,
        function (err, results) {
            const table = cTable.getTable(results);
            console.log(table);
            index.promptConfirm();
        }
    );
};

const viewRoles = () => {
    db.execute(
        `SELECT title AS "Job Title", role_id AS "Job ID", dept_id AS "Department ID", salary AS "Salary" FROM roles;`,
        function (err, results) {
            const table = cTable.getTable(results);
            console.log(table);
            index.promptConfirm();
        }
    );
};

const viewEmployees = () => {
    db.execute(
        `SELECT employees.emp_id, employees.first_name AS "first name", employees.last_name AS "last name", roles.title, department.title AS department, roles.salary, concat(manager.first_name, " ", manager.last_name) AS manager
        FROM employees
        LEFT JOIN roles
        ON employees.role_id = roles.role_id
        LEFT JOIN department
        ON roles.dept_id = department.dept_id
        LEFT JOIN employees manager
        ON manager.emp_id = employees.manager_id;`
    ,
        function (err, results) {
            const table = cTable.getTable(results);
            console.log(table);
            index.promptConfirm();
        }
    );
};

const addDepartment = department => {
    db.execute(
        `INSERT INTO department (title) VALUE ( "${department.title}");`,
    );
    viewDepartments();
};

const addRole = role => {
    db.execute(
        `INSERT INTO roles (title, salary, dept_id) VALUES ("${role.title}", ${role.salary}, ${role.dept_id});`,
        );
    viewRoles();
};

const addEmployee = employee => {
    db.execute(
        `INSERT INTO employees (first_name, last_name, manager_id) VALUES ("${employee.first_name}", "${employee.last_name}", "${employee.manager_id}");`,
        );
    viewEmployees();
};

const updateRole = update => {
    db.execute(
        `UPDATE employees SET role_id = "${update.role_id}" WHERE id = "${update.emp_id}";`,
    );
    viewEmployees();
};



module.exports = {
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateRole
}