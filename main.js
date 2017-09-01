var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');
var inquirer = require('inquirer');

function mainPrompt () {
    inquirer.prompt([
        {
            name: "choice",
            message: "Welcome to Flashcard Generator",
            type: "list",
            choices: ['Generate Cards', 'Display Cards'],
            filter: function (str) {
                return str.toLowerCase();
            }
        }
    ]).then (function (answer) {
    
        if (answer.choice === 'generate cards') {
            generateCards();
        } else {
            console.log(answer.choice);
            displayCards();
        }
    });
}

function generateCards() {
    
    inquirer.prompt([
        {
            name: "type",
            message: "What kind of card do you want to generate?",
            type: "list",
            choices: ["Basic", "Cloze"],
            filter: function (str) {
                return str.toLowerCase();
            }
        }
    ]).then (function (answer) {
        
        if (answer.type === "basic") {
            generateBasic();
        } else {
            generateCloze();
        }
    });
}

function displayCards() {
    inquirer.prompt([
        {
            name: "type",
            message: "Which card do you want to see?",
            type: "list",
            choices: ["Basic", "Cloze"],
            filter: function (str) {
                return str.toLowerCase();
            }
        }
    ]).then (function (answer) {
        if (answer.type === "basic") {
            for(var i=0; i<basicArr.length; i++){
                console.log("\n--------------------------------------------------\n");
                console.log("Front of the Basic Card: " + basicArr[i].front);
                console.log("Back of the Basic Card: " + basicArr[i].back);
                console.log("\n--------------------------------------------------\n");
            }
        } else {
            for(var i=0; i<clozeArr.length; i++){
                console.log("\n--------------------------------------------------\n");
                console.log("Partial: " + clozeArr[i].partial);
                console.log("Full Text: " + clozeArr[i].fullText);
                console.log("\n--------------------------------------------------\n");
            }
        }
    })
}

function generateBasic() {
    inquirer.prompt([
        {
            name: "front",
            message: "Front side of the card (Question)"
        },
        {
            name: "back",
            message: "Back side of the card (Answer)"
        }
    ]).then (function (answer) {

        console.log("Basic Card is generated!");
        var newBasicCard = new BasicCard(answer.front, answer.back);
        console.log(newBasicCard);
        basicArr.push(newBasicCard);

        inquirer.prompt([
            {
                name: "more",
                message: "Do you want more cards?",
                type: "list",
                choices: ["YES!", "NOPE"]
            }
        ]).then (function (answer) {
            if(answer.more === 'YES!') {
                generateBasic();
            } else {
                console.log("Back to Main Page");
                mainPrompt();
            }
        });
    });
}

function generateCloze() {
    inquirer.prompt([
        {
            name: "text",
            message: "Enter Full Text"
        },
        {
            name: "cloze",
            message: "Enter the cloze word you want to delete from text"
        }
    ]).then (function(answer) {
        console.log("Cloze Card is generated!");
        var newClozeCard = new ClozeCard(answer.text, answer.cloze);
        console.log(newClozeCard);
        clozeArr.push(newClozeCard);

        inquirer.prompt([
            {
                name: "more",
                message: "Do you want more cards?",
                type: "list",
                choices: ["YES!", "NOPE"]
            }
        ]).then (function (answer) {
            if(answer.more === 'YES!') {
                generateCloze();
            } else {
                console.log("Back to Main Page");
                mainPrompt();
            }
        });
    })
}

// Global array to hold cards
var basicArr = [];
var clozeArr = [];

// Start from here
mainPrompt();




