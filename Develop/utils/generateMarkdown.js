// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'none') {
    return ''
  } else {
    return `[![License](https://img.shields.io/badge/License-${license.split(' ').join('%20')}-green)](#license)`
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';
  if (license == 'none') {
    return ''
  } else {
    switch (license) {
      case "GNU AGPLv3":
        link = 'https://choosealicense.com/licenses/agpl-3.0/';
        break;
      case "GNU GPLv3":
        link = 'https://choosealicense.com/licenses/gpl-3.0/';
        break;
      case "GNU LGPLv3":
        link = 'https://choosealicense.com/licenses/lgpl-3.0/';
        break;
      case "Mozilla Public License 2.0":
        link = 'https://choosealicense.com/licenses/mpl-2.0/';
        break;
      case "Apache License 2.0":
        link = 'https://choosealicense.com/licenses/apache-2.0/';
        break;
      case "MIT License":
        link = 'https://choosealicense.com/licenses/mit/';
        break;
      case "Boost Software License 1.0":
        link = 'https://choosealicense.com/licenses/bsl-1.0/';
        break;
      case "The Unlicense":
        link = 'https://choosealicense.com/licenses/unlicense/';
        break;
    }

    return `[${license}](${link})`
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'none') {
    return ''
  } else {
    return `
  <a name='license'></a>
  ## License

  Licensed under the ${renderLicenseLink(license)} license.
    `;
  }
  
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contribute](#contributions)
  4. [Tests](#tests)
  5. [Questions](#questions)

  <a name='installation'></a>
  ## Installation

  ${data.installation}
  <a name='usage'></a>
  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}
  <a name='contributions'></a>
  ## How to Contribute

  ${data.contribution}
  <a name='tests'></a>
  ## Tests

  ${data.tests}
  <a name='questions'></a>
  ## Questions

  For any questions about this project, reach me @ https://github.com/${data.github} || ${data.email}

  `;
}

module.exports = generateMarkdown;
