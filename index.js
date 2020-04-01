const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const api = require("./utils/api");

const questions = [
  {
    type: "input",
    message: "Enter your GitHub username.",
    name: "username"
  },
  {
    type: "input",
    message: "Enter Repo title.",
    name: "title"
  },
  {
    type: "input",
    message: "Enter Repo description.",
    name: "description"
  },
  {
    type: "input",
    message: "Enter installation instructions.",
    name: "installation"
  },
  {
    type: "input",
    message: "Enter use case for Repo.",
    name: "usage"
  },
  {
    type: "input",
    message: "Enter lisence information.",
    name: "lisence"
  },
  {
    type: "input",
    message: "Enter contributing instructions for other users.",
    name: "contributing"
  },
  {
    type: "input",
    message: "Enter tests and testing instructions if applicable.",
    name: "tests"
  },
];

function appendToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

function init() {
  inquirer
    .prompt(questions)
    .then((inquirerResponses) => {
      console.log("Loading...");
      console.log(inquirerResponses);
      
      api
      .getuser(inquirerResponses.username)
        .then(function ({ data }) {
          appendToFile("readme.md", data);
        })
    });
}

init();
