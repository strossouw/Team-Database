INSERT INTO departments (dept_id, title)
VALUES
  ('Accounting'),
  ('Sales'),
  ("Management");

INSERT INTO roles (role_id, title, salary, dept_id)
VALUES
   ("Account Clerk", 40000.00, 1) ,
   ("Sales Associate", 50000.00, 2) ,
   ("Office Manager", 70000.00, 4) ,
  
INSERT INTO employees (first_name, last_name, role_id, manager_id)
  VALUES
  ("Angela", "Kinsey", 1, 1),
  ("Brian", "Baumgartner", 1, 1),
  ("Jim", "Halpert", 2, 2),
  ("Dwight", "Schrute", 2, 2),
  ("Andy", "Bernard", 2, 2),
  ("Michael", "Scott", 3 , 3 ),
