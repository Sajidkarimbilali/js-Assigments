var input = prompt("Enter a Number.");
var value = 5;
if(input > value){
  for (var i = 1; i <= 10; i++) {
    document.write("<br>"+input + " x " + i + " = " + i*input);
  }
}
else {
  for (var i = 1; i <= 10; i++) {
    document.write("<br>"+value + " x " + i + " = " + i*value);
  }
}
