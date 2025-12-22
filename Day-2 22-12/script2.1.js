console.log("Day 2 of JavaScript");

// Conditional Statement
// 1.check whether a person is eligible for a job
let age = Number(prompt("Enter the age:"));
if(age>=21){
    console.log("You are eligible for the job");
}else{
    console.log("Sorry you're under age for job");
}

// 2.classify an electricity bill based on units consumed
let unit = Number(prompt("Enter the consumption of electricity in unit:"));
if(unit<=100){
    console.log("Low")
}else if(unit<=300 && unit >=101){
    console.log("Medium");
}else if(unit>300){
    console.log("High")
}

// 3.Password length checker
let password = prompt("Enter the password:");
if (password.length > 8){
    console.log("Length of password is greater than 8");
}else if(password.length === 8){
    console.log("Length of password is equals to 8");
}else if(password.length < 8){
    console.log("Length of password is less than 8")
}

// Switch Statement
// 1.Using switch to display day of weeek
const day = Number(prompt("Enter the day"));
switch(day){
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thuresday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturaday")
        break;
    case 7:
        console.log("Sunday")
        break;
}

// 2.Calculator using switch statement
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the secound number:"));
let operator = prompt("Enter the operator among +,-,*,/ :");

switch(operator){
    case "+":
        console.log("The sum is",num1+num2);
        break;
    case "-":
        console.log("The substraction is1",num1-num2);
        break;
    case "*":
        console.log("The product is",num1*num2);
        break;
    case "/":
        console.log("The quotient is",num1/num2);
        break;
}


// Loop
// 1.Write a program to print numbers from 1 to 20.
for(let i = 1; i <=20;i++){
    console.log(i)
}

// 2.Write a program to print even numbers from 1 to 50.
for(let j = 1; j <=50;j++){
    if(j%2===0){
        console.log(j)
    }
}

// 3.Write a program to find the sum of the first 10 numbers.
let sum = 0 ;
for(let i=1;i<=10;i++){
    sum = sum+i;
}
console.log(sum);

// 4. Write a program to print the multiplication table of 5.
for(let j=1;j<=10;j++){
    console.log("The table of 5 *",j,"is",5*j);
}

//Normal Functions
//1.Function to add two numbers
function sum(a,b){
    let add = a+b;
    console.log(add);
}
sum(5,4);

//2.Write a function to find the square of a number.
function sqr(c){
    console.log(c*c);
}
let value = Number(prompt("Enter the number:"));
sqr(value);

// 3.Function to check even or odd number
function even_oddChecker(a){
    if(a%2===0){
        console.log(a,"is even");
    }else{
        console.log(a,"is odd")
    }
}

//Arrow Function 
// 1.Converting function of adding two numbers to arrow function
const sum1 = (c,d) => c+d ;
console.log(sum1(5,5));

// 2.find the maximum of two numbers.
const max_num = (n1,n2) => {
    const great = n1>n2? "Number 1 is maximum" : "Number 2 is maximum";
    console.log(great);
};

let number1= Number(prompt("Enter the first number:"));
let number2= Number(prompt("Enter the secound number: "));

max_num(number1,number2);   

// 3.calculate the factorial of a number.
const fact =(a)=>{
    let factorial = 1;
    for(let i = a; i>0;i--){
        factorial *=i;
    }
    return factorial;
}
console.log(fact(5));

//Callback function
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Maulik", sayGoodbye);


// 1 Program to Reverse a Number
let n1 = 12345;
let reversed = 0;

while (num > 0) {
    let digit = n1 % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(n1 / 10);
}

console.log("Reversed number:", reversed);

// 2.Program to Count Digits in a Number
let n2 = 987654;
let count = 0;

while (n2 > 0) {
    count++;
    num = Math.floor(n2 / 10);
}

console.log("Number of digits:", count);

// 3.Program to Check Palindrome Number
let num = 121;
let original = num;
let reverse = 0;

while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
}

if (original === reverse) {
    console.log("Palindrome number");
} else {
    console.log("Not a palindrome number");
}

// 4.Program to Print Fibonacci Series
let n = 10;
let a = 0, b = 1;

console.log(a);
console.log(b);

for (let i = 3; i <= n; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
}
