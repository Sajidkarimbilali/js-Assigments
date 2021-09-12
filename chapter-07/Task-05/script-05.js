var obtainedMarks = prompt("Enter Total Obtained Marks");
var totalMarks = prompt("Enter Total Total Marks");

var percentage = obtainedMarks * 100 / 300;

if (percentage >=80) {
  document.write("Total marks :" + totalMarks);
  document.write("<br>Marks Obtained :" + obtainedMarks);
  document.write("<br>Percentage :" + percentage + "%");
  document.write("<br>Grade : " + "A-one");
  document.write("<br>Remarks : " + "Excellent");
}
else if (percentage >=70) {
  document.write("Total marks :" + totalMarks);
  document.write("<br>Marks Obtained :" + obtainedMarks);
  document.write("<br>Percentage :" + percentage + "%");
  document.write("<br>Grade : " + "A");
  document.write("<br>Remarks : " + "Good");
}

else if (percentage >=60) {
  document.write("Total marks :" + totalMarks);
  document.write("<br>Marks Obtained :" + obtainedMarks);
  document.write("<br>Percentage :" + percentage + "%");
  document.write("<br>Grade : " + "B");
  document.write("<br>Remarks : " + "You Need to improve");
}

else if (percentage < 60) {
  document.write("Total marks :" + totalMarks);
  document.write("<br>Marks Obtained :" + obtainedMarks);
  document.write("<br>Percentage :" + percentage + "%");
  document.write("<br>Grade : " + "Fail");
  document.write("<br>Remarks : " + "Sorry");
}
