INSERT INTO department (title)
VALUES
('Accounting'),
('Human Resources'),
('Management');

INSERT INTO roles (title, salary, dept_id)
VALUES
("Account Clerk", 40000.00, 1) ,
("Sales Associate", 30000.00, 2) ,
("Office Manager", 700000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ("Angela", "Kinsey", 1, 1),
  ("Brian", "Baumgartner", 1, 1),
  ("Michael", "Scott", 23, 1012),
  ("Jim", "Halpert", 22, 23),
  ("Dwight", "Schrute", 21, 23),
  ("Andy", "Bernard", 31, 34),
  ("Ryan", "Howard", 34, 1034);
