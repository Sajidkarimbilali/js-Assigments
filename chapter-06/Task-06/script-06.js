var subjectOne = prompt("Enter Subject Name");
var subjectTwo = prompt("Enter Subject Name");
var subjectThree = prompt("Enter Subject Name");

var subjectOneMarks = +prompt("Enter Marks out of 100");
var subjectTwoMarks = +prompt("Enter Marks out of 100");
var subjectThreeMarks = +prompt("Enter Marks out of 100");

var totalMarkseach = 100;

var obtainedTotal = subjectOneMarks + subjectTwoMarks + subjectThreeMarks ;

var percentage = obtainedTotal * 100 /300;

document.write('<table>');

       document.write('<tr>');
       document.write('<th>'  +"Subjec"+ '</th>');
       document.write('<th>' + "Total-MArks" + '</th>');
       document.write('<th>' +  "Obtained-Marks" + '</th>');
       document.write('<th>' + "Percentage" + '</th>');
       document.write('/<tr>');

       document.write('<tr>');
       document.write('<td>'  +subjectOne + '</td>');
       document.write('<td>'  +totalMarkseach + '</td>');
       document.write('<td>'  +subjectOneMarks + '</td>');
       document.write('<td>'  +subjectOneMarks*totalMarkseach/100 + '%' + '</td>')
       document.write('/<tr>');

       document.write('<tr>');
       document.write('<td>'  +subjectTwo + '</td>');
       document.write('<td>'  +totalMarkseach + '</td>');
       document.write('<td>'  +subjectTwoMarks + '</td>');
       document.write('<td>'  +subjectTwoMarks*totalMarkseach/100 + '%' + '</td>')
       document.write('/<tr>');

       document.write('<tr>');
       document.write('<td>'  +subjectThree + '</td>');
       document.write('<td>'  +totalMarkseach + '</td>');
       document.write('<td>'  +subjectThreeMarks + '</td>');
       document.write('<td>'  +subjectThreeMarks*totalMarkseach/100 + '%' + '</td>')
       document.write('/<tr>');

       document.write('<tr>');
       document.write('<th>'+ "\n" +'</th>');
       document.write('<th>'+ 300 +'</th>');
       document.write('<th>'+ obtainedTotal +'</th>');
       document.write('<th>'+ percentage +'%'+'</th>');
       document.write('/<tr>');


   document.write('</table>');
