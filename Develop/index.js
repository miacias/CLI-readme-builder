// imports packages and functions needed
const inquirer = require("inquirer");
const fs = require("fs/promises");
const generateMarkdown = require("./utils/generateMarkdown.js");

// global variables not held locally due to using recursion instead of a loop in function writeInstall()
const installList = [];
let index = 0;

// starting message
console.log('Hi, welcome to your CLI README Builder via Node.js!');

// confirms if user wants to begin (prevents overwriting previous work, if any)
function askReady() {
    inquirer
        .prompt([
            {
                type: "confirm",
                name: "getStartedQ",
                message: "Ready to begin building your README?",
                default: false
            }
        ])
        .then((answer) => {
            answer.getStartedQ ? askInstall() : console.log("Prompt exited successfully.")
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Prompt couldn't be rendered in the current environment");
            } else {
                console.log("Something went wrong");
            }
        });
}

// user writes installation steps one by one in list form
function writeInstall() {
    index++
    inquirer
        .prompt([
            {
                type: "input",
                name: `step${index}`,
                message: `Please define Step ${index}.`,
            }
        ])
        .then(indexStep =>
            installList.push(indexStep))
        .then(() => {
            console.log(installList)
            inquirer
                .prompt([
                    {
                        type: "confirm",
                        name: "continue",
                        message: "Do you want to add another step?",
                        default: false
                    }
                ])
                .then(installAddStep => {
                    // uses recursion to add a step and increment index OR moves forward to new prompts
                    installAddStep.continue ? writeInstall() : writeUsage()
                })
        });
}

// user is provided option to write installation in paragraph or list form
function askInstall() {
    inquirer
        .prompt([
            {
                type: "confirm",
                name: "confirmInstall",
                message: "Would you like to write multiple installation steps?",
                default: false
            }
        ])
        .then(answer => {
            answer.confirmInstall ? writeInstall() : inquirer
                .prompt([
                    {
                        type: "input",
                        name: "singleInstall",
                        message: `In one block of text, what are the steps required to install your project? 
(Hint: step-by-step instructions of how to get the development environment running)`
                    }
                ])
                .then(installBlock => {
                    // pushes answers into a globally-scoped array for later use
                    installList.push(installBlock)
                    writeUsage()
                })
        });
}

// user writes instructions for use and provides screenshots
function writeUsage() {
    const usageList = [];
    inquirer
        .prompt([
            {
                type: "input",
                name: "usageQ",
                message: `Provide instructions for use.`
            },
            {
                type: "input",
                name: "usageImgQ",
                message: `Include screenshots as needed.
(Hint 1: Use this syntax \"![alt text](assets/images/screenshot.png)\" to add an image.)
(Hint 2: No screenshots? Write an empty string like this: \"\")`
            }
        ])
        .then(usageBlock => {
            // pushes answers into an array to be threaded into the next function for later use
            usageList.push(usageBlock);
            collectResponses(usageList);
        })
}

// user completes the rest of the prompt questions
function collectResponses(usageList) {
    inquirer
        .prompt([
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
                    "Creative Commons Zero v1.0 Universal",
                    "Creative Commons Attribution 4.0",
                    "Creative Commons Attribution Share Alike 4.0",
                    "Do What The F*ck You Want To Public License",
                    "Educational Community License v2.0",
                    "Eclipse Public License 1.0",
                    "Eclipse Public License 2.0",
                    "European Union Public License 1.1",
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
                    "zLib License",
                    "none (no license)"],
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
                message: "What would you like to name this repository?"
            },
            {
                type: "input",
                name: "descriptionQ",
                message: `How would you describe this project?
(Hint: your motivation, why create this, solving which problem(s), things learned)`
            },
            {
                type: "input",
                name: "contributionQ",
                message: `How would you like to ask other developers to contribute?
(Hint: Use this syntax \" [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)\" to add reference to Contributor Covenant.)`
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
        ])
        .then((answers) => {
            const newReadme = generateMarkdown(answers, installList, usageList);
            writeToFile(newReadme)
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Prompt couldn't be rendered in the current environment");
            } else {
                console.log("Something went wrong");
            }
        });
}

// saves completed README file to root directory
function writeToFile(newReadme) {
    fs.writeFile("../new-README.md", newReadme)
        .then(() => console.log("README saved!"))
        .catch(error => `An error occurred: ${error}`);
}

// initializes CLI README builder app
askReady();