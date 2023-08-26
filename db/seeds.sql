INSERT INTO departments (name) VALUES
  ('Sales'),
  ('Engineering'),
  ('Marketing'),
  ('Finance');

INSERT INTO roles (title, salary, department_id) VALUES
  ('Sales Manager', 80000, 1),
  ('Software Engineer', 90000, 2),
  ('Marketing Coordinator', 60000, 3),
  ('Financial Analyst', 75000, 4),
  ('Software Engineering Manager', 135000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
  ('John', 'Doe', 1, NULL),
  ('Jane', 'Smith', 2, 1),
  ('Michael', 'Johnson', 3, 1),
  ('Emily', 'Williams', 4, NULL),
  ('Robert', 'Miles', 2, 5);