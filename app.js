// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamArr = [];

function getManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the team manager's name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is the team manager's employee ID?",
        name: "id"
      },
      {
        type: "input",
        message: "What is the team manager's email address?",
        name: "email"
      },
      {
        type: "input",
        message: "What is the team manager's office number?",
        name: "officeNum"
      },
      {
        type: "list",
        message: "Would you like to add an engineer, an intern, or quit the application?",
        name: "continue",
        choices: [
          { value: "Add engineer" },
          { value: "Add intern" },
          { value: "Quit" }
        ]
      }
    ])
    .then((data) => {
      const manager = new Manager(data.name, data.id, data.email, data.officeNum);
      teamArr.push(manager);
      if(data.continue === "Add engineer") {
        getEngineer();
      } else if (data.continue === "Add intern") {
        getIntern();
      } else {
        generateHTML(render(teamArr));
      }
    });
}

function getEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?"
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's employee ID?"
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?"
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?"
      },
      {
        type: "list",
        message: "Would you like to add an engineer, an intern, or quit the application?",
        name: "continue",
        choices: [
          { value: "Add engineer" },
          { value: "Add intern" },
          { value: "Quit" }
        ]
      }
    ])
    .then(data => {
      const engineer = new Engineer(data.name, data.id, data.email, data.github);
      teamArr.push(engineer);
      if(data.continue === "Add engineer") {
        getEngineer();
      } else if (data.continue === "Add intern") {
        getIntern();
      } else {
        generateHTML(render(teamArr));
      }
    });
}

function getIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?"
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's employee ID?"
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email address?"
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's attended school?"
      },
      {
        type: "list",
        message: "Would you like to add an engineer, an intern, or quit the application?",
        name: "continue",
        choices: [
          { value: "Add engineer" },
          { value: "Add intern" },
          { value: "Quit" }
        ]
      }
    ])
    .then(data => {
      const intern = new Intern(data.name, data.id, data.email, data.school)
      teamArr.push(intern)
      if(data.continue === "Add engineer") {
        getEngineer();
      } else if (data.continue === "Add intern") {
        getIntern();
      } else {
        generateHTML(render(teamArr));
      }
    });
}


const generateHTML = newHTML => {
  if (fs.existsSync(outputPath)) {
    fs.writeFile(outputPath, newHTML, function (err) {
      err ? console.error(err) : console.log("Your new team profile page has been generated!");
    })
  } else {
    fs.mkdirSync(OUTPUT_DIR)
    fs.writeFile(outputPath, newHTML, function (err) {
      err ? console.error(err) : console.log("Your new team profile page has been generated!")
    })
  }
}

getManager();
