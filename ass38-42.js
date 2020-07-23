// // function power1(a, b) {
// //     var i, p = 1;
// //     for (i = 1; i <= b; i++)
// //         p *= a;
// //     return p;
// // }

// // alert(power1(2, 3))

// // ////2////
// // function leapyear(year) {

// //     if (year % 100 === 0 || year % 400 === 0 || year % 4 === 0)
// //         return true;
// //     else
// //         return false
// // }
// // alert(leapyear(2016));
// // alert(leapyear(2000));
// // alert(leapyear(1700));

// ////////3////////
// // var a, b, c;

// // function Area(a, b, c) {
// //     function sides(a, b, c) {
// //         var side = (a + b + c) / 2
// //         return side
// //     }
// //     var s = sides(1, 4, 3);

// //     var area = s * (s - a) * (s - b) * (s - c);
// //     return area;

// // }


// // alert(Area(1, 2, 3))
// ///////4///////
// var s1 = +prompt("Enter the subject marks 1")
// var s2 = +prompt("Enter the subject marks 1")
// var s3 = +prompt("Enter the subject marks 1")
// var r = mainfunction(s1, s2, s3);


// function mainfunction(s1, s2, s3) {


//     var r1 = average(s1, s2, s3);
//     var r2 = percentage(s1, s2, s3);
//     alert(r1)
//     alert(r2 + "%")


//     function average(s1, s2, s3) {
//         var avg = (s1 + s2 + s3) / 3;
//         return avg

//     }

//     function percentage(s1, s2, s3) {
//         var total = 300;
//         var per = ((s1 + s2 + s3) / total) * 100;


//         return Math.round(per);
//     }
// }

/////////5/////////


// var str = "Hello world, welcome to the universe.";
// alert(index(str))

// function index(str) {
//     var n = str.indexOf("welcome");
//     return n

// }

/////6//////
// alert(delte("mani good boy"))


// function delte(str) {

//     for (var i = 0; i < str.length; i++) {
//         if (str.charAt[i] === "A" || str.charAt[i] === "E" || str.charAt[i] === "I" || str.charAt[i] === "O" || str.charAt[i] === "U" || str.charAt[i] === "a" || str.charAt[i] === "e" || str.charAt[i] === "i" || str.charAt[i] === "o" || str.charAt[i] === "u") {
//             return str.replace(/[aeiou]/g, '');

//         }
//     }


// }

//////7/////////

// const def = prompt('Enter the string to count two vowels in succetion : ');
// const answer = deleteVowelsS(def);
// alert('The vowels in succetion are ' + answer + ' times');

// function deleteVowelsS(str) {
//     let count = 0;
//     for (let i = 1; i < str.length; i++) { // Start with 1 in stead of 0, so you know the previous character exists
//         switch (str[i]) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 if (str[i] === str[i - 1]) {
//                     count++;
//                 }
//                 break;

//             default:
//                 break;
//         }
//     }
//     return count;
// }

/////////8/////////
// var d = +prompt("Enter the distance b/w two cities: km")
// meter(d);
// feet(d);
// inches(d);
// centimeters(d);

// function meter(d) {

//     var m = d * 1000;
//     alert("distance in meter: " + m)
// }

// function feet(d) {
//     var f = d * 3280.84;
//     alert("distance in feet: " + f)


// }

// function inches(d) {
//     var i = d * 39370.1;
//     alert("distance in inches: " + i)

// }

// function centimeters(d) {
//     var c = d * 100000;
//     alert("distance in centimeter: " + c)
// }

////////9/////////

// var count = 1,
//     working_hours, over_time;
// var over_time_pay;

// while (count <= 10) {
//     var w_h = +prompt("Enter the working hours of employee no : ");

//     if (w_h > 40) {
//         over_time = w_h - 40;
//         over_time_pay = over_time * 12.00;
//         alert("overtime pay is " + over_time_pay);
//     } else
//         alert("You have to work for more than 40 hours to get over time pay");

//     count++;
// }

///////10/////
var amount = +prompt("Enter the amount:");
var h = amount / 100;
var f = ((amount % 100) / 50);
var t = (((amount % 100) % 50) / 10);
var o = (((amount % 100) % 50) % 10);

document.write("<b>you will have " + Math.round(h) + " hundred notes " + Math.round(f) + " fifty notes " + Math.round(t) + " ten notes</b>")