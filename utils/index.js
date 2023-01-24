const genMd = require('./generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');


module.exports = {genMd};




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
      type: 'list',
      name: 'license',
      message: 'what license will you pick?',
      choices: ['mit', 'apache', 'isc']
  },
    {
        type: 'input',
        name: 'installation',  
        message: 'any installations?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who worked on this?'
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
  .then((answers) => {
   
    const results = genMd(answers)
    
    fs.writeFile('README.md',results, (err) =>
      err ? console.log(err) : console.log('made the file!')
    );
  });
