# Employee-Tracker

## Application

This is a CLI app using node and MySQL to generate employee data for different departments. The app displays the employee's first name, last name, position in the company, and their manager. The app also allows a user to update current employees, add a new employee, add a new position, and add a new department.

## Installation

User will need to install the following to use the application:

- `npm init -y` for package.json creation
- `npm install inquirer` for inquirer dependency
- `npm install mysql` for MySQL dependency

## Using the Application

In the command line, user will run `node server.js` to start the application.
The user will then use the up and down arrow keys to select their option.

![App](assets/screen-shots/1-App-Commands.png?raw=true)

User will then follow the prompts for their selection and the information will be added to the database.
Once the user is done, they will need to run the `Ctrl+C` command to turn off their server.

## Technologies Used

Node, MySQL, and JavaScript

## License

ISC
