let userScore = 0;
let compScore = 0;

function getComputerChoice() {
  let comp = Math.floor(Math.random() * 3);
  switch (comp) {
    case 0:
      return 'Rock';
    case 1:
      return 'Paper';
    case 2:
      return 'Scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (
    (computerSelection == 'rock' && playerSelection == 'paper') ||
    (computerSelection == 'paper' && playerSelection == 'scissors') ||
    (computerSelection == 'scissors' && playerSelection == 'rock')
  ) {
    userScore++;
    return 'You won!';
  } else if (computerSelection == playerSelection) {
    return 'Tie game';
  } else {
    compScore++;
    return 'You lost!';
  }
}

for (let i = 0; i < 5; i++) {
  function game() {
    const playerSelection = prompt('Choose rock, paper, or scissors.');
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    alert(result + '\n\nUser Score: ' + userScore + '\nComputer Score: ' + compScore);
  }
  game();
}

if (userScore > compScore) {
  alert('Congratulations! You won the game!');
} else if (userScore < compScore) {
  alert('Sorry, you lost the game.');
} else {
  alert('The game ended in a tie.');
}
