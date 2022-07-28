function getRandomComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "Rock";
    } else if (computerChoice === 1) {
        return "Paper";
    } else if (computerChoice === 2) {
        return "Scissors";
    }
}

console.log(getRandomComputerChoice());

function playerSelection() {
    let playerSelection = prompt("Pick between rock, paper and scissors!");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

let test = playerSelection();
console.log(test);

//function playGame(playerSelection, getRandomComputerChoice);