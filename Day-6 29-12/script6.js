// DAY 6 – DOM & Event Handling
// DOM Basics and Event Handling Tasks

// Selecting DOM Elements
// 1. Select element using getElementById
const heading = document.getElementById("main-heading");
console.log(heading.textContent);

// 2. Select element using querySelector
const para = document.querySelector(".description");
console.log(para.textContent);


// Changing DOM Element 
// 1. Change heading text
heading.textContent = "Welcome to DOM & Event Handling";

// 2. Change text color
heading.style.color = "blue";

// 3. Change font size
heading.style.fontSize = "28px";


// Creating and Appending DOM Element
// 1. Create button dynamically
const btn = document.createElement("button");
btn.textContent = "Click Me";
document.body.appendChild(btn);

// 2. Create list dynamically
const ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.textContent = "JavaScript";

const li2 = document.createElement("li");
li2.textContent = "DOM Manipulation";

const li3 = document.createElement("li");
li3.textContent = "Event Handling";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

// 3. Append list to DOM
document.body.appendChild(ul);


// Event Handling
// 1. Button click alert
btn.addEventListener("click", () => {
    alert("Button Clicked!");
});

// 2. Change text on click
btn.addEventListener("click", () => {
    heading.textContent = "Button Was Clicked";
});

// 3. Change background color on click
btn.addEventListener("click", () => {
    document.body.style.backgroundColor = "lightgray";
});


