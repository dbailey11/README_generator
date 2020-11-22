//function to call specific license badges
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) License Documentation:(https://www.apache.org/licenses/LICENSE-2.0.txt)
    `;
  } else if (license === "Academic") {
    return `[![Generic badge](https://img.shields.io/badge/<SUBJECT>-<ACADEMIC>-<COLOR>.svg)](https://shields.io/)License Documentation: (https://opensource.org/licenses/AFL-3.0)
    `;
  } else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)License Documentation: (https://opensource.org/licenses/MIT)
    `;
  } else if (license === "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0) License Documentation:(https://www.mozilla.org/en-US/MPL/2.0/)
    `;
  } else if (license === "GNUGPLv3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)License Documentation: (https://www.gnu.org/licenses/gpl-3.0.en.html)
    `;
  } else if (license === "ISC") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC) License Documentation: (https://opensource.org/licenses/ISC)
    `;
  } else if (license === "Open") {
    return `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)License Documentation: (https://opensource.org/licenses/OSL-3.0) 
    `;
  }
  return "";
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Application Title: ${data.title}
  ${renderLicenseBadge(data.license)}

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
  * If you have any questions please feel free to email me or stop by on my GitHub! 
  * Find me on GitHub: (https://github.com/${data.username}/)
  * Email me: ${data.email}
`;
}

module.exports = generateMarkdown;
