// invoke required npm packages
const inquirer = require("inquirer");
const fs = require("fs");

// import classes from './lib' folder
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// import javascript file for creating HTML
const createHTML = require("./src/createHTML");

var InputArray = [];

// main question to ask the user selecting a role or finish selection
const questionMain = [
    {
        type: 'list',
        name: 'role',
        message: 'Please select a role to add to your project team:',
        choices: ['Software Engineer', 'Intern', 'Finished']
    }
];

// questions when adding the project manager's infomation
const questionManager = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Project Manager's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Project Manager's ID number?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Project Manager's email?",
    },
    {
        type: 'input',
        name: 'office',
        message: "What is the Project Manager's office phone number?"
    }

];

// questions when adding the engineer's infomation
const questionEngineer = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Engineer's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Engineer's ID number?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Engineer's email?",
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the Engineer's Github username?",
    }

];

// questions when adding the intern's infomation
const questionIntern = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Intern's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Intern's ID number?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Intern's email?",
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the Intern's school name?",
    }
];

function initManager() {
    // input project manager information first
    inquirer
        .prompt(questionManager)
        .then(response => {
            const manager = new Manager(response.name, response.id, response.email, response.office);
            InputArray.push(manager);
            init();
        })
};


function init() {
    inquirer
        .prompt(questionMain)
        .then(response => {
            if (response.role === 'Software Engineer') {
                inquirer.prompt(questionEngineer).then(response => {
                    const engineer = new Engineer(response.name, response.id, response.email, response.github);
                    InputArray.push(engineer);
                    init();
                })
            }
            // develop intern information
            if (response.role === 'Intern') {
                inquirer.prompt(questionIntern).then(response => {
                    const intern = new Intern(response.name, response.id, response.email, response.school);
                    InputArray.push(intern);
                    init();
                })
            }
            // finish creating team when selecting 'finished'
            if (response.role === 'Finished') {
                console.log(InputArray);
                createTeam();
                return;
            }
        }
        )
};

// create index.html file with data input
function createTeam() {
    fs.writeFileSync('./dist/index.html', createHTML(InputArray), "utf-8");
    console.log('Your project team has been created successfully!')
};

initManager();








