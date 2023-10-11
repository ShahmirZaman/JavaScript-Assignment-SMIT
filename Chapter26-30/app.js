// //Question1
// document.write("<h3>Question1</h3>");
// let positiveInteger = +prompt("Enter positive integers: ");
// document.write(`Number: ${positiveInteger} <br> Round off value: ${Math.round(positiveInteger)} <br> Floor value: ${Math.floor(positiveInteger)} <br> Ceil value: ${Math.ceil(positiveInteger)} <hr>`);

// //Question2
// document.write("<h3>Question2</h3>");
// let negativeFloatingPoint = +prompt("Enter negative integers: ");
// document.write(`Number: ${negativeFloatingPoint} <br> Round off value: ${Math.round(negativeFloatingPoint)} <br> Floor value: ${Math.floor(negativeFloatingPoint)} <br> Ceil value: ${Math.ceil(negativeFloatingPoint)} <hr>`);

// //Question3
// document.write("<h3>Question3</h3>");
// let absoluteValue = +prompt("Enter a number: ");
// let absoluteValue2 = Math.abs(absoluteValue);
// document.write(`The absolute value of ${absoluteValue} is ${absoluteValue2} <hr>`);

// Question4
// document.write("<h3>Question4</h3>");
// let diceSimulation = Math.floor(Math.random()*6) + 1;
// let diceSimulation1 = Math.floor(Math.random()*6) + 1;
// document.write(`random dice value: ${diceSimulation} <br>`);
// document.write(`random dice value: ${diceSimulation1} <hr>`);

// Question5
// document.write("<h3>Question5</h3>");
// let coin_Toss = Math.floor(Math.random()*2) + 1;
// console.log(coin_Toss);
// let toss = "Heads";
// let coin_Toss1 = Math.floor(Math.random()*2) + 1;
// let toss1 = "Tails";
// console.log(coin_Toss1);
// if(coin_Toss === 1) {
//     toss = "Tails";
//     document.write(`${coin_Toss} <br> randon coin value: ${toss} <br> <hr>`);
//     // document.write(`${coin_Toss1} <br> randon coin value: ${toss1} <hr>`);
// }
// else if(coin_Toss1 === 2) {
//     toss1 = "Heads";
//     document.write(`${coin_Toss1} <br> randon coin value: ${toss1} <br> <hr>`);
//     // document.write(`${coin_Toss} <br> randon coin value: ${toss} <hr>`);
// }

// Question6
document.write("<h3>Question6</h3>");
let randomNumber = Math.floor(Math.random()*100) + 1;
document.write(`Random number between 1 and 100: ${randomNumber}<hr>`);

// Question7
// document.write("<h3>Question7</h3>");

// Question8
document.write("<h3>Question8</h3>");
let secretNumber = Math.floor(Math.random()*10) + 1;
let userNumber = +prompt("Enter a number between 1 and 10: ");
if(userNumber === secretNumber) {
    alert("Congratulations,You Won!");
}else if((userNumber === secretNumber + 1)||(userNumber === secretNumber - 1)) {
    alert("You were so closed!")
} else {
    alert("Try Again,You lose! \n Prevent this page from creating additional dialogs..");
}
document.write(`User number: ${userNumber} <br> Secret number: ${secretNumber}`);









