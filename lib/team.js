// packages needed for this application
const inquirer = require("inquirer");
const Employee = require('./Employee')
const Manager = require("./Manager");
const Intern = require("./Intern")
const Engineer = require("./Engineer")
const { writeFile, copyfile, copyFile } = require('../utils/generate-site');
//Array of questions for user input

class Team {
    constructor() {
        this.employees = [];
        this.questions = [
            {
                type: "list",
                name: "role",
                message: "Please select a role.",
                choices: ["Manager", "Engineer", "Intern", "Exit"]
            },
            {
                when: ({ role }) => role != "Exit",
                type: "input",
                name: "name",
                message: ({role}) =>
                    `What is the ${role}'s name?`,
                validate: (name) => {
                    if (name) {
                        return true;
                    } else {
                        console.log("Please enter a name!");
                        return false;
                    }
                }
            },
            {
                when: ({ role }) => role != "Exit",
                type: "input",
                name: "id",
                message: ({name}) =>
                    `What is ${name}'s id?`,
                validate: (id) => {
                    if(id) {
                        return true;
                    } else {
                        console.log("Please enter their id.");
                        return false;
                    }
                }
            },
            {
                when: ({ role }) => role != "Exit",
                type: "input",
                name: "email",
                message: ({name}) =>
                    `What is ${name}'s email address?`,
                validate: (id) => {
                    if (id) {
                        return true;
                    } else {
                        console.log('Please enter their email address.');
                        return false;
                    }
                }
            },
            {
                when: ({role}) => role === "Manager",
                type: "input",
                name: "officeNumber",
                message: ({name}) =>
                    `What is ${name}'s office number?`,
                validate: (officeNumber) => {
                    if (officeNumber) {
                        return true;
                    } else {
                        console.log("Please enter their office number.");
                        return false;
                    }
                }
            },
            {
                when: ({role}) => role === "Engineer",
                type: "input",
                name: "github",
                message: ({name}) =>
                    `What is ${name}'s github username?`,
                validate: (github) => {
                    if (github) {
                        return true;
                    } else {
                        console.log("Please enter their github username.");
                        return false;
                    }
                }
            },
            {
                when: ({role}) => role === "Intern",
                type: "input",
                name: "school",
                message: ({name}) =>
                    `What is ${name}'s school?`,
                validate: (school) => {
                    if (school) {
                        return true;
                    } else {
                        console.log("Please enter their school.");
                        return false;
                    }
                }
            }
        ];
    }

}
Team.prototype.buildTeam = function() {
    this.newEmployee();
};

Team.prototype.newEmployee = function() {
    inquirer.prompt(this.questions).then((data) => {
        switch (data.role) {
            case "Manager":
                this.employees.push(
                    new Manager(data.name, data.id, data.email, data.officeNumber)
                );
                this.newEmployee();
                break;
            case "Engineer":
                this.employees.push(
                    new Engineer(data.name, data.id, data.email, data.github)
                );
                this.newEmployee()
                break;
            case "Intern":
                this.employees.push(
                    new Intern(data.name, data.id, data.email, data.school)
                );
                this.newEmployee()
                break;
            case "Exit":
                
                generateCardHtml(this.employees)
                console.log("Your team has been generated!")
                break;
        }
    })
}

var generateCardHtml = function(employeeList) {
    var cardlayouts = ""
    for (i =0; i < employeeList.length; i++) {
        employee = employeeList[i]    
        var role = employeeList[i].constructor.name
        switch(role) {
            case "Manager":
                cardlayouts += `
                <div class="col-3 mx-auto my-3">
                <div class="card">
                  <div class="card-body">
                    <div class="profile-top">
                    <h5 class="title">${employee.name}</h5>
                    <h6 class="title mb-4"><i class="bi bi-cup"></i> ${role}</h6>
                    </div>
                    <div class="list-group">
                      <p class="list-group-item">ID: ${employee.id}</p>
                      <p class="list-group-item">e-mail: <a href="mailto:${employee.email}">${employee.email}</a></p>
                      <p class="list-group-item">Office Number: ${employee.officeNumber}</p>
                    </div>
                  </div>
                </div>
              </div>`;
              break;
            case "Engineer":
                cardlayouts += `
                <div class="col-3 mx-auto my-3">
                <div class="card">
                  <div class="card-body">
                    <div class="profile-top">
                    <h5 class="title">${employee.name}</h5>
                    <h6 class="title mb-4"><i class="bi bi-eyeglasses"></i> ${role}</h6>
                    </div>
                    <div class="list-group">
                      <p class="list-group-item">ID: ${employee.id}</p>
                      <p class="list-group-item">e-mail: <a href="mailto:${employee.email}">${employee.email}</a></p>
                      <p class="list-group-item">Github: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></p>
                    </div>
                  </div>
                </div>
              </div>`;
              break;
            case "Intern":
                cardlayouts += `
                <div class="col-3 mx-auto my-3">
                <div class="card">
                  <div class="card-body">
                    <div class="profile-top">
                    <h5 class="title">${employee.name}</h5>
                    <h6 class="title mb-4"><i class="bi bi-mortarboard"></i> ${employee.name}</h6>
                    </div>
                    <div class="list-group">
                      <p class="list-group-item">ID: 4</p>
                      <p class="list-group-item">e-mail: <a href="mailto:${employee.email}">${employee.email}</a></p>
                      <p class="list-group-item">School: ${employee.school}</p>
                    </div>
                  </div>
                </div>
              </div>`;
              break;
        }
    }
    writeFile(generatePagehtml(cardlayouts));
    copyFile();
}

var generatePagehtml = function(cardlayouts) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    </head>
    <body>
    <header>
        <h1>My Team</h1>
    </header>
    <div class="container">
    <div class="row">${cardlayouts}
    </div>
    </div>
    </body>
    </html>`;
}
module.exports = Team;