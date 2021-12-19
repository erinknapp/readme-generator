// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license[0] === 'none'){
    return ``
  }
  if(license[0] === 'MIT License'){
    return `<img src="<https://img.shields.io/badge/License-MIT-blue>">`
  }
  if(license[0] === 'GNU GPLv3'){
    return `<img src="https://img.shields.io/badge/License-GNU%20GPLv3-blue">`
  }
  if(license[0] === 'Apache License'){
    return `<https://img.shields.io/badge/License-Apache-blue>`
  } 
  if(license[0] === 'none'){
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return ``
  }
  if(license[0] === 'none'){
    return ``
  }
  if(license[0] === 'MIT License'){
    return `Mit License: <https://img.shields.io/badge/License-MIT-blue>`
  }
  if(license[0] === "GNU GPLv3"){
    return `GNU GPLv3 License: <https://img.shields.io/badge/License-GNU%20GPLv3-blue>`
  }
  if(license[0] === "Apache License"){
    return `Apache License: <https://img.shields.io/badge/License-Apache-blue>`
  }
  if(license[0] === 'none'){
    return ``
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return ``
  }
  if(license[0] === 'none'){
    return ``
  }
  return `
## License
${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  ${renderLicenseBadge(data[0].license)}

  # ${data[0].projectTitle}

  ## Description

  ${data[0].description}

  ## Table of Contents

  * Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Badges](#badges)
  * [Contributing](#constributing)
  * [Questions](#questions)
  * [Tests](#tests)

  ## Installation

  Run "${data[0].installDependencies}" to install dependencies.

  ## Usage

  ${data[0].projectUse}

  ## Credits

  ${data[0].projectCredits}

  ${renderLicenseSection(data[0].license)}

  ## Badges
  
  ${renderLicenseBadge(data[0].license)}

  ## Questions

  Github Profile: https://github.com/${data[0].github}\n
  If you have any additional questions please send an email to: <${data[0].email}>

  ## Tests

  Run tests using: "${data[0].tests}"  

`;
}

module.exports = generateMarkdown;
