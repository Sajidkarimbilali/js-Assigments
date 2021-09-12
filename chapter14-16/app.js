//empty array

// var arrayempty = ["waqas","waseem","wiki","ali"];

// var arrayobject = new array ("apple","orange","mango","graps")

// var strarray =  ["asad","ali","moin","karim","zawar"]

//Task-1
/*var array = [];
array[1] = "SSC";
array[2] = "HSC";
array[3] = "BCS";
array[4] = "BS";
array[5] = "BCOM";
array[6] = "MS";
array[7] = "M.Phil";
array[8] = "PhD";


for (var i = 1; i < array.length; i++) {
  document.write("<br>" + i + ")" + array[i])
}
*/

//Task-02
/*
var stName = ["Michael","John","Tony"];
var stScore  = [320,230,480];

for (var i = 0; i < stName.length; i++) {
  stName[i]
}
for (var i = 0; i < stScore.length; i++) {
stScore[i]
}
document.write("Score of " + stName[0] + " is " + stScore[0] + "." + "Percentage: " + stScore[0]*100/500 + " % " )
document.write("<br>Score of " + stName[1] + " is " + stScore[1] + "." + "Percentage: " + stScore[1]*100/500 + " % " )
document.write("<br>Score of " + stName[2] + " is " + stScore[2] + "." + "Percentage: " + stScore[2]*100/500 + " % " )
*/

//Task-ARRAY'S

/*var arrayColors = ["orange","blue","yellow","red","pink","green"];
document.write("PREVIOUS ARRAY :" )
for (var i = 0; i < arrayColors.length; i++) {

  document.write("<br>" + i + " ) " +arrayColors[i])
}

document.write("<hr>")
document.write("at the start :" )
var inputValue = prompt("Enter a color at starting");
arrayColors.unshift(inputValue);
for (var i = 0; i < arrayColors.length; i++) {
  document.write("<br>" + i + " ) " + arrayColors[i] )
}
document.write("<hr>")
document.write("at the end  :" )
var inputValue = prompt("Enter a color at the end");
arrayColors.push(inputValue);
for (var i = 0; i < arrayColors.length; i++) {
  document.write("<br>" + i + " ) " + arrayColors[i] )
}
document.write("<hr>")
document.write(" 2 more colors at the start :" )
var inputValue = prompt("Enter a color at the start 1 ");
var inputValue2 = prompt("Enter a color at the start  2");
arrayColors.unshift(inputValue);
arrayColors.unshift(inputValue2);
for (var i = 0; i < arrayColors.length; i++) {
  document.write("<br>" + i + " ) " + arrayColors[i] )
}
document.write("<hr>")
document.write(" delete started value :" )
arrayColors.shift();

for (var i = 0; i < arrayColors.length; i++) {
  document.write("<br>" + i + " ) " + arrayColors[i] )
}

document.write("<hr>")
document.write(" delete from end :" )
arrayColors.pop();

for (var i = 0; i < arrayColors.length; i++) {
  document.write("<br>" + i + " ) " + arrayColors[i] )
}

document.write("<hr>")
document.write(" insert value at the any index " )
var choosecolor = prompt("enter color");
var chooseIndex = prompt("choose index to add color");
arrayColors.splice(chooseIndex,0,choosecolor);


for (var i = 0; i < arrayColors.length; i++) {
  document.write("<br>" + i + " ) " + arrayColors[i] )
}

document.write("<hr>")
document.write(" remove value from any index " )
var chooseIndex = prompt("choose index to remove item");
arrayColors.splice(chooseIndex,1);
var itemdelted = arrayColors.splice(chooseIndex,1);
console.log(itemdelted);
console.log(arrayColors[i]);
for (var i = 0; i < arrayColors.length; i++) {
  document.write("<br>" + i + " ) " + arrayColors[i] )
}
*/

//TASK-10

/*
var score = [320,230,480,120];
document.write("Score of Students: ")
for (var i = 0; i < score.length; i++) {
  document.write( ","  + score[i] )
}
  document.write("<br> Ordered Score of Students : " +  score.sort());
*/

//join string = 12
/*
var arr = [ "This", "is" , "my", "cat" ];
document.write("This is an array : " + arr);
document.write("<br> string is : "+arr.join(' '));
*/

//Task-13
/*
var divices = ["keyboard","mouse","printer","monitor"];

document.write("Devices : [" + divices.join(", ")+"]<br>");

var removedelement0 =  divices.shift();
document.write("Out : " + removedelement0+"<br>");
var removedelement1 =  divices.shift();
document.write("Out : " + removedelement1+"<br>");
var removedelement2 =  divices.shift();
document.write("Out : " + removedelement2+"<br>");
var removedelement3 =  divices.shift();
document.write("Out : " + removedelement3+"<br>");
*/

/*
var divices = ["keyboard","mouse","printer","monitor"];


document.write("Devices : [" + divices.join(", ")+"]<br>");

var removedelement0 =  divices.pop();
document.write("Out : " + removedelement0+"<br>");
var removedelement1 =  divices.pop();
document.write("Out : " + removedelement1+"<br>");
var removedelement2 =  divices.pop();
document.write("Out : " + removedelement2+"<br>");
var removedelement3 =  divices.pop();
document.write("Out : " + removedelement3+"<br>");
*/
