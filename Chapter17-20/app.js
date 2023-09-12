// //Question1

let arrayOFArrays = [
    [],
    [],
    []
];

// //Question2

document.write("<h3>Question2</h3>")
var mulDimArray = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
]
document.write(mulDimArray[0] + "<br>" + mulDimArray[1] + "<br>" + mulDimArray[2] + "<br>");

// //Question3

document.write("<h3>Question3</h3>");
for (let index = 1; index <= 10 ; index++) {
    document.write(index,"<br>");
};

// //Question4

document.write("<h3>Question4</h3>");
let tableNumber = +prompt("Enter a number to show its multiplication table: ");
let tableLength = +prompt("Enter length multiplication table: ");
document.write("Multiplication table of " + tableNumber + "<br>");
document.write("Length " + tableLength + "<br>");
for (let i = 1; i <= tableLength; i++) {
    document.write(tableNumber + " x " +  i  + " = " + tableNumber*i + "<br>");
}

//Question5

document.write("<h3>Question5</h3>");
var fruits = ["apple","banana","mango","orange","strawberry"];
for (let index = 0; index < fruits.length; index++) {
        document.write(fruits[index],"<br>");
}
for (let i = 0; i < fruits.length; i++) {
    document.write("Element at Index " + i + " is " + fruits[i] + "<br>");
}

//Question6

document.write("<h3>Question6</h3>");
//6a
document.write("<h3>Counting: </h3>");
for (let i = 1; i <= 15; i++) {
    document.write(i + ",")
}
//6b
document.write("<h3>Reverse Counting: </h3>");
for (let i = 10; i >= 1; i--) {
    document.write(i + ",")
}
//6c
document.write("<h3>Even: </h3>");
for (let i = 0; i <= 20; i+=2) {
    document.write(i + ",")
}
//6d
document.write("<h3>Odd: </h3>");
for (let i = 1; i < 20; i+=2) {
    document.write(i + ",")
}
//6e
document.write("<h3>Series: </h3>");
for (let i = 2; i <= 20; i+=2) {
    document.write(i + "k" + ",")
}

//Question7

document.write("<h3>Question7</h3>");
let myBakeryItems = ["cake","apple pie","cookie","chips","patties"];
let userInput = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?");
userInput = userInput.toLowerCase();
let matchFound = false;
let itemIndex;
for (let i =0; i < myBakeryItems.length; i++) {
    let currentItems = myBakeryItems[i].toLowerCase();
    if(currentItems === userInput) {
        matchFound = true;
        itemIndex = i;
    }
}
if(matchFound) {
    alert(userInput + " is available at index " + itemIndex + " in our bakery");
} else {
    alert("We are sorry." + userInput + " is not available in our bakery");
}

//Question8

document.write("<h3>Question8</h3>");
let A = [24,53,78,91,12];
let largestNumber = A[0];
document.write("Array Items: " + A + "<br>");
for (let i = 0; i < A.length; i++) {
    if(A[i] > largestNumber) {
        largestNumber = A[i];
    }
}
document.write("The largest number is " + largestNumber);

// Question9

document.write("<h3>Question8</h3>");
let A1 = [24,53,78,91,12];
let smallestNumber = A1[0];
document.write("Array Items: " + A1 + "<br>");
for (let i = 0; i < A1.length; i++) {
    if(A1[i] < smallestNumber) {
        smallestNumber = A1[i];
    }
}
document.write("The largest number is " + smallestNumber);

//Question10

document.write("<h3>Question10</h3>");
for (let i = 5; i <=100; i+=5) {
    document.write(i + ",");
}
