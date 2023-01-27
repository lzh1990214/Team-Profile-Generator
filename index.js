// import classes from './lib' folder
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// import required npm packages
const inquirer = require("inquirer");
const fs = require("fs");

// import javascript file for creating HTML
const createHTML = require("./src/createHTML");

var userInputArray = [];

// main questions to ask the user selecting a role under the list
const questionMain = [
    {
        type: 'list',
        name: 'role',
        message: 'Please select a role to add for your project team:',
        choices: ['Project Manager', 'Software Engineer', 'Intern', 'finished']
    }
];

// manager questions
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
        message: "What is the Project Manager's office number?"
    }

];

// engineer questions
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

// intern questions
const questionIntern = [
    {
        type: 'input',
        name: 'name',
        message: "What is Intern's first name?",
    },
    {
        type: 'number',
        name: 'id',
        message: 'What is their id number?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school do they attend?'
    }
];



// function to initialize app
function init() {
    // prompt questions
    inquirer.prompt(questions).then(answers => {
        // if done adding employees generate team
        if (answers.role === 'Im all done!') {
            console.log(answersArr);
            generateTeam();
            return;
        }
        // create manager info
        if (answers.role === 'Manager') {
            inquirer.prompt(manager).then(answers => {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
                answersArr.push(manager);
                init();
            })
        }
        // create engineer info
        if (answers.role === 'Engineer') {
            inquirer.prompt(engineer).then(answers => {
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                answersArr.push(engineer);
                init();
            })
        }
        // create intern info
        if (answers.role === 'Intern') {
            inquirer.prompt(intern).then(answers => {
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                answersArr.push(intern);
                init();
            })
        }
    })
};

// Function call to initialize app
init();


// to write the file of the new team members
function generateTeam() {
    fs.writeFileSync('./dist/generatedTeam.html', generateHTML(answersArr), "utf-8");
    console.log('Dream Team created!')
};




