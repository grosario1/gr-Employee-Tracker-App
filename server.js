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
    host: 'localhost',
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

