const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const api = require("./utils/api.js");
const questions = require("./utils/Question.js");
const syntax = require("./utils/generateMarkdown.js")



// const questions = [

// ];



// function init() {

// }

// init();





inquirer.prompt(questions, api).then(function({username,License,Usage,Installation,Tests,Questions,Description,ProjectTitle,Contributions}) {
    const queryUrl = `https://api.github.com/users/${username}`;
        axios.get(queryUrl).then(function({data}) {
            
            console.log(data)
            const profilepic = data.avatar_url;
            const email = data.email;
            let yes = `
# README GENERATOR

![Profile-Picture](${profilepic})
-------------------------
## Project Title

* ${ProjectTitle} 
-------------------------
## Description

* ${Description} 
------------------------- 
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
---------------------------
## Installation

#### ${Installation} 
---------------------------
## Usage

#### ${Usage}
---------------------------
## License

#### ${License} 
---------------------------
## Contributing

#### ${Contributions} 
---------------------------
## Tests

#### ${Tests} 
---------------------------
## Questions

#### ${Questions}
            `;

            fs.writeFile("README.md", yes, function(err) {

                if (err) {
                    return console.log(err);
                }
              
                console.log("Success!");
        
            });
        });

    
    
});