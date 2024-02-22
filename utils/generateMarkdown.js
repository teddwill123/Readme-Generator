// function to generate markdown for README
function generateMarkdown(data) {
  const { userName, email, title, description, license, installation, tests, usage, contributing } = data;
  return `# ${title}

  ![GitHub License](http://img.shields.io/badge/License-${license}-blue.svg)

  ## Description

  ${description}

  ## Table Of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)


  ## Installation

  To install necessary dependencies, run the following command:

  \`\`\`bash
  ${installation}
  \`\`\`

  ## Usage

  To use the ${title}, you can download or clone this repository.
  To learn more about the ${title} functionality, review the following.

  ${usage}


  ## License

  This project is licensed under the ${license} license.

  ## Contributing

  ${contributing}

  ## Tests

  To run tests, run the following command:

  \`\`\`bash
  ${tests}
  \`\`\`
  
  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at GitHub [${userName}](https://github.com/${userName}/).
   
`;
}

module.exports = generateMarkdown;
