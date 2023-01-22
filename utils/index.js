const genMd = require('./generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

module.exports = {genMd };




inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installations required for the project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'how would the project be used?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What are the license of the project',
        choices:['Apache 2.0', 'MIT', 'Boost Software', 'N/A']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed to this project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What test are required for this project?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github?'
    } 
])
  .then((data) => {
   

    fs.writeFile('README.md', JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
