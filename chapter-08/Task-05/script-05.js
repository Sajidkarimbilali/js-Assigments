var password = prompt("Enter a Password");
var correctPass = 'Sajid12';
if (password == " ") {
  document.write("Please Enter your Password");
}
else if (password == correctPass) {
  document.write("Correct! The Password you entered matches the original password");
}
else {
  document.write("inCorrect! Password ");
}
