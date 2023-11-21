const studentData = [
    {
        name:"Jhone",
        class:10,
    },
    {
        name:"Doe",
        class:9,
    },
    {
        name:"Mark",
        class:10,
    },
    {
        name:"James",
        class:8,
    },
];

function addRows() {
    let tableBody = document.querySelector(".students-data");
    console.log(tableBody);
    studentData.forEach((student) => {
        let row = tableBody.insertRow();
        row.insertCell(0).textContent = studentData.indexOf(student);
        row.insertCell(1).textContent = student.name;
        row.insertCell(2).textContent = student.class;
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click",function () {
            deleteRow(row);
        });
        row.insertCell(3).appendChild(deleteBtn);
    })
}
function deleteRow(row) {
          row.parentNode.removeChild(row);
        }
addRows();

































// document.addEventListener("DOMContentLoaded", function () {
//     // Sample data for student records
//     var studentData = [
//       { id: 1, name: "John Doe", grade: "A" },
//       { id: 2, name: "Jane Smith", grade: "B" },
//       // Add more student records as needed
//     ];
  
//     // Function to add rows to the table
//     function addRows() {
//       var tableBody = document.querySelector("#studentTable tbody");
  
//       studentData.forEach(function (student) {
//         var row = tableBody.insertRow();
//         row.insertCell(0).textContent = student.id;
//         row.insertCell(1).textContent = student.name;
//         row.insertCell(2).textContent = student.grade;
  
//         var deleteButton = document.createElement("button");
//         deleteButton.textContent = "Delete";
//         deleteButton.addEventListener("click", function () {
//           deleteRow(row);
//         });
  
//         row.insertCell(3).appendChild(deleteButton);
//       });
//     }
  
//     // Function to delete a row
//     function deleteRow(row) {
//       row.parentNode.removeChild(row);
//     }
  
//     // Call the function to add initial rows
//     addRows();
//   });
  