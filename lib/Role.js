class Role { 
    id
    title
    salary
    dept_id 
    constructor(role_id, title, salary, dept_id) {
        this.id = role_id;
        this.title = title;
        this.salary = salary;
        this.dept_id = dept_id;
    }
};

module.exports = Role; 