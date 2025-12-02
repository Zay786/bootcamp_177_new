function playTheGame() {
    const wantsToPlay = confirm("Would you like to play a game?");
    
    if (!wantsToPlay) {
        alert("No problem, Goodbye");
        return; 
    }

    const answer = prompt("Enter a number between 0 and 10");

     if (isNaN(answer)) {
        alert("Sorry Not a number, Goodbye");
        return;
    }

     const userAnswer = Number(answer);

     if (userAnswer < 0 || userAnswer > 10) {
        alert("Sorry it’s not a good number, Goodbye");
        return;
    }

    const computerNumber = Math.floor(Math.random() * 11);
compareNumbers(userAnswer, computerNumber);
}
function compareNumbers(userAnswer,computerNumber) {
    let attempts = 1;
     while (attempts <= 3) {
  if(userAnswer === computerNumber) {
    alert("WINNER");
    return;
  }

  if(userAnswer>computerNumber){
    alert("Your number is bigger then the computer’s, guess again");

  }

  if(userAnswer<computerNumber){
    alert("Your number is smaller then the computer’s, guess again");
  }
  if (attempts < 3) {
            let newGuess = prompt("Enter a new number between 0 and 10");
            if (isNaN(newGuess) || newGuess < 0 || newGuess > 10) {
                alert("Invalid number. Goodbye");
                return;
            }
            userNumber = Number(newGuess);
        }

        attempts++;
    }
    alert("Out of chances");
}