
// . Write a program to print numeric counting from 1 to 10.
/*for (var i = 1; i <= 10; i++) {
	// console.log(i);
	document.write(i + "<br>");
}
*/
/* 

4. Write a program to print multiplication table of any 
number using for loop. Table number & length should be 
taken as an input from user.

*/

/*var tablevalue = +prompt("Enter a number to show its multiplication table");
var tablelength = +prompt("Enter a table length");
document.write("Multiplication table of " + tablevalue + " length " + tablelength);
document.write("<br>");
document.write("<br>");
for (var i = 1; i <= tablelength; i++) {
    document.write(tablevalue + " x " + i + " = " + i*tablevalue + "<br>");
}*/



/*. Write a program to print items of the following array 
using for loop:
*/

/*
 fruits = ["apple", "banana", "mango", "orange", 
"strawberry"];

for (var i = 0; i < fruits.length; i++) {
document.write(fruits[i] + "<br>");
}

document.write("<br>");

for (var i = 0; i < fruits.length; i++) {
document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}
*/


/*6. Generate the following series in your browser. See 
example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
*/

/*document.write("Counting :  <br>");
	document.write("<br>");
for (var i = 1; i <= 15; i++) {
	document.write(i + " , "  );
}

document.write("<br>");
document.write("<br>");
document.write("Reversing Counting :  <br>");
	document.write("<br>");
for (var j = 10; j >= 1; j--) {
	document.write(j + " , "  );
}

document.write("<br>");
document.write("<br>");
document.write("Even :  <br>");
	document.write("<br>");
for (var even = 0; even <= 20; even++) {
	if (even % 2 == 0) {
	document.write(even + " , "  );

	}
}

document.write("<br>");
document.write("<br>");
document.write("Odd :  <br>");
	document.write("<br>");
for (var odd = 0; odd <= 20; odd++) {
	if (odd % 2 == 1) {
	document.write(odd + " , "  );

	}
}

document.write("<br>");
document.write("<br>");
document.write("Series :  <br>");
	document.write("<br>");
for (var s = 2; s <= 20; s++) {
	if (s % 2 == 0) {
	document.write(s + "k , "  );

	}
}*/


/*A = ["cake", "apple pie", "cookie", "chips", "patties"];
var inputvalue =  prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am");
var value  = A.indexOf(inputvalue);

if(value == true ){
document.write(value + " is AVAILABLE at index " + value + " in our bakery..");
} 
else{
document.write("We are sorry." + inputvalue + " is not AVAILABLE in our bakery");

}
*/


/*var A = [24, 53, 78, 91, 12]
var largest= 0;
document.write("Array items: "  );
for (i=0; i<=largest;i++){
    if (A[i]>largest) {
        var largest=A[i];

document.write(A[i] + "," );
    }    
}
document.write("<br>");
document.write("The largest number is " + largest);
*/

/*var A = [24, 53, 78, 91, 12]
var smallest= A[0];
document.write("Array items: "  );
for (i=0; i<=A.length;i++){
    if (A[i]<smallest) {
        var smallest=A[i];

document.write(A[i] + "," );
    }    
}
document.write("<br>");
document.write("The largest number is " + smallest);

*/

/*for (var i = 1; i <= 20; i++) {
	
	document.write(i * 5 + ",");
}*/