const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const dbConfig = {
    host: '127.0.0.1',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

class Database {
    constructor(config) {
        this.connection = mysql.createConnection(config);
    }

    query(sql, params = [], callback) {
        this.connection.query(sql, params, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return callback(err);
            }
            callback(null, result);
        });
    }

    close() {
        this.connection.end();
    }
}

const connection = new Database(dbConfig);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connection.query('SELECT 1', (err) => {
        if (err) {
            console.error('Error connecting to the database:', err);
        } else {
            console.log('Connected to the database');
            console.log(`Employee Manager`);
        }
        startApp();
    });
});

function startApp() {
    const department = new Department(connection);
  const role = new Role(connection);
  const employee = new Employee(connection);

  const actions = {
    'View all departments': () => {
      department.getAllDepartments((err, departments) => {
        if (err) {
          console.error('Error fetching departments:', err);
          return;
        }
        console.table(departments);
        promptAction();
      });
    },
    'View all roles': () => {
      role.getAllRoles((err, roles) => {
        if (err) {
          console.error('Error fetching roles:', err);
          return;
        }
        console.table(roles);
        promptAction();
      });
    },
    'View all employees': () => {
      employee.getAllEmployees((err, employees) => {
        if (err) {
          console.error('Error fetching employees:', err);
          return;
        }
        console.table(employees);
        promptAction();
      });
    },
    'Add a department': () => {
      inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Enter the name of the department:'
        }
      ]).then(answers => {
        department.addDepartment(answers.name, (err) => {
          if (err) {
            console.error('Error adding department:', err);
          } else {
            console.log(`Department "${answers.name}" added successfully.`);
          }
          promptAction();
        });
      });
    },
    'Exit': () => {
        connection.close();
        console.log('Goodbye!');
        process.exit();
      }
    };
    
    function promptAction() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: Object.keys(actions)
            }
        ]).then(answer => {
            const selectedAction = actions[answer.action];
            if (selectedAction) {
                selectedAction();
            }
        });
    }

    promptAction();
}
