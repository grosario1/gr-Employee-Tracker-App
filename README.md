# gr-Employee-Tracker-App
## Description

This is a content management system/application designed to keep track of a company's departments, employees, employee roles, salary and reporting manager. The application allows for management of employee information. For instance view all departments, view current roles, add departments, add roles, add new employees and update employees roles. It is a command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL.

## Table of Contents
- [gr-Employee-Tracker-App](#gr-employee-tracker-app)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Contact Info](#contact-info)

## Installation 

First you should clone this repo (https://github.com/grosario1/gr-Employee-Tracker-App.git). You will need to ensure you install the npm utility and express.js framework in order for you run the app. You can follow the instructions to install the utility from here: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm. Once, it is install, use the cmd to navigate to the repo you just cloned and run.... `node init -y` to initized the node js project, then install the express js package by running `npm install --save express`. You will also need to install the mysql2 framework in order to allow to code to connect to your mysql instance and database. Since you will need to connect to the database using a user name and password, it is recommended to store your credentials into a different file and call them from your code using variables. With this being said, in addtion to installing the other npm frameworks & modules, you should install `dotenv` which is a zero-dependency module that loads environment variables from a .env file into process.env. Install this module by running `npm install --save dotenv`.
## Usage

- **Step #1:** Install MySQL into your local environment. You can follow the installation guide here: https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/

- **Step #2:** Ensure you start the mysql server in your local environment: see guides (https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)

- **Step #3:** From directory where you cloned the repo, log into the mysql database, `mysql -uroot -p`

- **Step #4:** Ensure you source the database schema and seeds files.

e.g.

```
mysql> source db/schema.sql
Query OK, 3 rows affected (0.02 sec)

Query OK, 1 row affected (0.00 sec)

Database changed
```

```
mysql> source db/seeds.sql
Query OK, 4 rows affected (0.01 sec)
Records: 4  Duplicates: 0  Warnings: 0

Query OK, 5 rows affected (0.00 sec)
Records: 5  Duplicates: 0  Warnings: 0

Query OK, 6 rows affected (0.00 sec)
Records: 6  Duplicates: 0  Warnings: 0
```

Then type exit to exit the mysql instance.

```
mysql> exit
Bye
```

- **Step #5:** From directory where you cloned the repo, run `node server.js` from the command line and then the app will start listening in your localhost on port 3001 and now the Employee Manager App should load with prompts.

- Example of deployed Employee Tracker App (see demo video):

![get-started]("./../public/assets/get-started-page.jpg)



You can find code repo [here.](https://github.com/grosario1/gr-Employee-Tracker-App) 

## Contributing
The project is open for contributions. If you would like to contribute, create a new branch from the main and add any updates as deemed necessary. If you should find any issues with the code, please open a 'New Issue' from https://github.com/grosario1/gr-Employee-Tracker-App/issues and these request can be review and updated accordingly.
## Contact Info
For more questions, feel free to contact me:

- GitHub: https://github.com/grosario1
- Email: grosario@alum.quinnipiac.edu
