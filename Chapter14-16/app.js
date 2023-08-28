//Question1
let student = [];
//Question2
let students = {};
//Question3
let str_Array = ["a","b","c","d"];
//Question4
let num_Array = [1,2,3,4,5];
//Question5
let boolean_Array = [true,false];
//Question6
let mixed_Array = ["abc","def",20,30,true];
//Question7
document.write("<h3>Qualifications</h3>");
let qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"];
document.write("1) ",qualifications[0],"<br>");
document.write("2) ",qualifications[1],"<br>");
document.write("3) ",qualifications[2],"<br>");
document.write("4) ",qualifications[3],"<br>");
document.write("5) ",qualifications[4],"<br>");
document.write("6) ",qualifications[5],"<br>");
document.write("7) ",qualifications[6],"<br>");
document.write("8) ",qualifications[7],"<br>");
document.write("<hr>");

//Question8

document.write("<h3>Question8</h3>");
var student_Names = ["Michael","John","Tony"];
var student_Score = [320,230,480];
var total_Marks = 500;
var percentage1 = (student_Score[0]/total_Marks) * 100;
document.write("Score of " + student_Names[0] + " is " + student_Score[0] + "." + " Percentage: " + percentage1 + "%");
document.write("<br>");
var percentage2 = (student_Score[1]/total_Marks) * 100;
document.write("Score of " + student_Names[1] + " is " + student_Score[1] + "." + " Percentage: " + percentage2 + "%");
document.write("<br>");
var percentage3 = (student_Score[2]/total_Marks) * 100;
document.write("Score of " + student_Names[2] + " is " + student_Score[2] + "." + " Percentage: " + percentage3 + "%");
document.write("<br><hr>");

//Question9

document.write("<h3>Question9</h3>");
let colors = ["Black","Blue","White",];
document.write(colors + "<br>");
//9a
colors.unshift(prompt("Which color you want to add at the beginning of array?"));
document.write(colors + "<br>");
//9b
colors[colors.length] = prompt("Which color you want to add at the end of array?");
document.write(colors + "<br>");
//9c
colors.unshift(prompt("Add color at the beginning again?"),prompt("Add one more color at the beginning again?"));
document.write(colors + "<br>");
//9d
colors.shift();
document.write(colors + "<br>");
//9e
colors.pop();
document.write(colors + "<br>");
//9f
let index_number = prompt("At which index you want to add color?");
let color_name = prompt(`Write the color name you want to add at ${index_number}?`);
colors.splice(index_number,0,color_name);
document.write(colors + "<br>");
//9g
let delete_index = prompt("At which index you want to delete the colors?");
let color_quantity = prompt("How many colors you want to delete?");
colors.splice(delete_index,color_quantity);
document.write(colors + "<br><hr>");

//Question10

document.write("<h3>Question10</h3>");
let scores = [320,230,480,120];
document.write("Scores of Students: " + scores + "<br>");
let sorted_Score = scores.sort();
document.write("Ordered Scores of Students: " + sorted_Score + "<br><hr>");

//Question11

document.write("<h3>Question11</h3>");
let cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
let selected_Cities = cities.slice(2,4);
document.write("Cities List: " + "<br>");
document.write(cities + "<br>");
document.write("Selected Cities List: " + "<br>");
document.write(selected_Cities + "<br><hr>");

//Question12

document.write("<h3>Question12</h3>");
var arr = ["This","is","my","cat"];
var string = arr.join(" ");
document.write("Array: " + "<br>");
document.write(arr + "<br>");
document.write("String: " + "<br>");
document.write(string + "<br><hr>");

//Question13

document.write("<h3>Question13</h3>");
let devices = [];
devices.push("Keyboard");
devices.push("Mouse");
devices.push("Printer");
devices.push("Monitor");
document.write("Devices: " + "<br>");
document.write(devices + "<br><br>");
let device1 = devices.shift();
let device2 = devices.shift();
let device3 = devices.shift();
let device4 = devices.shift();
document.write("Out: " + "<br>");
document.write(device1 + "<br>");
document.write("Out: " + "<br>");
document.write(device2 + "<br>");
document.write("Out: " + "<br>");
document.write(device3 + "<br>");
document.write("Out: " + "<br>");
document.write(device4 + "<br><hr>");

//Question14

document.write("<h3>Question14</h3>");
let accessories = [];
accessories.push("Keyboard");
accessories.push("Mouse");
accessories.push("Printer");
accessories.push("Monitor");
document.write("Devices: " + "<br>");
document.write(accessories + "<br><br>");
let accessories1 = accessories.pop();
let accessories2 = accessories.pop();
let accessories3 = accessories.pop();
let accessories4 = accessories.pop();
document.write("Out: " + "<br>");
document.write(accessories1 + "<br>");
document.write("Out: " + "<br>");
document.write(accessories2 + "<br>");
document.write("Out: " + "<br>");
document.write(accessories3 + "<br>");
document.write("Out: " + "<br>");
document.write(accessories4 + "<br><hr>");

//Question15

document.write("<h3>Question15</h3>");
let phone = ["Apple","Samsung","Motorola","Nokia","Sony","Huawei"];
document.write("<select id = phoneSelect>");
document.write(`<option value = apple >${phone[0]}</option>`);
document.write(`<option value = samsung >${phone[1]}</option>`);
document.write(`<option value = motorola >${phone[2]}</option>`);
document.write(`<option value = nokia >${phone[3]}</option>`);
document.write(`<option value = sony >${phone[4]}</option>`);
document.write(`<option value = huawei >${phone[5]}</option>`);
document.write("</select>");

