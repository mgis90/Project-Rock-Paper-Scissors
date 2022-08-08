//Function that gets randomly generated computer choice from rock, paper or scissors
function getRandomComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choice;
}

//Function that allows user to select in RPS.
function playerSelection() {
    let playerSelection = prompt("Pick between rock, paper and scissors!");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}
//Function that plays round and returns result based on the outcome
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

//Selecting buttons and adding them to variables
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')


//Adding event listeners to buttons;
rock.addEventListener('click', () => {
    console.log(playRound('rock'));
});
paper.addEventListener('click', () => {
    console.log(playRound('paper'));
});
scissors.addEventListener('click', () => {
    console.log(playRound('scissors'));
});
