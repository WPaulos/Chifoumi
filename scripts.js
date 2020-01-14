/*function changeImage()
const buttons = document.querySelectorAll(".option button");
for (let i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.addEventListener("click", function() {
    
  });
}
*/

const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Play match
  const playMatch = () => {
    const options = document.querySelectorAll(".option button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector("computer-hand");
    //Computer options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //Computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerChoice[computerNumber];
        //Here is where we call compare hands

        //Update images
        playerHand.scr = "./assets/img/img-white/${this.textContent}.png";
        computerHand.scr = "./assets/img-white${computerChoice}.png";
      });
    });
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update text
    const rText = document.querySelectorAll(".result-text");
    //Checking for a tie
    if (playChoice === computerChoice) {
      rText.textContent = "Equality";
      return;
    }
    //Check for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        rText.textContent = "Won !";
      } else {
        rText.textContent = "Lost...";
        return;
      }
    }
    //Check for paper
    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        rText.textContent = "Won !";
      } else {
        rText.textContent = "Lost...";
        return;
      }
    }
    //Check for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        rText.textContent = "Won !";
      } else {
        rText.textContent = "Lost...";
        return;
      }
    }
  };
};

//star the game function
game();
