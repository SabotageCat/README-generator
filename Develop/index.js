// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const writeFile = require('./utils/writeFile.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
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
        message: 'Please choose a license for your project',
        choices: ['none', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
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
    {
        type: 'input',
        name: 'github',
        message: "Enter your Github username so people know it's yours!",
        validate: gitHub => {
            if (gitHub) {
                return true
            } else {
                console.log('You must enter your Github!');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email so people can contact you!',
        validate: userEmail => {
            if (userEmail) {
                return true
            } else {
                console.log('You must enter your email!');
                return false
            }
        }
    }
];

// const mockData = {
//     title: 'RunBuddy',
//     description: 'A Website for Runners',
//     license: 'Boost Software License 1.0',
//     installation: 'none',
//     usage: 'Use within a web browser to sign up for a Run Buddy!',
//     contribution: 'none',
//     tests: 'none',
//     github: 'Lernatino',
//     email: 'lernatino@gmail.com'
// };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
  .then(readMeData => {
      console.log(readMeData);
      return generateMarkdown(readMeData);
  })
  .then(markdown => {
      console.log(markdown);
      return writeFile(markdown)
  })
  .catch(err => {
      console.log(err);
  });