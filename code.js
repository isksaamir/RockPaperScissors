let UserChoice = prompt('Please choose Scissors, Rock, or Paper?')
function playround (compchoice, UserChoice){
var compchoice
compchoice = getComputerChoice()
let b = 'You won'
let c = 'You lost'
if (compchoice == 'Rock' && UserChoice == 'Paper') {
return b;
}
else if (compchoice == 'Paper' && UserChoice =='Scissors'){
return b;
}

else if (compchoice == 'Scissors' && UserChoice =='Paper'){
return b;
}
else
return c;

}
console.log(playround())

