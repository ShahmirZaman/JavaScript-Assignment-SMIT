//Question1
document.write("<h2>Question1</h2>");
document.write("<br>");

var num1 = 10;
var num2 = 20;
var result = num1 + num2;
// console.log(result);
document.write("Sum of " + num1 + " and " + num2 + " is " + result);
document.write("<br>");

//Question2

document.write("<h2>Question2</h2>");
document.write("<br>");

var subtract = num1 - num2;
document.write("<br>");
document.write("Subtraction of " + num1 + " and " + num2 + " is " + subtract);
document.write("<br>");
var multiply = num1 * num2;
document.write("<br>");
document.write("Multiplication of " + num1 + " and " + num2 + " is " + multiply);
document.write("<br>");
var divide = num1 / num2;
document.write("<br>");
document.write("Division of " + num1 + " and " + num2 + " is " + divide);
document.write("<br>");
var modulus = num1 % num2;
document.write("<br>");
document.write("Modulus of " + num1 + " and " + num2 + " is " + modulus);
document.write("<br>");
document.write("<hr>");

//Question3
document.write("<h2>Question3</h2>");
document.write("<br>");

//Question3a
let number;
//Question3b
document.write("Value after variable declaration is: " + number);
document.write("<br>");
//Question3c
number = 5;
//Question3d
document.write("Initial Value: " + number);
document.write("<br>");
//Question3e
number ++;
//Question3f
document.write("Value after increment is: " + number);
document.write("<br>");
//Question3g
number += 7;
//Question3h
document.write("Value after addition is: " + number);
document.write("<br>");
//Question3i
number --;
//Question3j
document.write("Value after decrement is: " + number);
document.write("<br>");
//Question3k
let remainder = number%3;
//Question3l
document.write("The remainder is: " + remainder);
document.write("<hr>");

//Question4
document.write("<h2>Question4</h2>");
document.write("<br>");

let ticket_Price = 600;
let total_Ticket = 5;
let total_Cost = ticket_Price*total_Ticket;
document.write("Total cost to buy ",total_Ticket," tickets to a movie is: ",total_Cost," PKR");
document.write("<hr>");

//Question5
document.write("<h2>Question5</h2>");
document.write("<br>");

let tableNumber = 4;
document.write("Table of " + tableNumber);
document.write("<br>");
for ( let i = 1; i <= 10; i++ ) {
    document.write("4 x ",i," = ",i*4);
    document.write("<br>");
}
document.write("<hr>");

//Question6
document.write("<h2>Question6</h2>");
document.write("<br>");
//6a
let celcius = 25;
//6b
let cToF = ( celcius * 9 / 5 ) + 32;
document.write(celcius,"&degC"," is ",cToF,"&degF");
document.write("<br>");
//6c
let fahrenheit = 70;
//6d
let fToC = (fahrenheit - 32) * 5/9;
document.write(fahrenheit,"&degF"," is ",fToC,"&degC");
document.write("<br>");
document.write("<hr>");

//Question7
document.write("<h2>Question7</h2>");
document.write("<br>");
//7a
document.write("<h2>Shopping Cart</h2>");
document.write("<br>");
var priceItem1 = 650;
document.write("Price of Item1 is: ",priceItem1);
document.write("<br>");
//7b
var quantityItem1 = 3;
document.write("Quantity of Item1 is: ",quantityItem1);
document.write("<br>");
//7c
var priceItem2 = 100;
document.write("Price of Item2 is: ",priceItem2);
document.write("<br>");
//7d
var quantityItem2 = 7;
document.write("Quantity of Item2 is: ",quantityItem2);
document.write("<br>");
//7e
var shippingCharges = 100;
document.write("Shipping Charges is: ",shippingCharges);
document.write("<br>");
var totalCostCart = (priceItem1*quantityItem1) + (priceItem2*quantityItem2) + shippingCharges;
document.write("Total Cost of your order is: ",totalCostCart);
document.write("<hr>");

//Question8
document.write("<h2>Question8</h2>");
document.write("<br>");

document.write("<h2>Mark Sheet</h2>");
document.write("<br>");
let totalMarks = 980;
document.write("Total Marks: ",totalMarks);
document.write("<br>");
let marksObtained = 804;
document.write("Marks Obtained: ",marksObtained);
document.write("<br>");
let percentage = marksObtained/totalMarks * 100;
document.write("Percetage: ",percentage,"%");
document.write("<hr>");

//Question9
document.write("<h2>Question9</h2>");
document.write("<br>");

document.write("<h2>Currency In PKR</h2>");
document.write("<br>");
let dollars = 10;
let saudiRiyals = 25;
let totalCurrencyPKR = (dollars*104.80) + (saudiRiyals*28);
document.write("<br>");
document.write("Total Currency in PKR is: ",totalCurrencyPKR);
document.write("<hr>");

// Question10
document.write("<h2>Question10</h2>");
document.write("<br>");

document.write("<h2>Arithmetic Operations In Single Expressions</h2>");
document.write("<br>");
let someNumber = 10;
let calculations  = [(someNumber + 5)*10]/2;
// console.log(calculations);
document.write("Total Calculation is: ",calculations);
document.write("<hr>");

//Question11
document.write("<h2>Question11</h2>");
document.write("<br>");

document.write("<h2>Age Calculator</h2>");
document.write("<br>");
//11a
var currentYear = 2023;
document.write("Current Year: ",currentYear);
document.write("<br>");
//11b
var birthYear = 1997;
document.write("Birth Year: ",birthYear);
document.write("<br>");
//11c
var age = currentYear - birthYear;
// console.log(age);
document.write("Your Age is: ",age);
document.write("<hr>");

//Question12
document.write("<h2>Question12</h2>");
document.write("<br>");

document.write("<h2>The Geometrizer</h2>");
document.write("<br>");
//12a
let radius = 20;
document.write("Radius of a circle: ",radius);
document.write("<br>");
//12b
let pie = 3.142;
let circumference = 2*pie*radius;
document.write("The circumference is: ",circumference);
document.write("<br>");
//12c
let area = pie*radius**2;
document.write("The area is: ",area);
document.write("<hr>");

//Question13
document.write("<h2>Question13</h2>");
document.write("<br>");

document.write("<h2>The Lifetime Supply Calculator</h2>");
document.write("<br>");
//13a
var favouriteSnack = "chocolate chip";
document.write("Favourite Snack: ",favouriteSnack);
document.write("<br>");
//13b
var currentAge = 15;
document.write("Current Age: ",currentAge);
document.write("<br>");
//13c
var maxAge = 65;
document.write("Estimated Maximum Age: ",maxAge);
document.write("<br>");
//13d
var snackPerDay = 3;
document.write("Amount of snacks per day: ",snackPerDay);
document.write("<br>");
//13e
var totalEat = (maxAge - currentAge)*snackPerDay;
document.write("You will need ",totalEat," ",favouriteSnack, " to last you until the ripe old age of ",maxAge); 
document.write("<hr>");















