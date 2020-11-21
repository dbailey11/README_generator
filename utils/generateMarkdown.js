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
  ${data.license}

  ## Questions
  * Find me on GitHub: ${data.username}
  * Email me: ${data.email}
`;
}

module.exports = generateMarkdown;
