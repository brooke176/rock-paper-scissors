function getComputerChoice() {
    const gameChoices = ['rock', 'paper', 'scissors']
    var computerChoice = gameChoices[Math.floor(Math.random()*gameChoices.length)]
    return computerChoice
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        alert("You win! Rock beats scissors")
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        alert("You lose! Rock beats scissors")
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        alert("You lose! Paper beats rock")
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        alert("You win! Paper beats rock")
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        alert("You win! Scissors beats paper")
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        alert("You lose! Scissors beats paper")
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        alert("It's a tie!")
    }
    else if (playerSelection === 'rock' && computerSelection === 'rock') {
        alert("It's a tie!")
    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        alert("It's a tie!")
    }
    else {
        alert("Error :(")
    }
}

const computerSelection = getComputerChoice()

const rock = document.querySelector('#one');
rock.addEventListener('click', () => {
  playRound('rock', computerSelection);
});

const paper = document.querySelector('#two');
paper.addEventListener('click', () => {
  playRound('paper', computerSelection);
});

const scissors = document.querySelector('#three');
scissors.addEventListener('click', () => {
  playRound('scissors', computerSelection);
});