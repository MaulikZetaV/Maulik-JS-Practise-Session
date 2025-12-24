// Login Validation(Problem-1)
function validateLogin(email,password){
    if(email==="admin@gmail.com" && password==="1234"){
        return "Login Success";
    }else{
        return "Invalid Credentials";
    }
};

const email = prompt("Enter the email id:");
let password = prompt("Enter the password :");
console.log(validateLogin(email,password));


// Even-Odd Analyzer(PRoblem-2)
function even_odd(num){
    if(num===0){
        return "Invalid Input";
    }else if(num%2===0){
        return "Given number is even";
    }else{
        return "Given number is odd";
    }
};

let numeric_value = Number(prompt("Enter the number:"));
console.log(even_odd(numeric_value));


// Array+Loop(Problem-3)
// Create an array of numbers.
const numbers = [12,65,89,7,45,3,6,7];

// Use a loop to print each number
for(number of numbers){
    console.log(number);
}

// Print only numbers greater than 10
for(number of numbers){
    if(number>10){
        console.log(number);
    }
}

// Array of Objects + map() (Problem-4)
const user = [
  { id: 1, name: "Amit", age: 21 },
  { id: 2, name: "Neha", age: 22 }
];

const mapped = user.map(user=>user.name);
console.log(mapped);
