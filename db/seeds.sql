INSERT INTO department (title)
VALUES
("Accounting"),
("Human Resources"),
("Management");

INSERT INTO roles (title, salary, dept_id)
VALUES
("Account Clerk", 40000.00, 1) ,
("Sales Associate", 30000.00, 2) ,
("Assistant Manager", 50000, 3),
("Office Manager", 700000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ("Michael", "Scott", 3, null),
  ("Ryan", "Howard", 3, 1),
  ("Angela", "Kinsey", 1, 1 ),
  ("Brian", "Baumgartner", 1, 1),
  ("Jim", "Halpert", 2, 1),
  ("Dwight", "Schrute", 2, 1),
  ("Andy", "Bernard", 1, 2);

