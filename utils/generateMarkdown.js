const indexJs = require('./index.js');
const inquirer = require('inquirer');
const fs = require('fs');

module.exports = {indexJs};
module.exports = {inquirer};
module.exports = {fs};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `(https://img.shields.io/badge/license-${license}-blue)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `(https://choosealicense.com/licenses/${license})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    return `Your license is the ${renderLicenseLink(license)} License`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README


function generateMarkdown(answers) {
  return ` # ${answers.title}
  ${renderLicenseBadge(answers.license)}
  ## Description
  
  - ${answers.description}. 
  
  ## Installation
  
  ${answers.installation}
  
  ## Contribution
  
  ${answers.contribution}

  ## Email

  ${answers.email}
  

  ## GitHub

  ${answers.github}
  
  ## Credits
  
  ${answers.contribution}
  
  ## License
  
  
  

  ${renderLicenseSection(answers.license)}

  
  `
}

module.exports = generateMarkdown;
