var a = 10;
document.write(`The value of A is: ${a} <br>`);
a++;
document.write(`The value of A after increment is: ${a} <br>`);//11
document.write(`Now the A is: ${a} <br>`);
document.write(`The value of A is: ${a} <br>`);
a++;
document.write(`The value of A after increment is: ${a} <br>`);//12
a--;
document.write(`The value of A is: ${a} <br>`);//11
document.write(`The value after decrement is: ${a} <br>`);
document.write(`The value of A is: ${a} <br>`);
a--;
document.write(`The value after decrement is: ${a} <br><br><br>`);//10

var c = 2, d = 1;
document.write(`C is ${c}<br>`);
document.write(`D is ${d}<br>`);
var result = --c - --d + ++c + d--;
document.write(`Result is: ${result}<br><br>`);

var userName = prompt("Enter your name:");
alert(`Hello ${userName}!`);

var number = +prompt("Enter a number for multiplication table:", 5);
for (var i = 1; i <= 10; i++) {
  document.write(`${number} x ${i} = ${number * i} <br>`);
}


var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");
var totalMarks = 100;
var marks1 = +prompt(`Enter marks obtained in ${subject1}`);
var marks2 = +prompt(`Enter marks obtained in ${subject2}`);
var marks3 = +prompt(`Enter marks obtained in ${subject3}`);
var totalObtained = marks1 + marks2 + marks3;
var subject1Percantage= (marks1 / totalMarks) * 100;
var subject2Percantage= (marks2 / totalMarks) * 100;
var subject3Percantage= (marks3 / totalMarks) * 100;
var percentage = (totalObtained / (totalMarks * 3)) * 100;
document.write("<br><br><table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percantage</th></tr>");
document.write(`<tr><td> ${subject1} </td><td> ${totalMarks} </td><td> ${marks1} </td><td> ${subject1Percantage}% </td></tr>`);
document.write(`<tr><td> ${subject2} </td><td> ${totalMarks} </td><td> ${marks2} </td><td> ${subject2Percantage}% </td></tr>`);
document.write(`<tr><td> ${subject3} </td><td> ${totalMarks} </td><td> ${marks3} </td><td> ${subject3Percantage}% </td></tr>`);
document.write(`<tr><td>Total</td><td> ${totalMarks * 3} </td><td> ${totalObtained} </td><td> ${percentage}% </td></tr>`);
document.write("</table>");