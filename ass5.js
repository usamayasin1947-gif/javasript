 var b,a,sum;
var a=+prompt("Enter the 1st value","n1");
var b=+prompt("Enter the 2nd value","n2");

sum=(a+b);
document.write("Sum of "+a+" and "+b+" is "+sum);

 /////////////////////////////////////////
var a=+prompt("Enter the 1st value","n1");
var b=+prompt("Enter the 2nd value","n2");

sub=(a-b);
document.write("<br>Subtraction of "+a+" and "+b+" is "+sub);
//////////////////////////////////////////

var a=+prompt("Enter the 1st value","n1");
var b=+prompt("Enter the 2nd value","n2");

mul=(a*b);
document.write("<br>Multiplication of "+a+" and "+b+" is "+mul);
//////////////////////////////////////////
var a=+prompt("Enter the 1st value","n1");
var b=+prompt("Enter the 2nd value","n2");

div=(a/b);
document.write("<br>Division of "+a+" and "+b+" is "+div);
///////////////////////////////////////////////////////////

var variable;
document.write("<br>Value after variable declaration is "+variable);

variable=5;
document.write("<br>Initial value: "+variable);

variable++;
document.write("<br>Value after increment is:"+variable);

var add=variable+7;
document.write("<br>Value after addition is: "+add);

add--;
document.write("<br>Value after decrement is: "+add);

var remainder=add%3;
document.write("<br>The remainder is: "+remainder);
//////////////////////////////////////////////////////

var ticketPrice=600;
var no_of_tickets=5;
var cost=ticketPrice*no_of_tickets;
document.write("<br>Total cost to buy "+no_of_tickets+" tickets to a movie is "+cost+"PKR");

/////////////////////////////////////////////////////

document.write("<br>Table of 4");

for(var i=1;i<=10;i++)
{
    var t=4*i;
    document.write("<br> 4*"+i+"="+t);
}

///////////////////////////////////

var  C=25;
var  F=70;

var F_T=(C*9/5)+32;
var C_T=(F-32)*5/9;

document.write("<br>"+C+("C is "+F_T+"<br>"+F+"F is "+C_T));
/////////////////////////////////////
var p1=650,p2=100,O_Q1=3,O_Q2=7,totalCost,shippingCost=100;

document.write("<h1>Shopping Cart</h1>");

document.write("<br>Price of item 1 is "+p1);

document.write("<br>Ordered Quantity of item 1 is "+O_Q1);

document.write("<br>Price of item 2 is "+p2);

document.write("<br>Ordered Quantity of item 2 is "+O_Q2);

document.write("<br>Shipping Charges is "+shippingCost);

totalCost=p1*O_Q1+p2*O_Q2+shippingCost;

document.write("<br>Total cost of your order is "+totalCost);
////////////////////////////////////////////////

document.write("<h1>Marks Sheet</h1>");
var T_M=980,O_M=804,percent;
document.write("<br>Total marks:"+T_M);
document.write("<br>Marks obtained:"+O_M);
percent=(O_M/T_M)*100;
document.write("<br>Percentage:"+percent);
//////////////////////////////////////////////

document.write("<br><h1>Currency in PKR</h1>");
var usDollars=10,saudiRiyals=25,totalCurrency;
totalCurrency=10*104.80+25*28;

document.write("<br>Total Currency in PKR:"+totalCurrency);
///////////////////10///////////////////////////////////

var x=10;

var result=((10+5)*10)/2;
document.write("<br>Result is "+result);
/////////////////11////////////////////////////

document.write("<br><h1>The Age Calculator</h1>");

var currentYear=2016;
var birthYear=1992;
var age1=currentYear-birthYear;
var age2=birthYear-currentYear;
document.write("<br>They are either "+age1+"or"+age2+"years old");
document.write("<br>Your Age is:"+age1);
///////////////12//////////////////////////////////

document.write("<br><h1>The Geometrizer</h1>");
var radius=20;
var circumference=2*3.14*radius;
var area=3.14*radius*radius;
document.write("<br>The circumference is :"+circumference);
document.write("<br>The area is :"+area);
///////////////13/////////////////////////////

document.write("<br><h1> The Lifetime Supply Calculator</h1>");

var favoriteSnack="choclate chip";
var currentAge=15;
var maximumAge=65;
var estimatedAmount_perDay=3;
var  total;   

document.write("<br>Favorite snack: "+favoriteSnack);
document.write("<br>Current age:"+currentAge);
document.write("<br>Maximum Age: "+maximumAge);
document.write("<br>Amount of snack per day: "+estimatedAmount_perDay);

total=(maximumAge-currentAge)*3;
document.write("<br>You will need "+total+" to last you until the ripe old age of "+maximumAge);