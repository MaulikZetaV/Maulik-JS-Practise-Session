// Printing Student Details
// Storing Name, Age, Mobile in Variable and printing all values in console.
// String output using variables
let name = "Maulik Thakur";
let age = 22;
let course = "B.Tech";
let passingYear = 2025;
let mobileNumber = 9584658563;

console.log(
  "Student Detail are:\nName of the Student:",
  name,
  "\nAge is",
  age,
  "\nCourse:",
  course,
  "\nPassing Year:",
  passingYear,
  "\nContact Number:",
  mobileNumber
);

//Swapping Two Numbers
//Swapping two numbers without using third variable
var a = 54;
var b = 65;

a = a + b;
b = a - b;
a = a - b;
console.log("a =", a);
console.log("b =", b);

//Even or Odd
const x = prompt("Enter the number to be checked");
if (x % 2 === 0) {
  console.log("Given number is even");
} else {
  console.log("Given number is odd");
}

//Variable creation using var,let and const.
var number = 0;
let $age = 25;
const $name = "Maulik Thakur";

//Creating One variable of each JavaScript Datatype
let Name = "Ravi Gupta"; //string datatype
const rank = 5; //Number
const isAdult = true; //Boolean7
let a1; //undefined
let a2 = null; //null value

//Printing datatype using the typeof operator
console.log(typeof Name);
console.log(typeof rank);
console.log(typeof isAdult);
console.log(typeof a1);
console.log(typeof a2);

//Understanding of loose and strict assignment operator
let num = 10;
if (num == "10") {
  console.log("They are equal");
} else {
  console.log("Not equal");
}

let num1 = 20;
if (num1 === "20") {
  console.log("They are equalll");
} else {
  console.log("Not equalll");
}

let k1 = true;
if (k1 === 1) {
  console.log("Strict equal");
} else if (k1 == "1") {
  console.log("Loose equal");
} else {
  console.log("Both are untrue");
}

//Artimetic Operation
const x1 = Number(prompt("Enter the first number"));
const x2 = Number(prompt("Enter the secound number"));
const sum = x1 + x2;
console.log("Sum:", sum);
console.log("Difference:", x1 - x2);
console.log("Product:", x1 * x2);
console.log("Division:", x1 / x2);

//Conditional Statements
//Check whether a student is pass or fail
let marks = Number(prompt("Enter the student marks:"));
if (marks >= 35) {
  console.log("Student is passed because obtained,", marks, "marks");
} else {
  console.log("Student is failed because obtained", marks, "marks");
}

//Check wheather a number is positive or negative
let number1 = Number(prompt("Enter the number"));
if (number1 < 0) {
  console.log("Number is Negative");
} else {
  console.log("Number is Positive");
}

//Find greater number between two numbers
let firstNumber = Number(prompt("Enter the first number:"));
let secoundNumber = Number(prompt("Enter secound number:"));
if (firstNumber > secoundNumber) {
  console.log(firstNumber, "is greater than", secoundNumber);
} else if (firstNumber === secoundNumber) {
  console.log("Both are equal");
} else {
  console.log(secondNumber, "is greater than", firstNumber);
}

//Find given year is leap year or not
const $year = Number(prompt("Enter the year:"));
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}
