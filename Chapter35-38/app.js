// //Question1
// document.write("<h3>Question1</h3>");
// function tellDateAndTime() {
//     var currentDate = new Date();
//     document.write(`${currentDate} <hr>`);
// };
// tellDateAndTime();

// //Question2
// document.write("<h3>Question2</h3>");
// function greeting(firstName,lastName) {
//     document.write(`Hello ${firstName} ${lastName} <hr>`);
// };
// greeting("Shahmir","Zaman");

// //Question3
// document.write("<h3>Question3</h3>");
// function add(num1,num2) {
//     return num1 + num2;
// }
// let number1 = +prompt("Enter first number: ");
// let number2 = +prompt("Enter second number: ");
// let sumQ3 = add(number1,number2);
// document.write(`The sum of ${number1} and ${number2} is: <b>${sumQ3}</b> <hr>`);

//Question4
// document.write("<h3>Question4</h3>");
// function calculator(num1,num2,operator) {
//     if(operator === "+") {
//         return num1 + num2;
//     } else if(operator === "-") {
//         return num1 - num2;
//     } else if(operator === "*") {
//         return num1 * num2;
//     } else if(operator === "/") {
//         return num1 / num2;
//     }
// }
// let num1 = +prompt("Enter 1st number: ");
// let num2 = +prompt("Enter 2nd number: ");
// let operator = prompt("Enter operator(+,-,*,/): ");
// let result = calculator(num1,num2,operator); 
// document.write(`${operator} of ${num1} and ${num2} is: <b>${result}</b> <hr>`);

//Question5
// document.write("<h3>Question5</h3>");
// function square(squareNum) {
//     return squareNum * squareNum;
// }
// let resultQ5 = square(5);
// document.write(`The square of 5 is: <b>${resultQ5}</b> <hr>`);

//Question6
// document.write("<h3>Question6</h3>");
// function factorial(num) {
//     if(num === 0 || num === 1) {
//         return 1;
//     }
//     return num * factorial(num - 1)
// }
// let resultQ6 = factorial(5);
// document.write(`The factorial of 5! is <b>${resultQ6}</b> <hr>`);

//Question7
// document.write("<h3>Question7</h3>");
// function counter() {
//     let startNum = +prompt("Enter starting number for counting: ");
//     let endNum = +prompt("Enter ending number for counting: ");
//     for(let i = startNum; i <= endNum; i++) {
//         document.write(`${i} <br>`);
//     }
// }
// counter();
// document.write("<hr>");

//Question8
document.write("<h3>Question8</h3>");
function calculateHypotenuse(base,perpendicular) {
    function calculateSquare(num) {
        return num * num;
    }
    var baseSquareValue = calculateSquare(base);
    var perpendicularSquareValue = calculateSquare(perpendicular);
    var hypotenuse = Math.sqrt(baseSquareValue + perpendicularSquareValue);
    hypotenuse = hypotenuse.toFixed(2);
    return hypotenuse;
}
let base = 5;
let perpendicular = 2;
let hypotenuse = calculateHypotenuse(base,perpendicular);
document.write(`Base: <b>${base}</b> <br> Perpendicular: <b>${perpendicular}</b> <br> Hypotenuse: <b>${hypotenuse}</b> <hr>`);

//Question9
document.write("<h3>Question9</h3>");
function areaOfRectangle(width,height) {
    let area = width * height;
    document.write(`The area of rectangle is: ${area} <hr>`);
}
let width = 5;
let height = 6;
areaOfRectangle(width,height);
areaOfRectangle(10,20);

