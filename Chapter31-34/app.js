// //Question1
// document.write("<h3>Question1</h3>");
// let currentDate = new Date();
// document.write(`Current Date: ${currentDate} <hr>`);

// //Question2
// document.write("<h3>Question2</h3>");
// let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// let month = new Date();
// let getMonth = month.getMonth();
// let currentMonth = months[getMonth];
// document.write(`Current Month: ${currentMonth} <hr>`);

// //Question3
// document.write("<h3>Question3</h3>");
// let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// let day = new Date();
// let getDay = day.getDay();
// let currentDay = days[getDay];
// document.write(`Current Day: ${currentDay} <hr>`);
// alert(`Today is ${currentDay.slice(0,3)}`);

// //Question4
// document.write("<h3>Question4</h3>");
// if((currentDay === "Sunday")||(currentDay === "Saturday")) {
//     alert(`It's Fun day`);
//     document.write(`It's Fun day <hr>`);
// } else {
//     alert(`It's working day`);
//     document.write(`It's working day <hr>`);
// }

// //Question5
// document.write("<h3>Question5</h3>");
// let date = new Date();
// let getDate = date.getDate();
// if(getDate < 16) {
//     alert("First fifteen days of the month");
//     document.write(`First fifteen days of the month <hr>`);
// } else {
//     alert("Last days of the month");
//     document.write(`Last days of the month <hr>`);
// }

// //Question6
// document.write("<h3>Question6</h3>");
// let getTimeSince1970 = currentDate.getTime();
// let minutesSince1970 = getTimeSince1970/60000;
// document.write(`Current Date: ${currentDate} <br>`);
// document.write(`Elapsed Milliseconds since January 1, 1970: ${getTimeSince1970} milliseconds <br>`);
// document.write(`Elapsed Minutes since January 1, 1970: ${minutesSince1970.toFixed(3)} minutes <hr>`);

// //Question7
// document.write("<h3>Question7</h3>");
// let hours = new Date();
// let getHours = hours.getHours();
// if((getHours >= 0)&&(getHours <= 12)) {
//     alert("It's AM");
//     document.write(`It's AM`);
// } else {
//     alert("It's PM");
//     document.write(`It's PM`);
// }

// //Question8
// document.write("<h3>Question8</h3>");
// let laterDate = new Date("December 31, 2020");
// document.write(`Later Date: ${laterDate} <hr>`);

// //Question9
// document.write("<h3>Question9</h3>");
// let ramadanDate = new Date("March 23, 2023");
// let calculateDate = currentDate.getTime() - ramadanDate.getTime();
// let daysPassed = Math.floor(calculateDate / (1000*60*60*24));
// document.write(`${daysPassed} days have passed since 1st Ramadan, 2023 <hr>`);

//Question10
document.write("<h3>Question10</h3>");
const referenceDate = new Date("December 05, 2015 22:50:16");
const beginningDate = new Date("January 01, 2015 12:50:16");
let timeDiff = referenceDate.getTime() - beginningDate.getTime();
const elapsedSeconds = Math.floor(timeDiff/1000);
document.write(`On reference date ${referenceDate}, <br> ${elapsedSeconds} seconds had passed since beginning of 2015 <hr>`);

//Question11
document.write("<h3>Question11</h3>");
let currentDate1 = new Date();
let currHours = currentDate1.getHours();
document.write(`current date: ${currentDate1} <br>`);
currentDate1.setHours(currHours - 1);
document.write(`1 hour ago, it was ${currentDate1} <hr>`);

//Question12
document.write("<h3>Question12</h3>");
let currentDate2 = new Date();
let fullYear = currentDate2.getFullYear();
document.write(`current date: ${currentDate2} <br>`);
currentDate2.setFullYear(fullYear - 100);
document.write(`100 years back, it was ${currentDate2} <hr>`);

//Question13
// document.write("<h3>Question13</h3>");
// let userAge = +prompt("Enter your age: ");
// let date = new Date();
// let fullYear1 = date.getFullYear();
// let dateOfBirth = fullYear1 - userAge;
// document.write(`Your age is ${userAge} <br> Your Birth year is ${dateOfBirth} <hr> `);

//Question14
document.write("<h3>Question14</h3>");
document.write("<h2>K-Electric Bill</h2>");
let customerName = prompt("Enter your name: ");
let months1 = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let month1 = new Date();
let getMonth1 = month1.getMonth();
let currentMonth1 = months1[getMonth1];
let noOfUnits = +prompt("Enter no. of units: ");
let chargesPerUnits = 16;
let netAmountPayable = noOfUnits*chargesPerUnits;
let latePaymentSurcharge = 350;
let grossAmountPayable = netAmountPayable + latePaymentSurcharge;
document.write(
    `Customer Name: <b>${customerName}</b> <br> 
    Month: <b>${currentMonth1}</b> <br>
    Number of units: <b>${noOfUnits}</b> <br>
    Charges per unit: <b>${chargesPerUnits}</b> <br><br>
    Net Amount Payable(within Due Date): <b>${netAmountPayable}</b> <br>
    Late Payment Surcharge: <b>${latePaymentSurcharge}</b> <br>
    Gross Amount Payable(after Due Date): <b>${grossAmountPayable}</b> <hr>
`);
