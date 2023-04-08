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
  //playerSelection = playerSelection.toLowerCase();
  //computerSelection = computerSelection.toLowerCase();
  if (
    (computerSelection == 'Rock' && playerSelection == 'Paper') ||
    (computerSelection == 'Paper' && playerSelection == 'Scissors') ||
    (computerSelection == 'Scissors' && playerSelection == 'Rock')
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


function game() {
  const btns = document.querySelectorAll('.btn');
  let playerSelection; 
  let winner = '';
  
  btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
      playerSelection = btn.value;
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
      alert(result + '\n\nUser Score: ' + userScore + '\nComputer Score: ' + compScore);
      
      if (userScore >= 5 || compScore >= 5) {
        if (userScore > compScore) {
          winner = 'Congratulations! You won the game!';
        } else if (userScore < compScore) {
          winner = 'Sorry, you lost the game.';
        } else {
          winner = 'The game ended in a tie.';
        }

        alert(winner + '\n\nFinal Score: User ' + userScore + ' - ' + compScore + ' Computer');
      }
    });
  });
}

game();
