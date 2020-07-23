

// var char=prompt("Enter the character");

// if(char.toLowerCase)
// {
// var num=char.charCodeAt(char);
// document.write(num);
// }
// else if(char.toUpperCase)
// {
// var num=char.charCodeAt(char);
// document.write(num+"<br>");;

// }
// else
// {
// document.write("Incorrect");
// }
// //////2///////////

// var num1=+prompt("Enter the integer1");
// var num2=+prompt("Enter the integer2");

// if(num1 > num2)
// {
//     document.write(num1+" is greater"+"<br>");
// }
// else if(num1 == num2)
// {
//     document.write(num1+" and "+num2+" are equal"+"<br>")
// }
// else
// {
//     document.write(num2+" is greater"+"<br>");
// }

/////3/////////////////////////

// var num=+prompt("Enter the Number:")

// if(num>0)
// {
//     document.write(num+" is positive")
// }
// else if(num<0)
// {
//     document.write(num+" is negative")
// }
// else
// {
//     document.write(num+" is zero")
// }

//////////////////////////////////

////////4////////////////////
function isVowel(argument){

	var text;
	var argument = argument.toLowerCase();

    var vowels = (['a', 'e', 'i', 'o', 'u']);

    for (var i = 0; i <= vowels.length; i++){
        if (argument != vowels[i]) {
            continue;
        }
        return true;
    }
    return false;
}

// See if "A" is a vowel
var char = "A";

if (isVowel(char)) {
	console.log(char + " is a vowel");
} else {
	console.log(char + " is not a vowel");
}
// ///////////////5//////////////////


// /
// var password="pakistan"
// var user_password=prompt("Enter the password")
// if(password===user_password)
// {
//     document.write("Correct! The password you entered matches the original password")
// }

// else if(password!==user_password)
// {
//     document.write("Incorrect password")
// }
// else
// {
//     document.write("Please enter the password")
// }
///////////////////////////////////

/////////////6/////

// var greeting; 
// var hour = 13; 
// if (hour < 18) 
// { 
//     greeting = "Good day"; 
// }
// else
//  {
//      greeting = "Good evening"; 
// } 
//  /////////////////////////////////////
//  //////////7//////////////

//  var time=+prompt("Enter the time in 24 hours formate:(1700,HMS)")

//  if(time>=0000 && time<1200)
//  {
//      document.write("Good Morning")
//  }
//  else if(time>=1200 && time<1700)
//  {
//     document.write("Good afternoon!")

//  }
//  else if(time>=1700 && time<2100)
//  {
//     document.write("Good Evening")
//  }
//  else if(time>=2100 && time<=2359)
//  {
//     document.write("Good night")

//  }
//  else
//  document.write("incorrect formate")


//  ///////