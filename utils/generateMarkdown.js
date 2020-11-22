//function to call specific license badges
//is there a way to loop through the choices and call the badges?
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    `;
  } else if (license === "Academic") {
    return `[![Generic badge](https://img.shields.io/badge/<SUBJECT>-<ACADEMIC>-<COLOR>.svg)](https://shields.io/)
    `;
  } else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    `;
  } else if (license === "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
    `;
  } else if (license === "GNUGPLv3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
    `;
  } else if (license === "ISC") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
    `;
  } else if (license === "Open") {
    return `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)
    `;
  }
  return "";
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Application Title: ${data.title}

  ## Application Discription: ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Test](#test)
  * [License](#license)
  * [Questions](#questions)
 
  ## Installation 
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribute}

  ## Test
  ${data.test}

  ## License
  ${renderLicenseBadge(data.license)}
  


  ## Questions
  * Find me on GitHub: (https://github.com/${data.username}/)
  * Email me: ${data.email}
`;
}

console.log("hi", renderLicenseBadge);

module.exports = generateMarkdown;
