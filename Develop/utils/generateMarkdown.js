// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//badges here https://shields.io/category/license
function renderLicenseBadge(licenseQ) {
  const licenseCode = [];
  switch(licenseQ) {
    case "Apache license 2.0":
      licenseCode.push("Apache2.0");
      break;
    case "BSD 3-clause \"New\" or \"Revised\" license" :
      licenseCode.push("BSD3");
      break;
  }
  return licenseCode[0];
  // const badge = {
  //   apache: "Apache2.0",
  //   bsd3: "BSD3",
  //   mit: "MIT"
  // }
    // {
      // "Academic Free License v3.0",
      // "Apache2.0": "Apache license 2.0",
      // "Artistic license 2.0",
      // "Boost Software License 1.0",
      // "BSD 2-clause \"Simplified\" license",
      // BSD3: "BSD 3-clause \"New\" or \"Revised\" license",
      // "BSD 3-clause Clear license",
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
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function parse(installList) {
  for (const object in installList) {
    const stepObject = installList[object]
    for (const step in stepObject) {
      const stepValue = stepObject[step]
      console.log(stepValue)
      console.log(JSON.stringify(stepValue))
    }
    // if(installList.hasOwnProperty(listName)) {
    //   let listValue = installList[listName];
    //   console.log(JSON.stringify(listValue))
    // }
  }
  // installList.forEach(element => {
  //   JSON.stringify(element)
  //   console.log(JSON.stringify(element))
  // });
  // let index = 0;
  installArr = [];
  // for (let i = 0; i < installList.length; i++) {
    
  //   index++
    // console.log(index)
    // console.log(i)
    // console.log(typeof (installList[i].step-[index]))
    // console.log(JSON.stringify(installList[i].step-[index]))
    // console.log(JSON.stringify(installList[i]))

    // installArr.push(JSON.stringify(installList[i].step-[index]))

  // }
  return installArr;
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

  ${installList}
  ${parse(installList)}


## Usage

  ${usageQ}


## Contribution

  ${contributionQ}


## Tests

  ${testsQ}


## Contact
  - creator: [${usernameQ}](https://github.com/${usernameQ})
  - email: [${emailQ}](mailto:${emailQ})


## License

  ${licenseQ}
  ${renderLicenseBadge(licenseQ)}
`
}

module.exports = generateMarkdown;
