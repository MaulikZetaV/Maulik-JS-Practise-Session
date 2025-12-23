//Arrays
//1. Creating of array of 5 numbers
let numbers = [1,2,3,4,5];

//2.Printing element of array
console.log(numbers[0]); // First element
console.log(numbers[numbers.length-1]); //Last element

//3.Adding new element at the end
numbers.push(8);
console.log(numbers);

//4.Remove last element of array
numbers.pop();
console.log(numbers);


// Array Methods (push, pop, shift, unshift)
let arr=[];

// 1. Add 3 elements to array
arr.push("Maulik");
arr.push("MrMO");
arr.push("ZetaV");

// 2. Remove first element
arr.shift();

//3. Remove last element
arr.pop();

// 4. Print final array
console.log(arr);


// Objects
// 1. Create object student
let student = {
  name: "Sarman Thakur",
  rollNo: "467781",
  marks: "450"
};

// 2. Print all values
for(const key in student){
    console.log(student[key]);
}

// 3. Update marks
student.marks = "475";

// 4. Add new property grade
student.grade = "A+";
console.log(student);


// Array of Objects
// 1. Create array of 5 students
let students = [
  { id: 1, name: "Ram", age: 24, marks: 98 },
  { id: 2, name: "Shyam", age: 23, marks: 91 },
  { id: 3, name: "Raghu", age: 24, marks: 93 },
  { id: 4, name: "Sheetal", age: 23, marks: 45 },
  { id: 5, name: "Priya", age: 22, marks: 38 }
];

// 2. Print all student names
for(let i=0;i<students.length;i++){
    console.log(students[i].name);
}

//map()
// 1. Print student names
const student_names=students.map(students=>students.name);
console.log(student_names);

// 2. Add result: "Pass" to each student
let result = students.map(students => {
     return {
            ...students,
            result: "Pass"
  };
});

//filter()
// 1. Filter students who scored more than 60
const filtered_students = students.filter(students=>students.marks>60);
console.log(filtered_students);

// 2. Filter users age >= 24
const filteredByAge = students.filter(students=>students.age>23);
console.log(filteredByAge);

//find()
// 1. Find student by roll number
const finding = students.find(students=>students.id===4);
console.log(finding);

//reduce()
// 1. Calculate total marks of students
const total_marks = students.reduce((sum,students)=> sum+students.marks,0);
console.log(total_marks);

//Destructuring (React Props Style)
// Destructure a student object
const student ={
    name:"Maulik Thakur",
    age:23,
    course:"B.Tech",
    domain:"IT"
};

const {name:fullName,domain:fieldStudy}=student;
console.log(fullName);
console.log(fieldStudy);

// Destructure array elements
const values = [1,3,5,7];

const [one,,five]=values;
console.log(one);
console.log(five);