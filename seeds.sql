/* Seeds for SQL table. We haven't discussed this type of file yet */
USE cms;

/* Seeds for department table */
INSERT INTO department (name)
VALUES ("Human Resources"), ("Sales"), ("Marketing"), ("Admin");

/* Seeds for position table */
INSERT INTO position (title, salary, department_id)
VALUES ("Director", 75000, 1);

INSERT INTO position (title, salary, department_id)
VALUES ("Senior Manager", 70000, 1);

INSERT INTO position (title, salary, department_id)
VALUES ("Manager", 66000, 1);

INSERT INTO position (title, salary, department_id)
VALUES ("Associate", 60000, 1);

INSERT INTO position (title, salary, department_id)
VALUES ("Director", 75000, 2);

INSERT INTO position (title, salary, department_id)
VALUES ("Senior Manager", 70000, 2);

INSERT INTO position (title, salary, department_id)
VALUES ("Manager", 64000, 2);

INSERT INTO position (title, salary, department_id)
VALUES ("Associate", 60000, 2);

INSERT INTO position (title, salary, department_id)
VALUES ("Director", 75000, 3);

INSERT INTO position (title, salary, department_id)
VALUES ("Senior Manager", 70000, 3);

INSERT INTO position (title, salary, department_id)
VALUES ("Manager", 64000, 3);

INSERT INTO position (title, salary, department_id)
VALUES ("Associate", 60000, 3);

INSERT INTO position (title, salary, department_id)
VALUES ("Director", 75000, 4);

INSERT INTO position (title, salary, department_id)
VALUES ("Senior Manager", 70000, 4);

INSERT INTO position (title, salary, department_id)
VALUES ("Manager", 64000, 4);

INSERT INTO position (title, salary, department_id)
VALUES ("Associate", 60000, 4);

/* Seeds for employee table */
INSERT INTO employee (first_name, last_name, manager_id, position_id)
VALUES ("Diana", "Prince", null, 1);

INSERT INTO employee (first_name, last_name, manager_id, position_id)
VALUES ("Mary", "Crawley", null, 1);

INSERT INTO employee (first_name, last_name, manager_id, position_id)
VALUES ("Tina", "Goldstein", 3, 3);

INSERT INTO employee (first_name, last_name, manager_id, position_id)
VALUES ("Clara", "Oswald", 1, 4);

INSERT INTO employee (first_name, last_name, manager_id, position_id)
VALUES ("Amy", "Pond", 3, 3);

INSERT INTO employee (first_name, last_name, manager_id, position_id)
VALUES ("Rose", "Tyler", 4, 4);
