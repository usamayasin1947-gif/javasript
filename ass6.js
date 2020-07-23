document.write("Result:");
var a = 10;
document.write("<br>The value of a is:" + a);

document.write("<br>..........................<br><br>");
document.write("<br>The value of ++a is:" + ++a);
document.write("<br>Now the value of a is:" + a + "<br><br>");

document.write("<br>The value of a++ is:" + a++);
document.write("<br>Now the value of a is:" + a + "<br><br>");

document.write("<br>The value of --a is:" + --a);
document.write("<br>Now the value of a is:" + a + "<br><br>");

document.write("<br>The value of a-- is:" + a--);
document.write("<br>Now the value of a is:" + a);

/////////////////2/////////////////////////////////

var a = 2,
    b = 1;
var result = --a - --b + ++b + b--;
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;

document.write("<br>a is:" + a);
document.write("<br>b is:" + b);
document.write("<br>result is :" + result);
///////////////3/////////////////////////////////////

var userName = prompt("<br>Enter your name");
alert(userName);
document.write("<br>Your Name is: " + userName);
//////////4/////////////////////////////////////

var subject1 = prompt("Enter your subject One Name ");
var subject2 = prompt("Enter your subject two Name ");
var subject3 = prompt("Enter your subject three Name ");

var totalMarks = 100;
var obtainedMarks_1 = +prompt("Enter your subject One obtained Marks ");
var obtainedMarks_2 = +prompt("Enter your subject two obtained Marks ");
var obtainedMarks_3 = +prompt("Enter your subject three obtained Marks ");

var totalObtained = (obtainedMarks_1 + obtainedMarks_2 + obtainedMarks_3);

var percentage = ((obtainedMarks_1 + obtainedMarks_2 + obtainedMarks_3) / 100) * 100;

var tbl = document.getElementById("myTable");
var row = tbl.insertRow();
var cell1 = row.insertCell();
var cell2 = row.insertCell();
var cell3 = row.insertCell();
var cell3 = row.insertCell();
cell1.innerHTML = "subject1";
cell1.innerHTML = "totalMarks";


var sub1 = document.getElementById('s1').innerHTML = subject1;
var sub2 = document.getElementById("s2").innerHTML = subject2;