//Function that gets randomly generated computer choice from rock, paper or scissors.
function getRandomComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choice;
}

//Function that plays round and returns result based on the outcome.
function playRound(playerselect) {
    let computerselect = getRandomComputerChoice();
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

//Function that tracks score.
function scoreTracker(resultOfRound) {
    if (endgame) {
        return;
    }
    result.textContent = resultOfRound;
    switch(resultOfRound) {
        case "Yes, you got him good!":
            playerScore.textContent++;
            break;
        case "It's a tie!":
            return;
        case "Oh no, you lost!":
            computerScore.textContent++;
            break;
    }


    if (playerScore.textContent === "5") {
        endgame = true;
        return result.textContent = "You've won!";
    } else if (computerScore.textContent === "5") {
        endgame = true;
        return result.textContent = "Computer has won!";
    }
};

//Flag controlling if the endgame has been reached.
let endgame = false;

//Selecting buttons and adding them to variables.
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

//Selecting score variables.
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore')

//Selecting result field.
const result = document.getElementById('result');

//Selecting score field.
const score = document.getElementsByClassName('score');


//Adding event listeners to buttons, and applying scoreTracker function.
rock.addEventListener('click', () => {
    let roundResult = playRound('rock');
    scoreTracker(roundResult);
});
paper.addEventListener('click', () => {
    let roundResult = playRound('paper');
    scoreTracker(roundResult);
});
scissors.addEventListener('click', () => {
    let roundResult = playRound('scissors');
    scoreTracker(roundResult);
});
