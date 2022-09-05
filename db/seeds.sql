INSERT INTO departments (dept_id, title)
VALUES
  (1, 'Accounting'),
  (2, 'Sales'),
  (3, "Customer Service"),
  (4, 'Transportation'),
  (10, "Management");

INSERT INTO roles (role_id, title, salary, dept_id)
VALUES
   (11,"Account Clerk", 40000.00, 1) ,
   (12, "Lead Accountant", 60000.00, 1),
   (13, "Accounting Manager", 75000.00, 1),
   (21, "Sales Associate", 30000.00, 2) ,
   (22,"Senior Sales Associate", 40000.00, 2) ,
   (23,"Sales Manager", 50000.00, 2)  ,
   (31, "Customer Servicer Rep", 25000.00, 3) ,
   (32,"Escalations Rep", 30000.00, 3) ,
   (33, "Sup- Customer Service",40000.00, 3) ,
   (34,"Manger- Customer Service", 50000.00, 3)  ,
   (41,"Truck Driver", 40000.00, 4)  ,
   (42,"Mechanic", 50000.00, 4) ,
   (43,"Dispatcher", 40000.00, 4)  ,
   (1012,"Director of Sales and Acct", 100000.00, 10) ,
   (1034, "Director of CS and TP", 100000.00, 10);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
  VALUES
  ("Angela", "Kinsey", 12, 13),
  ("Brian", "Baumgartner", 11, 13),
  ("Michael", "Scott", 23, 1012),
  ("Jim", "Halpert", 22, 23),
  ("Dwight", "Schrute", 21, 23),
  ("Andy", "Bernard", 31, 34),
  ("Ryan", "Howard", 34, 1034);
