var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "cms"
});

connection.connect(function(err) {
  if (err) throw err;
  startTracker();
});

// starts app 
function startTracker() {
  inquirer.prompt([ {
    type: "list",
    message: "Select task:",
    name: "choice",
    choices: [
      "View all employees.",
      "View all employees by positions.",
      "View all employees by departments.",
      "Update employee.",
      "Add new employee.",
      "Add position.",
      "Add department."
    ]
  }
  // user selection
  ]).then(function(val) {
    switch (val.choice) {
      case "View all employees.":
        viewAllEmployees();
        break;
        case "View all employees by positions.":
        viewAllPositions();
        break;
        case "View all employees by departments.":
        viewAllDepartments();
        break;
        case "Update employee.":
        updateEmployee();
        break;
        case "Add new employee.":
          addNewEmployee();
          break;
        case "Add position.":
        addNewPosition();
        break;
        case "Add department.":
        addNewDepartment();
        break;
    }
  })
}

// function to view all employees
function viewAllEmployees() {
  connection.query("SELECT employee.first_name, employee.last_name, position.title, position.salary, department.name, CONCAT(e.first_name, ' ', e.last_name) AS Manager FROM employee INNER JOIN position on position.id = employee.position_id INNER JOIN department on department.id = position.department_id left join employee e on employee.manager_id = e.id;",
  function(err, res) {
    if (err) throw err
    console.table(res)
    startTracker();
  })
}

// function to view employees by position
function viewAllPositions() {
  connection.query("SELECT employee.first_name, employee.last_name, position.title AS Title FROM employee JOIN position on employee.position_id = position.id;",
  function(err, res) {
    if (err) throw err
    console.table(res)
    startTracker();
  })
}

// function to view employees by department
function viewAllDepartments() {
  connection.query("SELECT employee.first_name, employee.last_name, department.name AS Department FROM employee JOIN position on employee.position_id JOIN department ON position.department_id ORDER BY employee.id;",
  function(err, res) {
    if (err) throw err
    console.table(res)
    startTracker();
  })
}

// allows user to select position title to add employee
let positionArr = [];
function selectPosition() {
  connection.query("SELECT * FROM position", function(err, res) {
    if (err) throw err
    for (let i = 0; i < res.length; i++) {
      positionArr.push(res[i].title);
    }
  })
  return positionArr;
}

// allows user to select manager to add employee
let managersArr = [];
function selectManager() {
  connection.query("SELECT first_name, last_name FROM employee WHERE manager_id IS NULL", function(err, res) {
    if (err) throw err
    for (let i = 0; i < res.length; i++) {
      managersArr.push(res[i].first_name);
    }
  })
  return managersArr;
}

// function to add new employee
function addNewEmployee() {
  inquirer.prompt([
    {
    name: "first_name",
    type: "input",
    message: "Enter employee's first name."
    },
    {
      name: "last_name",
    type: "input",
    message: "Enter employee's last name."
    },
    {
    name: "position",
    type: "input",
    message: "Select employee's position.",
    choices: selectPosition()
    },
    {
      name: "choice",
    type: "rawlist",
    message: "Select employee's manager.",
    choices: selectManager()
    }
  ]).then(function(val) {
      let positionId = selectPosition().indexOf(val.position) + 1
      let managerId = selectManager().indexOf(val.choice) +1
      connection.query("INSERT INTO employee SET ?",
      {
        first_name: val.firstName,
        last_name: val.lastName,
        manager_id: managerId,
        position_id: positionId
      }, 
      function(err) {
        if (err) throw err
        console.table(val)
        startTracker();
      })
    })
}

// function to update existing employee
function updateEmployee() {
  connection.query("SELECT employee.last_name, position.title FROM employee JOIN position ON employee.position_id = position.id;",
  function(err, res) {
    if (err) throw err
    console.log(res)
    inquirer.prompt([
      {
        name: "lastName",
        type: "rawlist",
        choices: function() {
          let lastName = [];
          for (let i =0; i < res.length; i++) {
            lastName.push(res[i].last_name);
          }
          return lastName;
        },
        message: "What is the employee's last name?",
      },
      {
        name: "position",
        type: "rawlist",
        message: "Enter employee's new title.",
        choices: selectPosition()
      },
    ]).then(function(val) {
      let positionId = selectPosition().indexOf(val.position) +1
      connection.query("UPDATE employee SET WHERE ?",
      {
        last_name: val.lastName
      },
      {
        position_id: positionId
      },
      function(err) {
        if (err) throw err
        console.table(val)
        startTracker();
      })
    });
  });
}

// add new position
function addNewPosition() {
  connection.query("SELECT position.title AS Title, position.salary AS Salary FROM position",
  function(err, res) {
    inquirer.prompt([
      {
        name: "Title",
        type: "input",
        message: "Enter new position Title."
      },
      {
        name: "Salary",
        type: "input",
        message: "Enter the salary of the new position."
      }
    ]).then(function(res) {
      connection.query("INSERT INTO position SET ?",
      {
        title: res.Title,
        salary: res.Salary,
      },
      function(err) {
        if (err) throw err
        console.table(res);
        startTracker();
      }
      )
    });
  });
}

// function to add department
function addNewDepartment() {
  inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "Enter name of new department."
    }
  ]).then(function(res) {
    let query = connection.query("INSERT INTO department SET ?",
    {
      name: res.name
    },
    function(err) {
      if (err) throw err
      console.table(res);
      startTracker();
    }
    )
  })
}