// // var city=prompt("Enter City name");
// // if (city === "Karachi" ||city ==="karachi")
// // {
// //     alert("Welcome to city of lights");
// // }
// // else
// // alert("Karachi nh h");

// // ///////////////////////////
// // var gender=prompt("Are you male or female");
// // if (gender === "male" ||gender ==="Male")
// // {
// //     alert(" Good Morning Sir");
// // }
// // else if(gender === "female" ||gender ==="Female")
// // {
// //     alert("Good Morning Ma’am");
// // }
// // else
// // alert("Incorrect entry!");

// // //////////////////////////////////////

// // var color=prompt("Enter the Road Traffic color name");

// // if(color === "Red" || color === "red") 
// // {
// //     document.write("Must Stop")
// // }
// // else if (color === "Yellow"||color === "yellow")
// // {
// //     document.write("Ready to move")
// // }
// // else if(color === "Green" || color==="green")
// // {
// //     document.write("Move now")

// // }
// // else
// // document.write("Incorrect color!")
// // ///////////////////////////////////
// // var fuel=+prompt("Enter the remaining car fuel","l");

// // if(fuel<0.25)
// // {
// //     document.write("<br>Please refill the fuel in your car");
// // }
// // else
// // document.write("We advice to you please always fill the car fuel tank!")
// /////////////////////////////////////

// ///a///
// var a = 4; 
// if (++a === 5)
// { alert("given condition for variable a is true"); 
// } 
// /////////////////////


// ///b///
// var b = 82; 
// if (b++ === 83)
// { 
//     alert("given condition for variable b is true"); 
// }
// ///////////////// 


// ///c///
// var c = 12; 
// if (c++ === 13)
// { alert("condition 1 is true"); } 
// if (c === 13){ alert("condition 2 is true"); }
//  if (++c < 14){ alert("condition 3 is true"); } 
//  if(c === 14){ alert("condition 4 is true"); } 
//  /////////////////////
 
 
 
//  ////d////
//  var materialCost = 20000;
//   var laborCost = 2000;
//   var totalCost = materialCost + laborCost;
//    if (totalCost === laborCost + materialCost)
//    { alert("The cost equals"); } 

// ///////////////////////////
 

// ///e///

//    if (true)
//    { alert("True"); } 
//    if (false)
//    { alert("False"); } 
//  ///////////////


//  ////f////
//  if("car" < "cat")
//  { 
//      alert("car is smaller than cat");
//  } 

//  /////////////////


//  ////// 6///////

//  document.write("<h1>Marks Sheet</h1>");

//  var s1=+prompt("Enter the subject1 marks");
//  var s2=+prompt("Enter the subject2 marks");
//  var s3=+prompt("Enter the subject3 marks");

//  var marksObtained=s1+s2+s3;
//  var total=300;
 
//  document.write("<b>Total marks : </b>"+total+"<br>");

//  document.write("<b>Marks obtained : </b>"+marksObtained+"<br>");
//  var percentage=(marksObtained/total)*100;
//  document.write("<b>Percentage : </b>"+percentage+"%"+"<br>");
//  document.write("<b>Grade : </b>");
//  if(percentage>=80)
//  {
// document.write("A-one"+"<br>")
//  }
//  else if(percentage>=70)
//  {
//      document.write("A"+"<br>")
//  }
 
//  else if(percentage>=60)
//  {
//      document.write("B"+"<br>")
//  }
//  else
//  document.write("Fail"+"<br>")
 

 
//  document.write("<b>Remarks : </b>");
//  if(percentage>=80)
//  {
// document.write("Excellent"+"<br>")
//  }
//  else if(percentage>=70)
//  {
//      document.write("Good"+"<br>")
//  }
 
//  else if(percentage>=60)
//  {
//      document.write("You need to improve"+"<br>")
//  }
//  else
//  document.write("Sorry"+"<br>")
 


// ///////7//////////////

// var number=+prompt("Enter a number 1-10"+"<br>")
// var x=3;

// if (x === number)
// {
//     document.write("Bingo! Correct answer"+"<br>")
// }

// else
// document.write("Close enough to the correct answer"+"<br>")

// /////////8////////////////

// var number=+prompt("Enter a number"+"<br>");

// if (number%3===0)
// {
//     document.write("Yes, it is divisible by 3"+"<br>")
// }
// else
// document.write("it is not possible"+"<br>")




// //////9////////
// var number=+prompt("Enter a number"+"<br>");

// if (number%2===0)
// {
//     document.write("it is even number"+"<br>")
// }
// else
// document.write("it is odd number"+"<br>")

// ///////10////////////

// vartemprature=+prompt("Enter the temprature")

// if(temprature>40)
// {
// document.write("It is too hot outside."+"<br>")
// }
// else if(temprature>30)
// {
//     document.write("The Weather today is Normal."+"<br>")
// }

// else if(temprature>20)
// {
//     document.write("Today’s Weather is cool."+"<br>")
// }
// else
// document.write("OMG! Today’s weather is so Cool"+"<br>")

////////////11//////////////

var firstNumber=+prompt("Enter the First number")
var secondNumber=+prompt("Enter the Second number")
var operation=prompt("Enter the Operation (+, -, *, /, %)  number")

if(operation === "+")
{
    var add=firstNumber+secondNumber;
document.write("Sum = "+add+"<br>")
}
else if(operation ==="-")
{
    var sub=firstNumber-secondNumber;
document.write("Subtration = "+sub+"<br>")
}

else if(operation==="*")
{
    var mul=firstNumber*secondNumber;
document.write("Multiplication = "+mul+"<br>")
}
else if(operation==="/")
{
    var div=firstNumber/secondNumber;
document.write("Division = "+div+"<br>")
}
else if(operation==="%")
{
    var rem=firstNumber%secondNumber;
document.write("Remainder = "+rem+"<br>")
}
else
document.write("Incorrect operator"+"<br>")

/////////////////////////////////////////////////////