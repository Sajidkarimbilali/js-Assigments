

var number = prompt("Guess the secret Number 1-10");
var secretNumber = 5;
if (number == secretNumber) {
  document.write("Bingoo! Correct answer.")
}
else if (number > secretNumber) {
  document.write("Close enough to the correct answer.")
}
