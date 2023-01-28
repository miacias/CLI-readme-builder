// returns a license badge or an empty string
function renderLicenseBadge(licenseQ) {
  if (licenseQ !== "none (no license)") {
    let licenseBadge = licenseQ.split(" ").join("_");
    //badges here https://shields.io/category/license
    return `![License](https://img.shields.io/badge/license-${licenseBadge}-blue?logo=github)`
  } else {
    return "";
  }
}

// returns a license link or an empty string
function renderLicenseLink(licenseQ, usernameQ, titleQ) {
  if (licenseQ !== "none (no license)") {
    let titleHyphens = titleQ.split(" ").join("-");
    return `(https://github.com/${usernameQ}/${titleHyphens}/blob/main/LICENSE)`
  } else {
    return "";
  }
}

// returns the license section of README or an empty string
function renderLicenseSection(licenseQ, usernameQ, titleQ) {
return `
${licenseQ}
[${renderLicenseBadge(licenseQ)}]${renderLicenseLink(licenseQ, usernameQ, titleQ)}`
}

// gets each step separately
function getInstallSteps(installList) {
  let listItem = `\n`
  // opens the array of list items and exposes the objects within
  for (const object in installList) {
    const stepObject = installList[object]
    // opens the object and extracts the string value within
    for (const step in stepObject) {
      const stepValue = stepObject[step]
      listItem += `${stepValue}\n`
    }
  }
  return listItem;
}

function generateMarkdown({ licenseQ, titleQ, descriptionQ, usageQ, contributionQ, testsQ, usernameQ, emailQ }, installList) {
  return `# ${titleQ}

## Description

  ${descriptionQ}


## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Contact](#contact)
  - [License](#license)

## Installation
  ${getInstallSteps(installList)}


## Usage

  ${usageQ}


## Contribution

  ${contributionQ}


## Tests

  ${testsQ}


## Contact
  - creator's GitHub: [${usernameQ}](https://github.com/${usernameQ})
  - email: [${emailQ}](mailto:${emailQ})


## License
  ${renderLicenseSection(licenseQ, usernameQ, titleQ)}
`
}

module.exports = generateMarkdown;
