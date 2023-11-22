let students = [];
let editingIndex = null;  // Track the index of the row being edited
let tableBody = document.querySelector("#tbody-details");
console.log(tableBody);

function addStudent() {
    let nameInput = document.getElementById("name");
    console.log(nameInput);
    let classInput = document.getElementById("class");
    console.log(classInput);

    let studentName = nameInput.value;
    console.log(studentName);
    let studentClass = classInput.value;
    console.log(studentClass);

    if(editingIndex !== null) {
         // Update existing student details if in editing mode
        students[editingIndex] = {name:studentName,class:studentClass};
        editingIndex = null; // Exit editing mode
        console.log(students);
    } else {
        // Add a new student
        students.push({name:studentName,class:studentClass});
        console.log(students);
    }
    updateTable();
    clearForm();
}
function updateTable() {
    tableBody.innerHTML = "";
    students.forEach((student,index) => {
        let row = tableBody.insertRow();
        row.insertCell(0).textContent = index;
        row.insertCell(1).textContent = student.name;
        row.insertCell(2).textContent = student.class;

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", function() {
            deleteStudent(index);
        });

        let editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.addEventListener("click", function() {
            editStudent(index);
        });

        row.insertCell(3).appendChild(deleteBtn);
        row.insertCell(4).appendChild(editBtn);
    });
}
function deleteStudent(index) {
    students.splice(index,1);
    updateTable();
    // Update index numbers after deletion
    for(let i = 0; i < students.length; i++) {
        students[i].index = i;
    }
}
function editStudent(index) {
    let student = students[index];
    document.getElementById("name").value = student.name;
    document.getElementById("class").value = student.class;

    //Enter editing mode
    editingIndex = index;
    //Change "Add Student" button to "Update"
    document.querySelector("button").innerText = "Update";
}
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("class").value = "";
    //Reset to "Add Student" Button
    document.querySelector("button").innerText = "Add Student";
}