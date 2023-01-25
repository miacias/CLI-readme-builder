// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [getStartedQ, titleQ, descriptionQ, installQ, usageQ, licenseQ, usernameQ];
const getStartedQ = "Ready to begin building your README?";
// optional sections: contribution, email, tests
const optContributionQ = "Optional: Do you want to include open source contributions code of conduct?";
const contributionQ = "How would you like to ask other developers to contribute? (Hint: Use this syntax \" [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)\" to add reference to Contributor Covenant.)";
const optEmailQ = "Optional: Do you want to include your contact email address?";
const emailQ = "What is your contact email address?";
const optTestsQ = "Optional: Do you want to include how to test your code?";
const testsQ = "Go the extra mile and write tests for your application, and provide examples on how to run them.";

// required info
const titleQ = "What would you like to name this project?";
const descriptionQ = "How would you describe this project? (Hint: motivation, why, solving which problem(s), things learned)";
const installQ = "What are the steps required to install your project? Provide step-by-step instructions of how to get the development environment running.";
const usageQ = "Provide instructions and examples for use. Include screenshots as needed. (Hint: Use this syntax \"![alt text](assets/images/screenshot.png)\" to add an image.)";
const licenseQ = "What license is protecting this repository?";
const usernameQ = "What is your GitHub username?";

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