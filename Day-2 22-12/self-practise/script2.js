console.log("Maulik Thakur");
//Grading system using conditional statement
const percentage = 55;

if (percentage >= 90 && percentage <= 100) {
  console.log("You got 10 CGPA");
} else if (percentage >= 80 && percentage <= 89) {
  console.log("You got 9 CGPA");
} else if (percentage >= 70 && percentage <= 79) {
  console.log("You got 8 CGPA");
} else if (percentage >= 60 && percentage <= 69) {
  console.log("You got 7 CGPA");
} else {
  console.log("You have CGPA below 7, focus on study");
}


//Using switch to display day of weeek
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

//Converting the if else program of even or odd to ternary
const num = 6 ;
const answer = (num%2===0) ? "Even Number" : "Odd Number";
console.log(answer)

//Looping statements
//Printing number from 1 to 10 using loop
for(let i = 1 ; i < 11 ; i++){
    console.log(i)
}

//Using while loop
let n1 = 1;
while(n1<11){
    console.log(n1);
    n1++;
}

//Using do while loop
let n2 = 1;
do{
    console.log(n2);
    n2++;
}while(n2<11);

//Printing even number from 1 to 50 using loop
for(let i = 1 ; i < 50 ; i++){
    if(i%2===0){
        console.log(i)
    }
}

//Looping through array of names
const names = ["Maulik","Sandy","Harsh","Anushka","Samrudhi","Priyal"]

//Using for..of loop
for(const name of names){
    console.log(name)
}

//Using array indexing
for(let i=0; i < names.length;i++){
    console.log(names[i])
}

//Accessing elements of objects
const user = {
    name: "Maulik",
    age: 22,
    role: "Developer"
};

for (const key in user) {
    console.log(key, user[key]);
}


//Stop loop when number is 5
for(let k = 1;k<10;k++){
    console.log(k);
    if(k===5){
        break;
    }
}

//Skip number 3 using continue
for(let j = 1;j<11;j++){
    if(j===3){
        continue;
    }
    console.log(j)
    
}

//Functions
//Function to add two numbers
function sum(a,b){
    let add = a+b;
    console.log(add);
}
sum(5,4);

//Converting above function to arrow function
const sum1 = (c,d) => c+d ;
console.log(sum1(5,5));

//Function to check even or odd number
function even_oddChecker(a){
    if(a%2===0){
        console.log(a,"is even");
    }else{
        console.log(a,"is odd")
    }
}

even_oddChecker(8);

// Arrow function to find the square
const sqr = (a) => a*a;
let value = Number(prompt("Enter the number"));
console.log(sqr(value));

// //Login Status Checker 
function login_status_Checker(email,password){
    if(email==="admin@gmail.com" && password==="1234"){
        return "Login Success";
    }else{
        return "Invalid Credentials";
    }
}

let email = prompt("Enter the email:");
let password = Number(prompt("Enter the password"))
console.log(login_status_Checker(email,password));

// Shopping Cart Total
function cart_Manager(price, quantity) {
    let total = price * quantity;
    return total < 1000 ? total * 1.10 : total;
}

let cp = Number(prompt("Enter the price:"));
let amt = Number(prompt("Enter the quantity:"));
console.log(cart_Manager(cp, amt));

// Even number generator
function even_generator(a){
    for(let i=1;i<=a;i++){
        if(i%2===0){
            console.log(i)
        }
    }
}

let num1 = Number(prompt("Enter the value upto which want to generate even number:"))
even_generator(num1);

//User Role Message
function accessibility(role){
    if(role==="admin"){
        return "Full Access";
    }else if(role==="user"){
        return "Limited Access";
    }else if(role==="guest"){
        return "Read only";
    }else{
        return "Invalid Role";
    }
}

let designation = prompt("Enter your role :");
console.log(accessibility(designation));

// Password Strength Checker
function password_strength_Checker(password){
    if(password.length>=10){
        return "Strong";
    }else if(password.length<10 && password.length>=6){
        return "Medium";
    }else if(password.length <6){
        return "Weak";
    }
}

let credientials = prompt("Enter the password:");
console.log(password_strength_Checker(credientials));