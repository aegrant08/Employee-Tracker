/* Schema for SQL database/table. We haven't discussed this type of file yet */
DROP DATABASE IF EXISTS cms;

/* Create database */
CREATE DATABASE cms;
USE cms;

/* Create department table that auto increments  */
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30),
  PRIMARY KEY (id)
);

/* Create role table that auto increments and pulls data from department table using foreign key */
CREATE TABLE position (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id int,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES department(id)
);


/* Create employee table that auto increments and pulls data from role table using foreign key */
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  position_id int,
  manager_id int,
  PRIMARY KEY (id),
  FOREIGN KEY (position_id) REFERENCES position(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);