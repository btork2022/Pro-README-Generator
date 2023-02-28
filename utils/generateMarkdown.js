// function to generate markdown for README
function renderLicenseBadge(License) {
  if(License !== "None") {
    return `![Github license](https://img.shields.io/badge/license-${License}-gold.svg)`
  }
  return ''
}

const renderLicenseLink = (license) => {
  if(license !== "None") {
    return `\ n* [License](#license)\n`
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

* [Usage] (#usage)

${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
