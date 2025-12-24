//Template Literals
//Declaration
const name =`Maulik Thakur`;

//Variable Interpolation
const message= `Good morning, ${name}`;
console.log(message);

//Experession inside literals
let a = 5 , b = 10 ;
const product = `Product is ${a*b}`;
console.log(product);

//Multi-line String
const greeting =`
Hello ${name}
Welcome to Zeta-V
`;
console.log(greeting);

//Template Literals Self Practise
//Print Welcome message using variable
const name1 = prompt("Enter the name");
console.log(`Welcome ${name1} to Zeta-V`);

//Display sum using template literals
const num1 = Number(prompt("Enter the number 1:"));
const num2 = Number(prompt("Enter the number 2:"));
const sum = `Sum is ${num1+num2}`;
console.log(sum);

//Printing multi-line message
const msg = `
Hello, Myself Maulik Thakur.
I had recently joined Zeta-V Technology,
as a Graduate Trainne and as of now, we
are working on web development learning
`;
console.log(msg);

//Using ternary(conditional statement) inside template literals
const number = 15;
const check =`${number>10?"Number>10":"Number<10"}`;
console.log(check);

//Accessing object value dynamically
const info = {
    name: "Maulik Thakur",
    role: "Trainee",
    joining_year:2025,
    working_hour:9,
    company:"Zeta-V"
};

const data = `
Hello ${info.name},Welcome to ${info.company}.
You had to work as a ${info.role} for ${info.working_hour} hours.
`;

console.log(data);


// Spread Operator(...) and Self-Practise
// Spread Operator in Array 
const arr1 = [1,2,3,4,5,6];
const arr2 = [];
const arr3 = [7,8,9,10,11,12];

//Copying array
const arr4 = [...arr1];
console.log(arr4);

//Adding elements without modifying
const arr5 = [...arr4,99];
console.log(arr5);

//Adding element at the beginning
const arr6 = [100,...arr5];
console.log(arr6);

//Merging array using spread operator
const arr7=[...arr1,...arr3];
console.log(arr7);

//Spread operator in Object
const obj1 = {
    name:"Maulik Thakur",
    role:"Trainee"
};

//Copying in object
const obj2 = {...obj1};
console.log(obj2);

//Updating property
const obj3 = {
    ...obj2,
    role:"Developer"
};
console.log(obj3);

//Adding new property
const obj4 = {
    ...obj3,
    age:22
};
console.log(obj4);

//Merging Objects
const obj5 = {
    joining_year:2025
};
const obj6 = {
    ...obj4,
    ...obj5
};
console.log(obj6);

//Updating object inside array
const new_Array = [...arr1,{...obj1}];
console.log(new_Array);


// Rest Operator(...) and Self Practise Session
// Rest operator in Function Parameter
function multiply(...values){
    return values.reduce((total,val)=>total*val,1);
}

console.log(multiply(10,20,30));

//Rest Operator in Array Destructuring
const arr = [1,2,3,4,5];
const[first,secound,...extra] = arr;
console.log(first);
console.log(secound);
console.log(extra);

// Rest Operator in Object Destructuring 
const obje1 = {
    efficient:"productive",
    accurate:"correct",
    concise:"brief",
    reliable:"dependable",
    innovative:"creative"
};

const {streamlined,precise,...more}= obje1;
console.log(streamlined);
console.log(precise);
console.log(more);

//Default Parametrer
//Basic understanding
function user(name="Guest"){
    console.log(`Hello ${name}`);  
};

user(); //This will take default parameter
user("Maulik"); //This will use passed parameter

//Default parameter with Expressions
function calculateTotal(price,tax=price*0.15){
    return price+tax;  
};
console.log(calculateTotal(1000));

//Default parameter with Arrow Function
const greet = (name = "Guest") => `Hello ${name}`;