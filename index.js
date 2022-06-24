// packages needed for this application
const { writeFile, copyfile } = require('./utils/generate-site');
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");

//Array of questions for user input
const questions = [
    {
        type: "list",
        name: "role",
        message: "Please select a role.",
        choices: ["Manager", "Engineer", "Intern"]
    },
    {
        type: "input",
        name: "name",
        message: (role) =>
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
        type: "input",
        name: "id",
        message: (name) =>
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
        type: "input",
        name: "email",
        message: (name) =>
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
        when: (role) => role === "Manager",
        type: "input",
        name: "officeNumber",
        message: (name) =>
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
        when: (role) => role === "Engineer",
        type: "input",
        name: "github",
        message: (name) =>
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
        when: (role) => role === "Intern",
        type: "input",
        name: "school",
        message: (name) =>
            `What is ${name}'s school?`,
        validate: (school) => {
            if (school) {
                return true;
            } else {
                console.log("Please enter their school.");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "again",
        message: "Would you like to add another team member?",
        choices: ["Yes", "No"],
        validate: (again) => {
            if (again == yes) {
                teamArr.push(data);
                console.log(teamArr);
                promptUser();
            } else {
                return false;
            }
        }
    }
];

const promptUser = (questions) => {
    teamArr = []
    return inquirer.prompt(questions).catch((error) => {
        if (error) {
            console.log(err)
        }
    });
};

const writeToFile = data => {
    return new Promise((resolve, reject) => {
        fs.appendFile(`./index.html`, data, err => {
            if (err) {
              reject(err);
              return;
            }
            resolve({
                ok: true,
                message: "Team profile Generated!"
            })
          });
    });   
};

const generatehtml = data => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile generator</title>
    <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <header>
        <h1>My Team</h1>
    </header>
    
    </body>
    </html>
    `
}

promptUser(questions)
.then(res => {
    return generatehtml(res);
})
.then(res => {
    writeToFile(res);
})

