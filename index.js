//variable declaration
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

//creating variable for write file module in fs
// const writeFileAsync = util.promisify(fs.writeFile);

//internal modules
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user for Readme
const userQ = [
    {
      type: "input",
      message: "What is the name of your GitHub repository?",
      name: "repo",
    },
    {
      type: "input",
      message: "What is the title of your application?",
      name: "title",
    },
    {
      type: "input",
      message: "Write a description of your application.",
      name: "description",
    },
    {
      type: "input",
      message:
        "If applicable, provide the steps required to install your application.",
      name: "install",
    },
    {
      type: "input",
      message: "Provide the usage of your application for a user.",
      name: "usage",
    },
    {
      type: "input",
      message:
        "If applicable, provide any guidelines to how other developers can contribute to your application.",
      name: "contribute",
    },
    {
      type: "input",
      message:
        "What may the user need to know about contributing to the application?",
      name: "contribute",
    },
    {
      type: "input",
      message: "If applicable, what tests are included?",
      name: "test",
    },
    {
      type: "list",
      message: "Choose a license for your application.",
      name: "license",
      choices: ["Academic", "MIT", "Mozilla", "GNU", "Apache", "ISC", "Open"],
    },
    {
      input: "input",
      message: "What is your GitHub username?",
      name: "username",
    },
    {
      input: "input",
      message: "What is your email?",
      name: "email",
    },
  ]

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log(err);
    } else {
      console.log("Success!");
    }
  });
}

// function to initialize program
function init() {
  inquirer.prompt(userQ).then(function (answer) {
    console.log(answer);
    writeToFile("README.md", generateMarkdown(data));
  });
}

// function call to initialize program
init();
