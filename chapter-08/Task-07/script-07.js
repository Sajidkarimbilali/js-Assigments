var time = prompt("enter time in 1900 = 7pm Formate");

if (time >= 0000 && time< 1200) {
  document.write("Good Morning!");
}
else if (time >= 1200 && time<1700) {
  document.write("Good afternoon!");
}
else if (time>=1700 && time <2100) {
  document.write("Good Evening!");
}
else if (time>=2100 && time<=2359) {
  document.write("Good Night!");  
}
