//Question1

document.write("<h2>Question1</h2>");
let char = prompt("Enter a character (number or string)");
char = char.charCodeAt(0);
if((char >= 65)&&(char <= 90)) {
    document.write("<h3>Input is uppercase letter</h3>");
} else if((char >= 97)&&(char <= 122)) {
    document.write("<h3>Input is lowercase letter</h3>");
} else {
    document.write("<h3>Input is a number</h3>");
}
document.write("<hr>");

//Question2 

document.write("<h2>Question2</h2>");
let integer1 = +prompt("Enter the first integer:");
let integer2 = +prompt("Enter the second integer:");
if((integer1 > integer2)||(integer2 < integer1)) {
    document.write(integer1 + " is larger than " + integer2);
} else if((integer2 > integer1)||(integer1 < integer2)) {
    document.write(integer2 + " is larger than " + integer1);
} else if( integer1 === integer2) {
    document.write(integer1 + " is equal to " + integer2);
}
document.write("<hr>");

// Question3

document.write("<h2>Question3</h2>");
let userNumber = +prompt("Enter the number: ");
if(userNumber < 0) {
    document.write("<h3>The number is negative</h3>");
} else if(userNumber === 0) {
    document.write("The number is zero");
} else {
    document.write("<h3>The number is positive</h3>");
}
document.write("<hr>");

//Question4

document.write("<h2>Question4</h2>");
let character = prompt("Enter any alphabet from a to z: ");
character = character.toLowerCase();
if((character === "a")||(character === "e")||(character === "i")||(character === "o")||(character === "u")){
    document.write("<h3>true</h3>");
} else {
    document.write("<h3>false</h3>");
}
document.write("<hr>");

//Question5

document.write("<h2>Question5</h2>");
let correctPassword = "235678";
let userPassword = prompt("Enter your Password: ");
if(userPassword === "") {
    document.write("<h3>Please enter your password</h3>");
} else if(correctPassword === userPassword) {
    document.write("<h3>Correct! The Password you entered matches the original password</h3>");
} else if(correctPassword !== userPassword) {
    document.write("<h3>Incorrect Password</h3>");
}
document.write("<hr>");

//Question6

document.write("<h2>Question6</h2>");
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
document.write(greeting);
}
else {
greeting = "Good evening";
document.write(greeting);
}
document.write("<hr>");

//Question7

document.write("<h2>Question7</h2>");
let time = +prompt("Enter time in 24 hours clock format like:1900 = 7pm");
if((time >= 0000)&&(time < 1200)) {
    document.write("<h3>Good Morning!</h3>");
} else if((time >= 1200)&&(time < 1700)) {
    document.write("<h3>Good Afternoon!</h3>");
} else if((time >= 1700)&&(time < 2100)) {
    document.write("<h3>Good Evening!</h3>");
} else if((time >= 2100)&&(time <= 2359)) {
    document.write("<h3>Good Night!</h3>")
}
document.write("<hr>");