const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");


// const questions = [

// ];



// function init() {

// }

// init();

    inquirer
    .prompt ({
    message: 'Enter your GitHub username: ',
        name: 'username'
        })

        .then(function({username}) {
        const queryUrl = `https://api.github.com/users/${username}`;
        axios.get(queryUrl).then(function(response) {
            console.log(response)
        });

        })



inquirer
.prompt ([
    {
    type:"input",
    message: "Enter Project Title",
    name: "Poject Title"
    },

    {
    type:"input",
    message: "Enter Description",
    name: "Description"
    },

    {
    type:"list",
    message: "Table of Contents",
    name: "Table of contents",
    choices: [
        "Installation",
        "Usage",
        "Credits",
        "License",
        "Installation",
        "Usage",
        "License",
        "Contributing",
        "Tests",
        "Questions"
    ]
    },

    {
    type: "input",
    message: "Enter Installation Process",
    name: "Installation"
    },

    {
    type: "input",
    message: "Enter the Usage",
    name: "Usage"
    },

    {
    type: "input",
    message: "Enter the License",
    name: "License"
    },

    {
    type: "input",
    message: "Enter in Contributions",
    name: "Contrubuting"
    },

    {
    type: "input",
    message: "Enter Tests",
    name: "Tests"
    },
    
    {
    type: "input",
    message: "Enter Questions",
    name: "Questions"
    }
])
.then(function(data) {

    fs.writeFile("README.md", JSON.stringify(data,null,'\t'), function(err) {

    
        if (err) {
            return console.log(err);
        }
      
        console.log("Success!");
    
    
    
    });
});