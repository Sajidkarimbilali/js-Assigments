// document.write("Hello world");
/*
var firstName = prompt("Enter your First Name");
var lastName = prompt("Enter your Last Name");

var fullName = firstName+lastName;
document.write("Your Full Name is : " + fullName);*/


/*var mobileInfo = prompt("Enter your Mobile information");
var inputlength = mobileInfo.length; 
document.write("My favorite phone is : " + mobileInfo + "<br>");
document.write("Length of string : " + inputlength );
*/

/*var string = "Pakistani";
var find = string.indexOf('n');
document.write("String is : Pakistani " + "<br>" + "Index of 'n' : " + find);
*/

/*var string = "Hello World";
var find = string.lastIndexOf('l',10);
document.write("String : " +  string + "<br>" +"Last index of 'l' : "  +  find);

*/

/*var string = "Pakistani";
var find = string.charAt(3);
document.write("String : " +  string + "<br>" +"Character at index 3: "  +  find);*/

var firstName = prompt("Enter your First Name");
var lastName = prompt("Enter your Last Name");

var fullName = firstName.concat(lastName);
document.write("Your Full Name is : " + fullName);