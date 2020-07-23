///////1////////
var num1 = +prompt("Enter the poitive integer number")
document.write("number :" + num1 + "<br>" + "round off value :" + Math.round(num1) + "<br>" + "floor value :" + Math.floor(num1) + "<br>" + "Ciel value :" + Math.ceil(num1))

//////2/////////
var num2 = +prompt("Enter the negative integer number")
document.write("number :" + num2 + "<br>" + "round off value : " + Math.round(num2) + "<br>" + "floor value :" + Math.floor(num2) + "<br>" + "Ciel value :" + Math.ceil(num2) + "<br>")

////3////////
var num3 = +prompt("Enter the value")
document.write("the absolute value of " + num3 + " is " + Math.abs(num3) + "<br>")

/////4////////
var dice1 = Math.random()
var dice2 = Math.random()
document.write("random dice value:" + dice1 + "<br>" +
    "random dice value: " + dice2 + "<br>")


///////5//////
var head = prompt("Enter the head");
var tail = prompt("Enter the tail");

var toss = Math.random() * 2;
var floor = Math.floor(toss)
if (floor === 0) {
    document.write("Random Coin Value: Head" + "<br>")
} else if (floor === 1) {
    document.write("Random Coin Value: Tails" + "<br>")
}

//////6//////
document.write("Random number between 84 and 100:" + (Math.floor(Math.random() * 100) + 1) + "<br>")

/////7//////
var weight = prompt("Enter the weight")
document.write("The weight  of user is :" + parseInt(weight) + "killograms" + "<br>")

///////8///////

var secret = 6

var user_secret = +prompt("Enter the secret number b/w 1 to 10")
if (user_secret === secret) {
    alert("Congratulation")
} else {
    alert("Try again!")
}