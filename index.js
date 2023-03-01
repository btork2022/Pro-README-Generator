const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'what is your project-name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project in brief:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select type of license',
        choices: ["MIT", "GPL", "APACHE 2.0", "NONE"]
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run for dependencies installation?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run for test?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does user have to know about the repo usage?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does user have to know about repo contributions?',
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(`Generating README...`);
        writeToFile('README.md', generateMarkdown({...response}))
    })
}

// function call to initialize program
init();
