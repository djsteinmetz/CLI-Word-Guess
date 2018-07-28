const Word = require("./word");
const inquirer = require('inquirer');
let choices = ["node", "react", "constructor", "javascript", "developer"];
let count = 0;
let randomWord = Math.floor(Math.random() * choices.length);
let word = new Word(choices[randomWord]);
console.log(word);
var promptUser = function (count) {
    if (count < 5) {
        inquirer.prompt([
            {
                name: "guess",
                type: "input",
                message: "Guess a letter!"
            }
        ]).then(function (answers) {
            count++
            console.log(count);
            let userGuess = answers.guess;
            promptUser(count);
        });
    };
};
promptUser(0);