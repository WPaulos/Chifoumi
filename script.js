//Player choice


//Computer choice


let computerChoice = Math.floor(Math.random() * 3);
if (computerChoice = 3) {
  computerChoice = "rock";
} else if (computerChoice = 2){
  computerChoice = "paper";
} else (computerChoice <= 1){
  computerChoice = "scissors"
}

//COmpare user vs computer choice
let compare = function(choice1, choice2) {
  if (choice1 === choice2) {
    return "Equality";
  }
  if (choice1 === "rock") {
    if (choice2 === "paper"){
      return "Lost..."
    } else {
      return "Won !";
    }
  }
  
  if (choice1 === "paper") {
    if (choice2 === "scissors"){
      return "Lost..."
    } else {
      return "Won !";
    }
  }
  if (choice1 === "scissors"){
    if (choice2 === "rock"){
      return "Lost...";
    } else {
      return "Won !";
    }
  }
}