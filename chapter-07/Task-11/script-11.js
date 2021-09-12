var firstNumber = +prompt("Enter First Number");
var secondnumber = +prompt("Enter Second Number");
var operation = prompt("Enter Operation +,-,*,/,% ");

if (operation == '+') {
  var add = firstNumber + secondnumber;
  document.write("Addition is : " + firstNumber + " + " + secondnumber + " = " + add );
}
else if (operation == '-') {
  var sub = firstNumber - secondnumber;
  document.write("Subtraction is : " + firstNumber + " - " + secondnumber + " = " + sub );
}
else if (operation == '*') {
  var multiplication  = firstNumber * secondnumber;
  document.write("Multiplication is : " + firstNumber + " x " + secondnumber + " = " + multiplication );
}
else if (operation == '/') {
  var divide  = firstNumber / secondnumber;
  document.write("Multiplication is : " + firstNumber + " / " + secondnumber + " = " + divide );
}
else if (operation == '%') {
  var modulus  = firstNumber % secondnumber;
  document.write("Multiplication is : " + firstNumber + " % " + secondnumber + " = " + modulus );
}
