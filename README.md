# CLI-readme-builder
This back-end app helps the user build a README with command line prompts and a template.


## Description

The motivation behind building this project was simple: alongside every repository and coding project is its README.md file. The end goal of the CLI-readme-builder is to make this process simpler and less tedious. In making this project, I learned the value of using JavaScript Promises as well as their setbacks. Initially, the Inquirer package was used in a single function to collect all information, however as the app grew to be more complex, using promises became combersome since they are asynchronous yet used synchronously in this project. Despite the learning curve of using a new technology, the app is fully functional and can help developers at any level get started on building an effective README.


## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Contact](#contact)
  - [License](#license)

## Installation
  
To run this interface on your machine, please clone this repository locally to your machine. Be sure to install Node.js version 16 and run ```npm init -y```. Next, install the Inquirer package with ```npm install inquirer 8.2.4``` to receive the correct version. Lastly, initialize the app in your terminal's Develop folder with ```node index.js```. Follow the prompts to create your README!


## Usage
  
After initializing with ```node index.js```, a series of prompts will guide you through. Be sure to respond to each prompt until you receive the notification that your README has been saved!

[See a demonstration of how it works here!](https://youtu.be/2oPjRl2Vbq4)


## Contribution

No contributions at this time, thank you for your interest.


## Tests

No testing provided at this time.


## Contact

- creator: [miacias](https://github.com/miacias)
- email: [miaciasullo@gmail.com](mailto:miaciasullo@gmail.com)


## Credits

Documentation referenced:

- Mozilla Development Network
- Stack Overflow forums
- [Inquirer Node package, version 8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4)

Tutorials referenced:

- TroubleChute on [YouTube](https://www.youtube.com/watch?v=Dl-ekLb4quE&t=4s) - Shields.io usage
- Lindsay Chapin on [YouTube](https://www.youtube.com/watch?v=PGAGcePjbPA&t=2s) - Inquirer npm usage

Tutor(s): Trinh Nguyen

U. Penn Bootcamp study groups:

- [Fredrick Chang](https://github.com/LearnedDr)
- [Josh Eflin](https://github.com/JoshEflin)

U. Penn Bootcamp instructor(s): [Dan Gross](https://github.com/DanielWGross)


## License
  
MIT

[![License](https://img.shields.io/badge/license-MIT-blue?logo=github)](https://github.com/miacias/CLI-readme-builder/blob/main/LICENSE)
