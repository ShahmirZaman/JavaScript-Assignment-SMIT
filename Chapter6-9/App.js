//Question1

document.write("<h2>Question1</h2>");
document.write("<br>");
let num = 10;
//console.log(num);                                  //a
document.write("Result: ");
document.write("<br>");
document.write("The value of a is: ",num);
document.write("<br><br>");
++num;
//console.log(num);                                         //++a
document.write("The value of ++a is: ",num);
document.write("<br>");
document.write("Now the value of a is: ",num);
document.write("<br><br>");
document.write("The value of a++ is: ",num); 
document.write("<br>");
num++;
//console.log(num);                                         //a++
document.write("Now the value of a is: ",num); 
document.write("<br><br>");
--num;
//console.log(num);                                     //--a
document.write("The value of --a is: ",num); 
document.write("<br>");
document.write("Now the value of a is: ",num); 
document.write("<br><br>");
document.write("The value of a-- is: ",num); 
document.write("<br>");
num--;
//console.log(num);                                     //a--
document.write("The value of a is: ",num); 
document.write("<br><hr>");

//Question2

document.write("<h2>Question2</h2>");
document.write("<br>");

var a = 2;
document.write("a is: ",a);
document.write("<br>");

var b = 1;
document.write("b is: ",b);
document.write("<br>");

            //1  -  0  +  1  + 1
var result = --a - --b + ++b + b--;
document.write("Result is: ",result);
document.write("<br><hr>");

// console.log(result);
// result = 1 + ++b
// console.log(result);
// result = 2 + b--;
// console.log(result);


//Question3

document.write("<h2>Question3</h2>");
document.write("<br>");

var userName = prompt("Enter your name: ");
document.write("Hello ",userName);
document.write("<br><hr>");


//Question4

document.write("<h2>Question4/5</h2>");
document.write("<br>");

var question = "Enter Number ?";
var defaultAnswer = 5;
var userNumber = +prompt(question, defaultAnswer);
let i = 1;
if(userNumber === defaultAnswer) {
    for(let i = 1; i <= 10; i++) {
        document.write(userNumber," x ",i," = ",i*userNumber)
        document.write("<br>")
    }
}
else {
    for(let i = 1; i <= 10; i++) {
        document.write(userNumber," x ",i," = ",i*userNumber)
        document.write("<br>")
    }

}
// console.log(userNumber);

//Question6

document.write("<h2>Question6</h2>");
document.write("<br>");

let subject1 = prompt("Enter the first subject name:");
console.log("First Subject: ",subject1);
document.write("First Subject: ",subject1);
document.write("<hr>");

let subject2 = prompt("Enter the second subject name:");
console.log("Second Subject: ",subject2);
document.write("Second Subject: ",subject2);
document.write("<hr>");

let subject3 = prompt("Enter the third subject name:");
console.log("Third Subject: ",subject3);
document.write("Third Subject: ",subject3);
document.write("<hr>");

let totalMarks = 100;

let obtainedMarksSubject1 = +prompt(`Enter the ${subject1} marks out of 100:`);
console.log(`${subject1} Obtained Marks: `,obtainedMarksSubject1);
document.write(`${subject1} Obtained Marks: `,obtainedMarksSubject1);
document.write("<hr>");

let obtainedMarksSubject2 = +prompt(`Enter the ${subject2} marks out of 100:`);
console.log(`${subject2} Obtained Marks: `,obtainedMarksSubject2);
document.write(`${subject2} Obtained Marks: `,obtainedMarksSubject2);
document.write("<hr>");

let obtainedMarksSubject3 = +prompt(`Enter the ${subject3} marks out of 100:`);
console.log(`${subject3} Obtained Marks: `,obtainedMarksSubject3);
document.write(`${subject3} Obtained Marks: `,obtainedMarksSubject3);
document.write("<hr>");

let totalMarksAllSubjects = totalMarks + totalMarks + totalMarks;
console.log("Total Marks All Subjects: ",totalMarksAllSubjects);
document.write("Total Marks All Subjects: ",totalMarksAllSubjects);
document.write("<hr>");

let totalObtainedMarksAllSubjects = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;
console.log("Total Obtained Marks: ",totalObtainedMarksAllSubjects);
document.write("Total Obtained Marks: ",totalObtainedMarksAllSubjects);
document.write("<hr>");

let percentageSubject1 = (obtainedMarksSubject1 * 100)/ 100;
console.log(`${subject1} Percentage: `,percentageSubject1,"%");
document.write(`${subject1} Percentage: `,percentageSubject1,"%");
document.write("<hr>");

let percentageSubject2 = (obtainedMarksSubject2 * 100)/ 100;
console.log(`${subject2} Percentage: `,percentageSubject2,"%");
document.write(`${subject2} Percentage: `,percentageSubject2,"%");
document.write("<hr>");

let percentageSubject3 = (obtainedMarksSubject3 * 100)/ 100;
console.log(`${subject3} Percentage: `,percentageSubject3,"%");
document.write(`${subject3} Percentage: `,percentageSubject3,"%");
document.write("<hr>");

let totalPercentage = (percentageSubject1 + percentageSubject2 + percentageSubject3)/3;
console.log("Total Percentage: ",totalPercentage,"%");
document.write("Total Percentage: ",totalPercentage,"%");
document.write("<hr>");










