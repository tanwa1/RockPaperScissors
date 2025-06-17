// Rock Beats Scissors: Rock can Break Scissors
// Scissors Beats Paper: Scissors can cut paper.
// Paper beats Rock: Paper can cover rock.
// If both players choose the same hand sign, it's a tie

// Create a Function for the computer choice in Rock Paper Scissors
function getComputerChoice() {
    // Create a variable that stores the string choices for the computer
    let computerChoice = 'Rock Paper Scissors';
    //Use the method of split() to split the word strings in commas
    let wordArray = computerChoice.split(" ");
    //Create a variable that randomly selects the strings based on the split() method
    let choice = Math.floor(Math.random() * wordArray.length)

    let randomChoice = wordArray[choice];
    return randomChoice;
}

// Create a Function for the Human choice in Rock Paper Scissors
function getHumanChoice() {
    let humanChoiceInput = prompt("Input your choice");
    return humanChoiceInput;
}

//Create a Function which takes the input of the human and computer choices
function playRound(humanChoice, computerChoice) {
    let Tie = "Tie".toLowerCase();
    let Human = "Human".toLowerCase();
    let Computer = "Computer".toLowerCase();

    let choice1 = humanChoice.toLowerCase();
    let choice2 = computerChoice.toLowerCase();


    if (choice1 === "rock" && choice2 === "rock") {
        console.log("It's a tie");
        return Tie
    } else if (choice1 === "rock" && choice2 === "scissors") {
        console.log("Rock Beats Scissors: Rock can Break Scissors");
        return Human;
    }
    else if (choice1 === "rock" && choice2 === "paper") {
        console.log("Paper beats Rock: Paper can cover rock.");
        return Computer;
    }
    else if (choice1 === "paper" && choice2 === "rock") {
        console.log("Paper beats Rock: Paper can cover rock.");
        return Human;
    }
    else if (choice1 === "paper" && choice2 === "paper") {
        console.log("It's a tie");
        return Tie;
    }
    else if (choice1 === "paper" && choice2 === "scissors") {
        console.log("Scissors Beats Paper: Scissors can cut paper.");
        return Computer;
    }
    else if (choice1 === "scissors" && choice2 === "rock") {
        console.log("Rock Beats Scissors: Rock can Break Scissors");
        return Computer;

    }
    else if (choice1 === "scissors" && choice2 === "paper") {
        console.log("Scissors Beats Paper: Scissors can cut paper.");
        return Human;

    }
    else if (choice1 === "scissors" && choice2 === "scissors") {
        console.log("It's a tie");
        return Tie;

    }

}
//Create a function playGame() where it calls the human and computer choice and their respective outputs
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    let numberOfRounds = 5;
    let result;
    // It loops the game and calls the playRound() function 5 times
    for (let index = 1; index <= numberOfRounds; index++) {
        result = playRound(getHumanChoice(), getComputerChoice())
        if (result === "Human".toLowerCase()) {
            humanScore += 1;
        } else if (result === "Computer".toLowerCase()) {
            computerScore += 1;
        }
        else {
            humanScore += 1;
            computerScore += 1;
        }

        console.log("Current round: " + index);
        console.log("Score of Human: " + humanScore);
        console.log("Score of Computer: " + computerScore);
    }

    if (humanScore > computerScore) {
        console.log("Human is the Winner!");
    }
    else if (computerScore > humanScore) {
        console.log("Computer is the Winner!");
    }
    else {
        console.log("It's a tie")
    }

}
playGame();