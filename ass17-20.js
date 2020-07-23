/////////1///////////
let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];

//////2////////
var arr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
document.write(arr[0][0] + " ", arr[0][1] + " ", arr[0][2] + " ", arr[0][3] + "<br>")
document.write(arr[1][0] + " ", arr[1][1] + " ", arr[1][2] + " ", arr[1][3] + "<br>")
document.write(arr[2][0] + " ", arr[2][1] + " ", arr[2][2] + " ", arr[2][3] + "<br>")
    /////////3/////////

for (var i = 0; i <= 10; i++) {
    document.write(i + "<br>")
}
//////4//////

var tableNumber = +prompt("Enter the table number");
var tableLength = +prompt("Enter the table lenght");
document.write("Multiplication table of " + tableNumber + "<br>");
document.write("Length of " + tableLength + "<br>");
for (var i = 1; i <= tableLength; i++) {
    document.write(tableNumber + "*" + i + "=" + tableNumber * i + "<br>")
}
/////5/////////////

var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + "is " + fruits[i] + "<br>")
}
/////////6/////////


document.write("<b>Counting:</b>" + "<br>")

for (var i = 1; i <= 15; i++) {
    document.write(i + " , ")

}
document.write("<br>")

document.write("<b>Reverse Counting:</b>" + "<br>")

for (var i = 10; i >= 1; i--) {
    document.write(i + " , ")
}
document.write("<br>")

document.write("<b>Even:</b>" + "<br>")

for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i + "<br>")

    }

}
document.write("<br>")


document.write("<b>Odd:</b>" + "<br>")

for (var i = 0; i <= 20; i++)

{
    if (i % 2 == 0)




    {
        continue
    } else
        document.write(i + "<br>")
}
document.write("<br>")

document.write("<b>Series:</b>" + "<br>")

for (var i = 0; i <= 20; i++)





{
    if (i % 2 == 0)





    {
        document.write(i + "k" + " , ")
    } else
        continue


}

document.write("<br>")

////////7/////////

var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var element = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am ?")

var a = A.indexOf(element)

if (a > -1)

{
    document.write(element + "is <b>available</b> at index " + a + " in our bakery" + "<br>")



} else

{
    document.write("We are sorry . " + element + " is <b> not available </b> in our bakery" + "<br>")
}

//////8////////

var A = [24, 53, 78, 91, 12]
document.write("Array items:" + A + " <br> ")
    /////1st way/////
document.write(Math.max(...A) + " <br> ")
    /////2nd way/////
document.write(Math.max.apply(null, A))
    ////3rd way/////
var largest_Numb = A[0]
for (var i = 0; i < A.length; i++) {
    if (largest_Numb < A[i])

    {
        largest_Numb = A[i]
    }
}
document.write("The largest number is" + largest_Numb + " <br> ")
    ////////9////////

var A = [24, 53, 78, 91, 12]
document.write("Array items:" + A + " <br> ")
    /////1st way/////
document.write(Math.min(...A) + " <br> ")
    /////2nd way/////
document.write(Math.min.apply(null, A) + " <br> ")
    ////3rd way/////
var smallest_Numb = A[0]
for (var i = 0; i < A.length; i++) {
    if (smallest_Numb > A[i]) {
        smallest_Numb = A[i]
    }
}
document.write("The smallest number is" + smallest_Numb + " < br > ")

//////10//////////
for (var i = 1; i <= 20; i++)


{

    document.write(5 * i + ",")

}