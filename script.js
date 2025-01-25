function playGame(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  document.getElementById('user-choice').innerText = `Your Choice: ${userChoice}`;
  document.getElementById('computer-choice').innerText = `Computer's Choice: ${computerChoice}`;

  let winner = determineWinner(userChoice, computerChoice);
  document.getElementById('winner').innerText = `Winner: ${winner}`;
}

function determineWinner(user, computer) {
  if (user === computer) {
    return 'It\'s a Tie!';
  }
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    return 'You Win!';
  } else {
    return 'Computer Wins!';
  }
}
