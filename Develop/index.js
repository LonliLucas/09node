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
    name: 'Contributors'
},
{
    type: 'input',
    message: 'Give instructions for testing your project:',
    name: 'Tests'
},
{
    type: 'list',
    message: 'Which license would you like to add?',
    name: 'License',
    choices: ['MIT', 'GNU GPLv3', 'No License']
},
{
    type: 'input',
    message: 'What is your Github username?',
    name: 'Github'
},
{
    type: 'input',
    message: 'Add your email address:',
    name: 'Email'
},
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`File ${fileName} has successfully been created!`)
    })
}

function createReadme(answers) {
    return `# ${answers.Title}\n\n` +
    `## Description\n ${answers.Description}\n\n` +
    `## Table of Contents\n\n [Installation](#installation)\n\n [Usage](#usage)\n\n [Credits](#credits)\n\n [Questions](#questions)\n\n` +
    `## Installation\n ${answers.Installation}\n\n` +
    `## Usage\n ${answers.Usage}\n\n` +
    `## Credits\n ${answers.Contributors}\n\n` +
    `## License\n ${answers.License}\n\n` +
    `## Tests\n ${answers.Tests}\n\n` +
    `## Questions\n Github: ${answers.Github}\n https://github.com/${answers.Github}\n\n Email: ${answers.Email}\n`
}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then((answers) => {
        const content = createReadme(answers);
        writeToFile('./output/README.md', content);
    }).catch((error) => {
        console.error('Error occured:', error);
    })
    
}

// Function call to initialize app
init();
