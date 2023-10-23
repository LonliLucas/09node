// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'Title',
},
{
    type: 'input',
    message: 'Give a description of your project:',
    name: 'Description'
},
{
    type: 'input',
    message: 'Enter installation instructions:',
    name: 'Installation'
},
{
    type: 'input',
    message: 'Describe the usage information:',
    name: 'Usage'
},
{
    type: 'input',
    message: 'Who else contributed to the project?',
    name: 'Contributing'
},
{
    type: 'input',
    message: 'Give instructions for testing your project:',
    name: 'Tests'
},
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
}

// Function call to initialize app
init();
