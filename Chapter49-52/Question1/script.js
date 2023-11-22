let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let email = document.getElementById("email-input");
let password = document.getElementById("password");
let cpassword = document.getElementById("cpassword");
let signupButton = document.querySelector("#signup-btn");
let signupForm = document.querySelector(".signup-form");
let h1 = document.querySelector(".heading");
let container = document.querySelector(".container");
let dataContainer = document.querySelector(".data-container");
console.log(dataContainer);


signupForm.addEventListener("submit",function(e) {
    e.preventDefault()
    let fNameInput = `${firstName.placeholder}:- ${firstName.value}`;
    let lNameInput = `${lastName.placeholder}:- ${lastName.value}`;
    let emailInput = `${email.placeholder}:- ${email.value}`;
    let passwordInput = `${password.placeholder}:- ${password.value}`;
    let cPasswordInput = `${cpassword.placeholder}:- ${cpassword.value}`;
    let submittedData = [];
    submittedData.push(fNameInput,lNameInput,emailInput,passwordInput,cPasswordInput);
    console.log(submittedData);
    if((!fNameInput)||(!lNameInput)||(!emailInput)||(!password.value)||(!cpassword.value)) {
        return alert("Please Complete All the Input Fields!")
    } else if(password.value != cpassword.value) {
        return alert("Password and Confirm Password are not matching!");
    } else if(password.value.length < 8) {
        return alert("Password should contain minimum 8 characters!");
    } else {
        alert("User Sign Up Successfully!");
        container.style.display = 'none';
        dataContainer.style.display = 'block';
        submittedData.forEach((data) => {
            dataContainer.innerHTML += 
            `<label>
            <span>${data}</span>
            </label><br/>` 
        })
    }
})
