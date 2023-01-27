// includes packages needed - https://www.npmjs.com/package/inquirer/v/8.2.4
const inquirer = require("inquirer");
const fs = require("fs/promises");

/* the unnamed object is the same as object destructuring "const { variableNames } = objectName" 
because generateReadme() is being called with answers passed into it*/
function generateReadme({getStartedQ, licenseQ, titleQ, descriptionQ, installQ, usageQ, contributionQ, testsQ, usernameQ, emailQ}) {
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

    ${installQ}
    
    
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
    `
}

console.log('Hi, welcome to your Node README Builder!');

// an array of questions for user input
const questions = [
    {
        type: "confirm",
        name: "getStartedQ",
        message: "Ready to begin building your README?",
        default: false
    },
    {
        type: "list",
        name: "licenseQ",
        message: "What license is protecting this repository?",
        choices: [
            "Academic Free License v3.0", 
            "Apache license 2.0", 
            "Artistic license 2.0", 
            "Boost Software License 1.0", 
            "BSD 2-clause \"Simplified\" license", 
            "BSD 3-clause \"New\" or \"Revised\" license", 
            "BSD 3-clause Clear license", 
            "Creative Commons license family", 
            "Creative Commons Zero v1.0 Universal", 
            "Creative Commons Attribution 4.0", 
            "Creative Commons Attribution Share Alike 4.0", 
            "Do What The F*ck You Want To Public License", 
            "Educational Community License v2.0", 
            "Eclipse Public License 1.0", 
            "Eclipse Public License 2.0", 
            "European Union Public License 1.1", 
            "GNU General Public License family", 
            "GNU General Public License v2.0", 
            "GNU General Public License v3.0", 
            "GNU Lesser General Public License v2.1", 
            "GNU Lesser General Public License v3.0", 
            "ISC", 
            "LaTeX Project Public License v1.3c", 
            "Microsoft Public License", 
            "MIT", 
            "Mozilla Public License 2.0", 
            "Open Software License 3.0", 
            "PostgreSQL License", 
            "SIL Open Font License 1.1", 
            "University of Illinois/NCSA Open Source License", 
            "The Unlicense", 
            "zLib License"],
        validate(answer) {
            if (answer.length < 1) {
                return "You must choose at least one license.";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "titleQ",
        message: "What would you like to name this project?"
    },
    {
        type: "input",
        name: "descriptionQ",
        message: `How would you describe this project?
        (Hint: your motivation, why create this, solving which problem(s), things learned)`
    },
    {
        type: "input",
        name: "installQ",
        message: `What are the steps required to install your project?
        Provide step-by-step instructions of how to get the development environment running.`
    },
    {
        type: "input",
        name: "usageQ",
        message: `Provide instructions and examples for use. Include screenshots as needed.
        (Hint: Use this syntax \"![alt text](assets/images/screenshot.png)\" to add an image.)`
    },
    {
        type: "input",
        name: "contributionQ",
        message: `How would you like to ask other developers to contribute?
        (Hint: Use this syntax \" [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)\"
         to add reference to Contributor Covenant.)`
    },
    {
        type: "input",
        name: "testsQ",
        message: `Go the extra mile and write tests for your application, and provide examples on how to run them.`
    },
    {
        type: "input",
        name: "usernameQ",
        message: `What is your GitHub username?`
    },
    {
        type: "input",
        name: "emailQ",
        message: `What is your contact email address?`
    }
];

inquirer
  .prompt([
    questions
  ])
  .then((answers) => {
    const newReadme = generateReadme(answers);
    fs.writeFile("README.md", newReadme)
        .then(() => console.log("README saved!"))
        .catch(error => `An error occurred: ${error}`);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
});

// const getStartedQ = "Ready to begin building your README?";
// const optContributionQ = `Optional: Do you want to include open source contributions code of conduct?`;
// const optEmailQ = `Optional: Do you want to include your contact email address?`;
// const optTestsQ = `Optional: Do you want to include how to test your code?`;


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

/*
User Story

AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

Acceptance Criteria

GIVEN a command-line application that accepts user input

WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

WHEN I enter my project title
THEN this is displayed as the title of the README

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/