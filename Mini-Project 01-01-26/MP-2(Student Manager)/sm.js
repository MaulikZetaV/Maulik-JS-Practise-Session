// array to store students
var students = [
    { id: 1, name: "Ali", marks: 80 },
    { id: 2, name: "Sara", marks: 45 },
    { id: 3, name: "John", marks: 60 }
];

// function to show students on screen
function displayStudents(list) {

    var studentListDiv = document.getElementById("studentList");
    studentListDiv.innerHTML = "";

    list.map(function (student) {

        var studentDiv = document.createElement("div");
        studentDiv.className = "student";

        var statusText = "";
        var statusClass = "";

        if (student.marks >= 50) {
            statusText = "passed";
            statusClass = "passed";
        } else {
            statusText = "failed";
            statusClass = "failed";
        }

        var nameSpan = document.createElement("span");
        nameSpan.innerHTML =
            student.name + " - " + student.marks +
            ' <span class="' + statusClass + '">(' + statusText + ')</span>';

        var buttonSpan = document.createElement("span");

        var updateBtn = document.createElement("button");
        updateBtn.innerText = "Update";
        updateBtn.onclick = function () {
            updateMarks(student.id);
        };

        var deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.onclick = function () {
            deleteStudent(student.id);
        };

        buttonSpan.appendChild(updateBtn);
        buttonSpan.appendChild(deleteBtn);

        studentDiv.appendChild(nameSpan);
        studentDiv.appendChild(buttonSpan);

        studentListDiv.appendChild(studentDiv);
    });
}

// function to add new student
function addStudent() {

    var nameInput = document.getElementById("nameInput");
    var marksInput = document.getElementById("marksInput");

    var name = nameInput.value;
    var marks = marksInput.value;

    if (name === "" || marks === "") {
        alert("Please enter name and marks");
        return;
    }

    var newStudent = {
        id: Date.now(),
        name: name,
        marks: Number(marks)
    };

    var newStudentsArray = students.concat(newStudent);
    students = newStudentsArray;

    nameInput.value = "";
    marksInput.value = "";

    displayStudents(students);
}

// function to delete student
function deleteStudent(id) {

    var updatedStudents = students.filter(function (student) {
        if (student.id !== id) {
            return true;
        } else {
            return false;
        }
    });

    students = updatedStudents;
    displayStudents(students);
}

// function to show passed students
function showPassed() {

    var passedStudents = students.filter(function (student) {
        if (student.marks >= 50) {
            return true;
        } else {
            return false;
        }
    });

    displayStudents(passedStudents);
}

// function to show all students
function showAll() {
    displayStudents(students);
}

// function to update marks (immutable)
function updateMarks(id) {

    var newMarks = prompt("Enter new marks");

    if (newMarks === null || newMarks === "") {
        return;
    }

    var updatedStudents = students.map(function (student) {

        if (student.id === id) {
            var updatedStudent = {
                id: student.id,
                name: student.name,
                marks: Number(newMarks)
            };
            return updatedStudent;
        } else {
            return student;
        }
    });

    students = updatedStudents;
    displayStudents(students);
}

// first time load
displayStudents(students);
