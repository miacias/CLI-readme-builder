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
  if (licenseQ !== "none (no license)") {
    return `
${licenseQ}

[${renderLicenseBadge(licenseQ)}]${renderLicenseLink(licenseQ, usernameQ, titleQ)}`;
  } else {
    return "none";
  }
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

// gets the usage and usage screenshot separately
function getUsage(usageList) {
  let usageItem = `\n`
  const usageIfo = usageList[0]
  const {usageQ, usageImgQ} = usageIfo
  // pushes each string from the object into usageItem template literal
  usageItem += `${usageQ}\n
${usageImgQ}`
  return usageItem;
}

// uses a template literal to import all variables into a README.md format
function generateMarkdown({ licenseQ, titleQ, descriptionQ, contributionQ, testsQ, usernameQ, emailQ }, installList, usageList) {
  return `# ${titleQ}

## Description

${descriptionQ}


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contribution](#contribution)
- [Tests](#tests)
- [Contact](#contact)
- [License](#license)

## Installation
${getInstallSteps(installList)}


## Usage

${getUsage(usageList)}

## Roadmap

## Contribution

${contributionQ}


## Tests

${testsQ}


## Contact
- creator: [${usernameQ}](https://github.com/${usernameQ})
- email: [${emailQ}](mailto:${emailQ})

## Credits

Documentation referenced:

- Mozilla Developer Network (MDN)
- Stack Overflow Forums
- W3 Schools

Tools used:

- [VS Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/)

U. Penn Bootcamp instructor(s): 

- [Dan Gross](https://github.com/DanielWGross)
- [Andrew Hojnowski](https://github.com/aHojo)
- [C. Ross King](https://github.com/RomeoKilo125/)

Tutor(s): N/A

Artist(s): N/A

## License
${renderLicenseSection(licenseQ, usernameQ, titleQ)}
`
}

// exports the README.md formatted data to index.js
module.exports = generateMarkdown;