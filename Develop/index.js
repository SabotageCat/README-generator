// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?',
        validate: projectName => {
            if(projectName) {
                return true
            } else {
                console.log('You must enter a project name!');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: "Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide: What was your motivation? Why did you build this project? What problem does it solve? What did you learn?",
        validate: projectDescription => {
            if(projectDescription) {
                return true
            } else {
                console.log('You must enter a project description!');
                return false
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Provide instructions and examples for use.',
        choices: ['none', ''],
        default: 0
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
