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
