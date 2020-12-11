/* Seeds for SQL table. We haven't discussed this type of file yet */
USE cms;

/* Seeds for department table */
INSERT INTO department (name)
VALUES ("Human Resources"), ("Sales"), ("Leadership"), ("Admin");

/* Seeds for position table */
INSERT INTO position (title, salary, department_id)
VALUES ("Director", 75000, 3);

INSERT INTO position (title, salary, department_id)
VALUES ("Senior Manager", 70000, 2);

INSERT INTO position (title, salary, department_id)
VALUES ("Manager", 60000, 2);

INSERT INTO position (title, salary, department_id)
VALUES ("Assistant", 41000, 4);

INSERT INTO position (title, salary, department_id)
VALUES ("Senior Manager", 65000, 1);

INSERT INTO position (title, salary, department_id)
VALUES ("Office Manager", 57000, 4);

/* Seeds for employee table */

INSERT INTO employee (first_name, last_name, position_id, manager_id)
VALUES ("Diana", "Prince", 3, null);

INSERT INTO employee (first_name, last_name, position_id, manager_id)
VALUES ("Paul", "Atrides", 3, 1);

INSERT INTO employee (first_name, last_name, position_id, manager_id)
VALUES ("Mary", "Crawley", 1, null);

INSERT INTO employee (first_name, last_name, position_id, manager_id)
VALUES ("Tina", "Goldstein", 3, 3);

INSERT INTO employee (first_name, last_name, position_id, manager_id)
VALUES ("Clara", "Oswald", 6, 1);

