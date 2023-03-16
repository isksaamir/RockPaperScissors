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
      return 'You won!';
      
    }
    else if (computerSelection==playerSelection) {
        return 'tie game';
    } 
    
    else {
      return 'You lost!';
    }
  }
  
  
  const playerSelection = prompt('Choose rock, paper, or scissors.');
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  alert(result);

  for (let i = 0; i < 5; i++) {
    function game (){

    }
 }
  
