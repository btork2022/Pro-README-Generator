// function to generate markdown for README
const renderLicenseBadge = (License) => {
  if(License !== "None") {
    return `![Github license](https://img.shields.io/badge/license-${License}-gold.svg)`
  }
  return ''
}

const renderLicenseLink = (license) => {
  if(license !== "None") {
    return `* [License](#license)\n`
  }
  return '';
}

function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

### Description


${data.description}

### Table of Contents

* [Installation](#installation)

* [Usage](#usage)

${renderLicenseLink(data.license)}

* [Contributing](#contribution)

* [Test](#tests)

* [Questions](#questions)


## Installation

The dependencies required for running installation are supported by these commands:

\`\`\`
${data.installation}
\`\`\`


## Usage

${data.usage}


## License

This project is under the ${data.license} license.

## Contributing

${data.contribution}

## Tests

Run the following command for tests:

\`\`\`
${data.test}
\`\`\`

### Questions

For further inquiries contact me at ${data.email}.
Find my past and current works here at [${data.github}](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
