const { prompt } = require('inquirer');
const { questions, genMd } = require('./utils');

prompt(questions).then(genMd);

