////////1///////////
var rightNow = new Date()
document.write(rightNow + "<br>")

/////2/////
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const d = new Date();
document.write("The current month is " + monthNames[d.getMonth()] + "<br>");
///3//////

var day = new Date();
var a = day.toString();
var b = a.slice(0, 3);
document.write("Today is " + b + "<br>")


////4////

var dayNames = ["Monday", "Tuesday", "Wednesday", "Thurseday", "Friday", "Satuarday", "Sunday"]
var day = new Date();
document.write("Today is " + dayNames[day.getDay()] + "<br>")

if (dayNames[day.getDay()] === "Sunday" || dayNames[day.getDay()] === "Saturday") {
    document.write("it's fun day" + "<br>")
}

///5/////
var date = new Date();
document.write("Date:" + date.getDay() + "th" + " <br> ")

if (date.getDay() < 16) {
    document.write("First fifteen days of the month")
} else
    document.write("Last days of the month")

// //////////6///////

var rightNow = new Date()
document.write("Current Date:" + rightNow + " <br> ")
document.write("Elapsed miliseconds since  January 1,1970:" + rightNow.getTime() + " <br> " +
    "Elapsed minutes since  January 1,1970:" + rightNow.getTime() / 60000 + " <br> ")


////7//////
var a = new Date();
document.write("Hour is :" + a.getHours() + " <br> ")
if (a.getHours() < 12) {

    document.write("Its AM" +
        " <br> ")
} else
    document.write("Its PM" + " <br> ")
    //////8/////
var laterDate = new Date("December 31,2020")

document.write("Later Date:" + laterDate + "<br>")

//////9///////
var today = new Date();
var startingDate = new Date("June 18, 2015 ");
var Today = today.getTime();
var msDiff = Today - startingDate;
var dDiff = msDiff / (1000 * 60 * 60 * 24); ////convert mili todays
var dDiff = Math.floor(dDiff)


document.write(dDiff + " days have passed the since 1st Ramdan ,2020" + "<br>")

// ////10//////
var refDate = new Date();
var begDate = new Date("January 01, 2015 ");
var Today = refDate.getTime();
var msDiff = Today - begDate;
var dDiff = msDiff / (1000); ////convert mili to seconds
var dDiff = Math.floor(dDiff)

document.write("Reference date:" + refDate + "<br>")
document.write(dDiff + " seconds have passed the since beginning of 2015" + "<br>")

//////11//////

// var oneYearFromNow = new Date();
// document.write(oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1));
// var oneMonthFromNow = new Date();
// document.write(oneMonthFromNow.setMonth(oneMnthFromNow.getMonth() + 1));
// var onedateFromNow = new Date();
// document.write(onedateFromNow.setDate(onedateFromNow.getDate() + 1));
// document.write(a + "-" + "b" + "-" + "c")


////////12/////////
/////13/////
// var age = +prompt("Enter the age");
// var today = new Date();
// var startingDate = new Date();
// var Today = today.getTime();
// var Diff = Today - startingDate;
// var dDiff = Diff / (1000 * 60 * 60 * 24 * 30 * 12); ////convert mili to year
// var dDiff = Math.floor(dDiff)


// //////14/////////
var name = prompt("Enter the customer name")

var month = prompt("Enter the current month")

var units = +prompt("Enter the no of units")

var charges = +prompt("Enter the charges per unit")

var net = units * charges;
var surcharge = 300;
var gross = net + surcharge;
document.write("<h1>K-Electric Bill</h1>" + "<br>")
document.write("Customer Name:" + name + "<br>")
document.write("Month:" + month + "<br>")
document.write("Number of  units:" + units + "<br>")
document.write("Charges per  units:" + charges + "<br>" + "<br>" + "<br>")
document.write("Net Amount Payable(with in due date):" + net + "<br>")
document.write("Late payment surcharge:" + surcharge + "<br>")
document.write("Gross Amount payable (after due date):" + gross)