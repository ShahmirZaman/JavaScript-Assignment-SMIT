//Question1 
// document.write("<h3>Question1</h3>");
// let firstName = prompt("Enter your first name: ");
// let lastName = prompt("Enter your last name: ");
// let fullName = firstName + " " + lastName;
// document.write(`Hello ${fullName} <hr>`);

//Question2
// document.write("<h3>Question2</h3>");
// let favPhone = prompt("Enter your favourite mobile phone model: ");
// document.write(`My favourite phone is: ${favPhone} <br>`);
// document.write(`Length of string: ${favPhone.length} <hr>`);

//Question3
// document.write("<h3>Question3</h3>");
// let word = "Pakistani";
// let indexWord = word.indexOf("n");
// document.write(`String: ${word} <br> Index of 'n': ${indexWord} <hr>`);

//Question4
// document.write("<h3>Question4</h3>");
// let word1 = "Hello World";
// let indexWord1 = word1.lastIndexOf("l")
// document.write(`String: ${word1} <br> Index of 'l': ${indexWord1} <hr>`);

//Question5
// document.write("<h3>Question5</h3>");
// let word2 = "Pakistani";
// let charAtWord = word2.charAt(3);
// document.write(`String: ${word2} <br> Character at index 3: ${charAtWord} <hr>`);

//Question6
// document.write("<h3>Question6</h3>");
// let firstName1 = prompt("Enter your first name: ");
// let lastName1 = prompt("Enter your last name: ");
// firstName1 = firstName1 + " ";
// let fullName1 = firstName1.concat(lastName1);
// document.write(`Hello ${fullName1} <hr>`);

// Question7
// document.write("<h3>Question7</h3>");
// let text = "Hyderabad";
// let textReplace = text.replace("Hyder","Islam");
// document.write(`City: ${text} <br> After replacement: ${textReplace} <hr>`);

// Question8
// document.write("<h3>Question8</h3>");
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var messageReplace = message.replace(/and/g,"&");
// document.write(`Before replacement: ${message} <br> After replacement: ${messageReplace} <hr>`);

// Question9
// document.write("<h3>Question9</h3>");
// let value1 = "476";
// let value1Type = typeof(value1);
// let value1ToNumber = Number(value1);
// let value1ToNumberType = typeof(value1ToNumber);
// document.write(`Value: ${value1} <br> Type: ${value1Type} <br> Value: ${value1ToNumber} <br> Type: ${value1ToNumberType} <hr>`);

// Question10
// document.write("<h3>Question10</h3>");
// let userInput = prompt("Enter any word: ");
// let userInputToUpperCase = userInput.toUpperCase();
// document.write(`User input: ${userInput} <br> Uppercase: ${userInputToUpperCase} <hr>`);

// Question11
// document.write("<h3>Question11</h3>");
// let userInput1 = prompt("Enter any word: ");
// let userInputToTitleCase = userInput1.slice(0,1).toUpperCase() + userInput1.slice(1).toLowerCase();
// document.write(`User input: ${userInput1} <br> Title case: ${userInputToTitleCase} <hr>`);

// Question12
// document.write("<h3>Question12</h3>");
// var num = 35.36;
// var numWithOutDecimal = num.toString().replace(".","");
// document.write(`Number: ${num} <br> Result: ${numWithOutDecimal} <hr>`);

// Question13
// document.write("<h3>Question13</h3>");
// let userName = prompt("Enter a username: ").toLowerCase();
// let characterFound = true;
// for (let i = 0; i < userName.length; i++) {
//     let charCode = userName.charCodeAt(i);
//     if(charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//         characterFound = false;
//         break;
//     }
// }
// if(!characterFound) {
//     alert(`Please enter a valid username \n Prevent this page from creating additional dialogs`);
// }
// else {
//     alert(`username is valid: ${userName}`);
// }

// Question14
// document.write("<h3>Question14</h3>");
// let A = ["cake","apple pie","cookie","chips","patties"];
// let userSearch = prompt("Welcome ABC Bakery.What do you want to order sir/ma'am?");
// userSearch = userSearch.toLowerCase();
// let found = false;
// let itemIndex;
// for (let i = 0; i < A.length; i++) {
//     if(A[i].toLowerCase() === userSearch) {
//         found = true;
//         itemIndex = i;
//         break;
//     }
// }
// if(found) {
//     alert(`${userSearch} is available at index${itemIndex} in our bakery`);
// }
// else {
//     alert(`We are sorry.${userSearch} is not available in our bakery`)
// }

// Question15
// document.write("<h3>Question15</h3>");
var password;
    do{
        password = prompt("Enter your password: ");
        var hasAlphabet = false;
        var hasNumber = false;
        if(password.length >=6 && isNaN(password.charAt(0))) {
            for (let i = 0; i < password.length; i++) {
                var charCode = password.charcodeAt(i);
                if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
                    hasAlphabet = true;
                }
                else if (charCode >= 48 && charCode <= 57) {
                    hasNumber = true;
                }
            }
            if(hasAlphabet && hasNumber) {
                break;
            }
        }
        alert("Invalid password.Please enter a valid password that meets the requirements.");    
    } while(true);
    alert("Password is valid: " + password);
    
// Question16
// document.write("<h3>Question16</h3>");
// var university = "University of Karachi";
// var universityArray = university.split("");
// for (let i = 0; i < universityArray.length; i++) {
//     document.write(`${universityArray[i]} <br>`);    
// }
// document.write("<hr>");

// Question17
// document.write("<h3>Question17</h3>");
// let userInput2 = prompt("Enter any word: ");
// let userInput2Index = userInput2.indexOf("n");
// let userInput2CharAt = userInput2.charAt(userInput2Index);
// document.write(`User input: ${userInput2} <br> Last character of input: ${userInput2CharAt} <hr>`);

// Question18
// document.write("<h3>Question18</h3>");
// let text = "The quick brown fox jumps over the lazy dog";
// let textToLC = text.toLowerCase();
// let wordToSearch = "the";
// let words = textToLC.split(" ");
// let count = 0;
// for (let i = 0; i < words.length; i++) {
//     if(words[i] === wordToSearch) {
//         count++;
//     }
// }
// document.write(`Text: ${text}.<br> There are ${count} occurences of word '${wordToSearch}' <hr>`);
