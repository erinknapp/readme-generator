// TODO: Include packages needed for this application
const fs = reqiure('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const promptUser = (questions) => {
    if(!questions) {
        questions = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the title of your project? (Required)',
            validate: name => {
                if(name){
                    return true
                } else {
                    console.log('Pleae enter a project title');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a short description of your project. (Required)',
            validate: name => {
                if(name){
                    return true
                } else {
                    console.log('Please give a description');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installDependencies',
            message: 'What is the command to install necessary dependencies for your project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command is needed to run tests?',
        },
        {
            type: 'input',
            name: 'projectUse',
            message: 'Please provide instructions and/or examples of how to use this project',
        },
        {
            type: 'input',
            name: 'projectCredits',
            message: 'List any collaborators with links to their Github profile(s)',
        },
        {
            type: 'checkbox',
            name: 'projectLicense',
            message: 'What kind of license does this project have? (Check only 1 (one))',
            choices: ['MIT License', 'GNU GPLv3','Apache License', 'none']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?',
            validate: github => {
                if(github) {
                    return true 
                } else {
                    console.log('Please enter your Github username');
                    return false;
                } 
            }
         },
         {
             type: 'input',
             name: 'email',
             message: 'What is your email address',
             validate: email => {
                 if(email){
                     return true
                 } else {
                     console.log('Please enter your email address');
                     return false;
                 }
             }
         }
    ]).then(projectData => {
        questions.push(projectData);
        if(projectData.confirmAddProject) {
            return promptUser(readmeData);
        } else {
            return questions;
        }
    });
};


// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}



// TODO: Create a function to initialize app
function init() {}



// Function call to initialize app
init();
