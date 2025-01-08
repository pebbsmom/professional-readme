// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js";


inquirer.prompt (
   [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Please provide a description of your project."
    },
    {
        type: 'input',
        name: 'installation',
        message: "Please provide installation instructions for your project."
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please provide usage information for your project."
    },
    {
        type: 'list',
        name: 'license',
        message: "Please choose a license for your project.",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Please provide contribution guidelines for your project."
    },
    {
        type: 'input',
        name: 'tests',
        message: "Please provide test instructions for your project."
    },
      
    {
        type: 'input',
        name: 'github',
        message: "What is your GitHub username?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?"
    }
]
).then(answers => {
    const {title, description, installation, usage, license, contributing, tests,github, email} = answers;
    const data = {title, description,installation, usage,license, contributing, tests,github, email};
    fs.writeFile("README.md", generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log("Success!")
    );
});




