//Function that gets randomly generated computer choice from rock, paper or scissors
function getRandomComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choice;
}

//Function that plays round and returns result based on the outcome
function playRound(playerselect) {
    //Getting computer's choice
    let computerselect = getRandomComputerChoice();

    //
    if (playerselect === "rock") {
        switch (computerselect) {
            case 0:
                return "It's a tie!";
            case 1:
                return "Oh no, you lost!";
            case 2:
                return "Yes, you got him good!";
        }
    } else if (playerselect === "paper") {
        switch(computerselect) {
            case 0:
                return "Yes, you got him good!";
            case 1:
                return "It's a tie!";
            case 2:
                return "Oh no, you lost!";
        }
    } else if (playerselect === "scissors") {
        switch(computerselect) {
            case 0:
                return "Oh no, you lost!";
            case 1:
                return "Yes, you got him good!";
            case 2:
                return "It's a tie!";
        }
    }
};

//Selecting buttons and adding them to variables
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

//Selecting score variables
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore')

//Selecting result field
const result = document.getElementById('result');

//Selecting score field
const score = document.getElementsByClassName('score');

//Adding event listeners to buttons
rock.addEventListener('click', () => {
    result.textContent = playRound('rock');
});
paper.addEventListener('click', () => {
    result.textContent = playRound('paper');
});
scissors.addEventListener('click', () => {
    result.textContent = playRound('scissors');
});

//Game control function

function game() {

    if (playerScore > computerScore) {
        return `You've won with the score of ${playerScore} vs ${computerScore}`;
    } else if (computerScore > playerScore) {
        return `You've lost with the score of ${computerScore} vs ${playerScore}`;
    } else {
        return `It's a ${playerScore}: ${computerScore} draw!`
    }
}
