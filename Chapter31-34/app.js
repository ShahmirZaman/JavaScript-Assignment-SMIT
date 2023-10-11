//Question1
document.write("<h3>Question1</h3>");
let currentDate = new Date();
document.write(`Current Date: ${currentDate} <hr>`);

//Question2
document.write("<h3>Question2</h3>");
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let month = new Date();
let getMonth = month.getMonth();
let currentMonth = months[getMonth];
document.write(`Current Month: ${currentMonth} <hr>`);

//Question3
document.write("<h3>Question3</h3>");
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = new Date();
let getDay = day.getDay();
let currentDay = days[getDay];
document.write(`Current Day: ${currentDay} <hr>`);
alert(`Today is ${currentDay.slice(0,3)}`);

//Question4
document.write("<h3>Question4</h3>");
if((currentDay === "Sunday")||(currentDay === "Saturday")) {
    alert(`It's Fun day`);
    document.write(`It's Fun day <hr>`);
} else {
    alert(`It's working day`);
    document.write(`It's working day <hr>`);
}

//Question5
document.write("<h3>Question5</h3>");
let date = new Date();
let getDate = date.getDate();
if(getDate < 16) {
    alert("First fifteen days of the month");
    document.write(`First fifteen days of the month <hr>`);
} else {
    alert("Last days of the month");
    document.write(`Last days of the month <hr>`);
}

//Question6
document.write("<h3>Question6</h3>");
let getTimeSince1970 = currentDate.getTime();
let minutesSince1970 = getTimeSince1970/60000;
document.write(`Current Date: ${currentDate} <br>`);
document.write(`Elapsed Milliseconds since January 1, 1970: ${getTimeSince1970} milliseconds <br>`);
document.write(`Elapsed Minutes since January 1, 1970: ${minutesSince1970.toFixed(3)} minutes <hr>`);




