var play1 = Math.floor(Math.random() * 6) + 1;
var play2 = Math.floor(Math.random() * 6) + 1;
const play = [play1, play2];

for (var i = 0; i < 2; i++) {
  switch (play[i]) {
    case 1:
      document.getElementsByClassName("dice")[i].getElementsByClassName("img")[0].src = "images/dice1.png";
      break;
    case 2:
      document.getElementsByClassName("dice")[i].getElementsByClassName("img")[0].src = "images/dice2.png";
      break;
    case 3:
      document.getElementsByClassName("dice")[i].getElementsByClassName("img")[0].src = "images/dice3.png";
      break;
    case 4:
      document.getElementsByClassName("dice")[i].getElementsByClassName("img")[0].src = "images/dice4.png";
      break;
    case 5:
      document.getElementsByClassName("dice")[i].getElementsByClassName("img")[0].src = "images/dice5.png";
      break;
    case 6:
      document.getElementsByClassName("dice")[i].getElementsByClassName("img")[0].src = "images/dice6.png";
      break;
    default:
      break;
  }
}

if (play1 > play2) {
  console.log("Player 1 Wins");
  document.getElementById("result").innerHTML = "Player One Wins!";
} else if (play2 > play1) {
  console.log("Player 2 Wins");
  document.getElementById("result").innerHTML = "Player Two Wins!";
} else {
  console.log("Draw");
  document.getElementById("result").innerHTML = "Draw";
}