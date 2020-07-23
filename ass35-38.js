function date() {
    var D = new Date();
    document.write(D + "<br>")

}
date();
//////2/////

var firstName = prompt("Enter the first name:")
var lastName = prompt("Enter the last name:")
var result = Name(firstName, lastName);
document.write(result + "<br>")

function Name(firstName, lastName) {

    var name = firstName + " " + lastName;
    return name;

}
//////3//////////
var n1 = +prompt("Enter the num1:")
var n2 = +prompt("Enter the num2:")
var result = add(n1, n2)
document.write("Sum is = " + result + "<br>")

function add(n1, n2) {

    var sum = n1 + n2;
    return sum

}
//////////4////////////
var n1 = +prompt("Enter the num1:")
var n2 = +prompt("Enter the num2:")
var operator = prompt("Enter the operator:")
var cal = calculator(n1, n2, operator)
document.write(cal + "<br>")

function calculator(n1, n2, operator) {
    if (operator === "+") {
        return n1 + n2
    } else if (operator === "-") {
        return n1 - n2
    } else if (operator === "%") {
        return n1 % n2
    } else if (operator === "*") {
        return n1 * n2
    } else if (operator === "/") {
        return n1 / n2
    } else
        return "incorrect operator"

}

//////6///////
var n = +prompt("Enter the number")

function square(n) {
    var s = n * n
    return s;
}
///7////////
var n = +prompt("Enter the number")
var result = factorial(n)
document.write("factorial of" + n + " : " + result)

function factorial(n) {
    var f = 1;
    for (var i = 2; i <= n; i++) {
        f = f * i;

    }
    return f
}

//////8/////
var b = +prompt("Enter the height")
var p = +prompt("Enter the perpendicular")

function hypotenuse(b, p) {
    function square(x) {
        return x * x;
    }
    return Math.sqrt(square(b) + square(p));
}
var result;
result = hypotenuse(b, p);
document.write(result + "<br>");

////9//////////
var h = +prompt("Enter the height")
var w = +prompt("Enter the width")
var r1 = area(h, w)
var r2 = area(2, 3)
document.write(r1 + "<br>")
document.write(r2 + "<br>")


function area(h, w) {
    var a = h * w
    return a
}
/10/ ////
var str = prompt("Enter the word")

var newString = "";

function reverseString(str) {

    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
var r = reverseString(str);
if (r === newString) {
    alert(r + "is  palindrome")
} else
    alert(r + "is not palindrome ")
alert(r)

//////////11///////////
function uppercase(str) {
    var array1 = str.split(' ');
    var newarray1 = [];

    for (var x = 0; x < array1.length; x++) {
        newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    return newarray1.join(' ');
}
document.write(uppercase("the quick brown fox") + "<br>");

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {

        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}

document.write(titleCase("I'm a little tea pot") + "<br>");


///////12////////
function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
alert(longestWord("Web Development Tutorial"))

function find_longest_word(str) {
    var array1 = str.match(/\w[a-z]{0,}/gi);
    var result = array1[0];

    for (var x = 1; x < array1.length; x++) {
        if (result.length < array1[x].length) {
            result = array1[x];
        }
    }
    return result;
}
alert(find_longest_word('Web Development Tutorial'));
////////13//////////

function char_count(str, letter) {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

alert(char_count('w3resource.com', 'o'));
//////14/////////
function calcCircumference(radius) {
    var circum = 2 * Math.PI * radius;
    alert("The circumference is =" + circum)
}

function calcArea(radius) {
    var area = Math.PI * radius * radius;
    alert("The area is =" + area)

}
var radius = +prompt("Enter the radius")
calcCircumference(radius)
calcArea(radius)