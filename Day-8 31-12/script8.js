// Complete Revision Session of JavaScript

// Q1. Print "Hello JavaScript" in the console
console.log("Hello JavaScript");

// Q2. Print sum, difference, multiplication, and division of two numbers
const n1 = Number(prompt("Enter the first number"));
const n2 = Number(prompt("Enter the second number"));

console.log(`Sum is ${n1 + n2}`);
console.log(`Difference is ${n1 - n2}`);
console.log(`Multiplication is ${n1 * n2}`);
console.log(`Division is ${n1 / n2}`);

// Q3. Check the output
console.log(typeof "10"); // string
console.log(typeof 10);   // number

// Q4. Predict the output
console.log(5 == "5");   // true (type coercion)
console.log(5 === "5");  // false (strict comparison)

// Q5. Check if input value is strictly equal to number 10
const value = Number(prompt("Enter a value"));
if (value === 10) {
    console.log("Value is strictly equal to 10");
} else {
    console.log("Value is not strictly equal to 10");
}

// Q6. Check whether a number is positive, negative, or zero
const num1 = Number(prompt("Enter the number to be checked"));
if (num1 > 0) {
    console.log(`${num1} is positive`);
} else if (num1 < 0) {
    console.log(`${num1} is negative`);
} else {
    console.log("Number is zero");
}

// Q7. Grading system
const marks = Number(prompt("Enter marks"));
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// Q8. Print day name using switch
const day = Number(prompt("Enter day number (1-7)"));
switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid day");
}

// Q9. Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Q10. Print all even numbers between 1 and 50
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

// Q11. Reverse a string using a loop
const str = "JavaScript";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log(reversed);

// Q12. Stop a loop when number reaches 5
for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    console.log(i);
}

// Q13. Function to add two numbers
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));

// Q14. Arrow function to check even or odd
const isEven = (num) => num % 2 === 0 ? "Even" : "Odd";
console.log(isEven(4));

// Q15. Function that returns square of a number
function square(num) {
    return num * num;
}
console.log(square(6));

// Q16. Function that accepts username
function welcomeUser(name) {
    return `Welcome ${name}`;
}
console.log(welcomeUser("Amit"));

// Q17. Array of 5 numbers
const numbers = [2, 5, 8, 12, 20];
console.log(numbers);

// Q18. Double all numbers using map()
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// Q19. Get numbers greater than 10 using filter()
const greaterThanTen = numbers.filter(num => num > 10);
console.log(greaterThanTen);

// Q20. Calculate sum using reduce()
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// Q21. Find a specific element
console.log(numbers.includes(8));




const users = [
  { id: 1, name: "Amit", age: 20 },
  { id: 2, name: "Neha", age: 22 },
  { id: 3, name: "Ravi", age: 17 }
];

// Q22. Print all user names
users.forEach(user => console.log(user.name));

// Q23. Filter users age ≥ 18
const adults = users.filter(user => user.age >= 18);
console.log(adults);

// Q24. Find user with id 2
const userId2 = users.find(user => user.id === 2);
console.log(userId2);

// Q25. Update age of user with id 1 (immutably)
const updatedUsers = users.map(user =>
    user.id === 1 ? { ...user, age: 21 } : user
);
console.log(updatedUsers);

// Q26. Remove user with id 3
const remainingUsers = users.filter(user => user.id !== 3);
console.log(remainingUsers);

// Q27. Create product object
const product = {
    name: "Laptop",
    price: 60000,
    category: "Electronics"
};

// Q28. Access and update properties
console.log(product.name);
product.price = 55000;
console.log(product);

// Q29. Loop through object keys and values
for (let key in product) {
    console.log(`${key}: ${product[key]}`);
}

// Q30. Nested object
const order = {
    orderId: 101,
    customer: {
        name: "Neha",
        city: "Delhi"
    }
};
console.log(order.customer.name);

// Q31. Destructure name and age
const { name, age } = users[0];
console.log(name, age);

// Q32. Destructure first and third element
const [first, , third] = numbers;
console.log(first, third);

// Q33. Default value while destructuring
const { discount = 10 } = product;
console.log(discount);

// Q34. Copy array using spread
const copyNumbers = [...numbers];
console.log(copyNumbers);

// Q35. Merge two arrays
const moreNumbers = [30, 40];
const mergedArray = [...numbers, ...moreNumbers];
console.log(mergedArray);

// Q36. Update object using spread
const updatedProduct = { ...product, price: 50000 };
console.log(updatedProduct);

// Q37. Rest operator to sum numbers
function sumAll(...nums) {
    return nums.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumAll(1, 2, 3, 4));

// Q38. Function with default username
function greetUser(username = "Guest") {
    console.log(`Welcome ${username}`);
}
greetUser();
greetUser("Ravi");

// Q39. Explain output
function test(a = 10) {
    console.log(a);
}
test(null); // Output: null (default value is not used)
