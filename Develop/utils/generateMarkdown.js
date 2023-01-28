// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//badges here https://shields.io/category/license
function renderLicenseBadge(licenseQ) {
  // const licenseCode = [];
  if (licenseQ !== "none (no license)") {
    return `[!License](https://img.shields.io/badge/license-${licenseQ}-blue)`
  } else {
    return "";
  }
  licenseQ !== "none (no license)" ? licenseCode.push(licenseQ) : "";
  // switch (licenseQ) {
  //   case "Academic Free License v3.0" :
  //     licenseCode.push("");
  //     break;
  //   case "Apache license 2.0":
  //     licenseCode.push("Apache2.0");
  //     break;
  //   case "Artistic license 2.0":
  //     licenseCode.push("");
  //     break;
  //   case "Boost Software License 1.0":
  //     licenseCode.push("");
  //     break;
  //   case "BSD 2-clause \"Simplified\" license":
  //     licenseCode.push("");
  //     break;
  //   case "BSD 3-clause \"New\" or \"Revised\" license":
  //     licenseCode.push("");
  //     break;
  //   case "BSD 3-clause Clear license":
  //     licenseCode.push("");
  //     break;
  // }
  return licenseCode[0];
  // "Creative Commons Zero v1.0 Universal",
  // "Creative Commons Attribution 4.0",
  // "Creative Commons Attribution Share Alike 4.0",
  // "Do What The F*ck You Want To Public License",
  // "Educational Community License v2.0",
  // "Eclipse Public License 1.0",
  // "Eclipse Public License 2.0",
  // "European Union Public License 1.1",
  // "GNU General Public License v2.0",
  // "GNU General Public License v3.0",
  // "GNU Lesser General Public License v2.1",
  // "GNU Lesser General Public License v3.0",
  // "ISC",
  // "LaTeX Project Public License v1.3c",
  // "Microsoft Public License",
  // MIT: "MIT",
  // "Mozilla Public License 2.0",
  // "Open Software License 3.0",
  // "PostgreSQL License",
  // "SIL Open Font License 1.1",
  // "University of Illinois/NCSA Open Source License",
  // "The Unlicense",
  // "zLib License",
  // }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseQ) {
  if (licenseQ !== "none (no license)") {
    return
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseQ) {
  `
${licenseQ}
[!License](https://img.shields.io/badge/license-${renderLicenseBadge(licenseQ)}-blue)()`
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

/*
 make a function that 
*/

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
  ${renderLicenseSection()}
`
}

module.exports = generateMarkdown;
