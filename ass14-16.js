let arrayName = [];
// ///////2//////
var student = {
    Firstname: "Suresy",
    Lastname: "Rayy",
    RollNo: 12
};
// ////3//////

var strings = ["osama", "yasin", "abbasi"];

// ///////4///////
var numbers = [1, 2, 3, 4, 5];

// /////5/////
var bolean = [true, false]
    // /////6//////
var mixed = [1, "ABC", true]

// ///7////

var educationQualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
document.write("<h1>Qualifications:<br></h1>")
document.write("1)" + educationQualification[0] + "<br>");
document.write("2)" + educationQualification[1] + "<br>");
document.write("3)" + educationQualification[2] + "<br>");
document.write("4)" + educationQualification[3] + "<br>");
document.write("5)" + educationQualification[4] + "<br>");
document.write("6)" + educationQualification[5] + "<br>");
document.write("7)" + educationQualification[6] + "<br>");
document.write("8)" + educationQualification[7] + "<br>");

/////////8////////

var studentName = ["Michael", "John", "Tony"]
var studentScore = [320, 230, 480]
var totalScore = 500;

var p0 = (studentScore[0] / totalScore) * 100;
document.write("Score of " + studentName[0] + " is " + studentScore[0] + ". Percentage:" + p0 + "%" + "<br>")

var p1 = (studentScore[1] / totalScore) * 100;
document.write("Score of " + studentName[1] + " is " + studentScore[1] + ". Percentage:" + p1 + "%" + "<br>")

var p2 = (studentScore[2] / totalScore) * 100;
document.write("Score of " + studentName[2] + " is " + studentScore[2] + ". Percentage:" + p2 + "%" + "<br>")
    ///////////9////////////

var colorName = ["red", "yellow", "purpule", "green"]
document.write(colorName + "<br>")
var input1 = prompt("add the color in the beginning");
colorName.unshift(input1)
document.write(colorName + "<br>")

///b//
var input2 = prompt("addcolor at the end ");
colorName.push(input2)
document.write(colorName + "<br>")
    ///c///
var input3 = prompt("add color1 at the end ");
var input4 = prompt("add color2 at the end ");
colorName.unshift(input3)
colorName.unshift(input4)
document.write(colorName + "<br>")
    ///d--> Delete the first color in the array////

colorName.shift()
document.write(colorName + "<br>")

//e--> Delete the last color in the array//////

colorName.pop()
document.write(colorName + "<br>")

///f//////

var index = +prompt("Enter the number")
var input5 = prompt("Enter the color name")
colorName.splice(index, 0, input5)
document.write(colorName + "<br>")

/////g///////
///for more than one item delte 
var index = +prompt("Enter the number")
var input6 = prompt("how many colors to delete")
colorName.splice(index, input6)
document.write(colorName + "<br>")
    ///for one item delte at specific postion
delete colorName[index]
document.write(colorName + "<br>")

////10///////

var studentScore = [320, 230, 480, 120]

document.write(studentScore.sort() + "<br>")




////11/////////

var cityName = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]

var selectedCities = cityName.slice(2, 4);
document.write(selectedCities + "<br>")

/////////12////////
var arr = ["This", " is ", " my ", "cat"];
document.write("<h1>Arrays</h1>" + "<br>")
document.write(arr + "<br>")
document.write("<h1>Strings</h1>" + "<br>")
var arr1 = arr.join("")
document.write(arr1 + "<br>")
    ////////////13////////

var device = ["Keyboard", "Mouse", "printer", "Monitor"]






///////15//////
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
document.write("phoneManufactures = " + "[" + phoneManufacturers + "]" + "<br>")
var obj = document.getElementById("selectNow");