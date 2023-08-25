//Question1

document.write("<h2>Question1</h2>")
let city = prompt("Enter the city name: ");
if ( city.toLowerCase() === "karachi" ) {
    console.log("Welcome to city of lights");
    document.write("<h3>Welcome to city of lights</h3>");
}
document.write("<hr>");

//Question2

document.write("<h2>Question2</h2>");
let gender = prompt("Enter your gender: ");
if ( gender.toLowerCase() === "male" ) {
    console.log("Good Morning Sir");
    document.write("Good Morning Sir");    
} else if ( gender.toLowerCass() === "female") {
    console.log("Good Morning Ma'am");
    document.write("Good Morning Ma'am");
}
document.write("<hr>");

//Question3

document.write("<h2>Question3</h2>");
let color = prompt("Enter color for road traffic signal");
if ( color.toLowerCase() === "red" ) {
    console.log("Must Stop");
    document.write("Must Stop");
} else if ( color.toLowerCase() === "yellow" ) {
    console.log("Ready to move");
    document.write("Ready to move");
} else if ( color.toLowerCase() === "green" ) {
    console.log("Move now");
    document.write("Move now");
} else {
    console.log("wrong answer");
}
document.write("<hr>");

//Question4

document.write("<h2>Question4</h2>");
let fuel = +prompt("Enter remaining fuel in car(in litres): ");
if( fuel < 0.25 ) {
    console.log("Please refill the fuel in your car");
    document.write("Please refill the fuel in your car");
}
document.write("<hr>");

//Question5
//5a
document.write("<h2>Question5a</h2>");
var a = 4;
if(++a === 5) {
    alert("given condition for variable a is true");
    document.write("given condition for variable a is true");
}
//5b
document.write("<h2>Question5b</h2>");
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
//5c
document.write("<h2>Question5c</h2>");
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
document.write("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
document.write("condition 4 is true");
}
//5d
document.write("<h2>Question5d</h2>");
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
document.write("The cost equals");
}
//5e
document.write("<h2>Question5e</h2>");
if (true){
alert("True");
document.write("True");
}
if (false){
alert("False");
}
//5f
document.write("<h2>Question5f</h2>");
if("car" < "cat"){
    alert("car is smaller than cat");
    document.write("car is smaller than cat");
}

//Question6

document.write("<h2>Question6</h2>");
document.write("<h2>Marks Sheet</h2>");
let totalMarks = +prompt("Total Marks: ");
document.write("<h3>Total Marks : </h3>" + totalMarks);
let obtainedMarks = +prompt("Enter marks obtained in three subjects: ");
document.write("<h3>Marks Obtained : </h3>" + obtainedMarks);
let percentage = (obtainedMarks/totalMarks) * 100;
// percentage = percentage*100;
document.write("<h3>Percentage : </h3>" + percentage + "<h3>%</h3>");
if(percentage >= 80) {
    document.write("<h3>Grade : A-one</h3>");
    document.write("<h3>Remarks : Excellent</h3>");
} else if(percentage >= 70) {
    document.write("<h3>Grade : A</h3>");
    document.write("<h3>Remarks : Good</h3>");
} else if(percentage >= 60) {
    document.write("<h3>Grade : B</h3>");
    document.write("<h3>Remarks : You need to improve</h3>");
} else if(percentage < 60) {
    document.write("<h3>Grade : Fail</h3>");
    document.write("<h3>Remarks : Sorry</h3>");
}
document.write("<hr>");

//Question7

document.write("<h2>Question7</h2>");
document.write("<h2>Guess Game</h2>");
let secretNumber = 5;
let guessNumber = +prompt("Enter the number ranging from 1 to 10: ");
if( secretNumber === guessNumber ) {
    document.write("<h3>Bingo! Correct Answer</h3>");
} else if( ++secretNumber === guessNumber ) {
    document.write("<h3>Close enough to the correct answer</h3>")
} else {
    document.write("<h3>Wrong Answer</h3>")
}
document.write("<hr>");

//Question8

document.write("<h2>Question8</h2>");
let givenNumber = +prompt("Enter the number: ");
if( givenNumber % 3 === 0 ) {
    document.write("The number is divisible by 3");
} else {
    document.write("The number is not divisible by 3");
}
document.write("<hr>");

//Question9

document.write("<h2>Question9</h2>");
let inputNumber = +prompt("Enter the number: ");
if( inputNumber % 2 === 0 ) {
    document.write("<h3>Even Number</h3>");
} else {
    document.write("<h3>Odd Number</h3>");
}
document.write("<hr>");

//Question10

document.write("<h2>Question10</h2>");
let temperature = +prompt("Enter the temperature: ");
if(temperature > 40) {
    document.write("<h3>It is too hot outside</h3>");
} else if(temperature > 30) {
    document.write("<h3>The Weather today is Normal</h3>");
} else if(temperature > 20) {
    document.write("<h3>Today's Weather is cool</h3>");
} else if(temperature > 10) {
    document.write("<h3>OMG! Today's Weather is so cool</h3>");
}
document.write("<hr>");

//Question11

document.write("<h2>Question11</h2>");
let firstNumber = +prompt("Enter the first number: ");
let secondNumber = +prompt("Enter the second number: ");
let operator = prompt("Enter any one operator from following +,-,*,/,%");
if(operator === "+") {
    let results = firstNumber + secondNumber;
    document.write("Results: " + results);
} else if(operator === "-") {
    results = firstNumber - secondNumber;
    document.write("Results: " + results);
} else if(operator === "*") {
    results = firstNumber * secondNumber;
    document.write("Results: " + results);
} else if(operator === "/") {
    results = firstNumber / secondNumber;
    document.write("Results: " + results);
} else if(operator === "%") {
    results = firstNumber % secondNumber;
    document.write("Results: " + results);
}
document.write("<hr>");
