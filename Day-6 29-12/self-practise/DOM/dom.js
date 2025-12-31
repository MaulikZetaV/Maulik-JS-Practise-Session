// Changing content using DOM
// Change Heading Text 
const heading = document.getElementById("main-heading");
setTimeout(()=>{
    heading.textContent="Welcome to DOM Manipulation";
},1000);

//Style All Paragraphs
const colorChange = document.querySelectorAll(".text");
colorChange.forEach(text => {
    text.style.color = "blue";
    text.style.fontSize = "20px" ;
    text.textContent = "This paragraph changed using JS";
});

colorChange[1].textContent = "Changed bY maulik";


//Creating and Appending Element
// Create a paragraph and append it to body.
const p = document.createElement("p");
p.textContent ="This is created and appended";
document.body.appendChild(p);

//Event Handling
//Alert on Button Click
const btn = document.getElementById("btn-alert");

btn.addEventListener("click",()=>{
    btn.textContent="Button Clicked properly";
});

//Change Heading Text on Click
heading.addEventListener("click",()=>{
    heading.textContent = "Heading changed beacuse it is clicked.";
});

const boxEvent = document.querySelector("#box");
boxEvent.addEventListener("mouseenter",()=>{
    boxEvent.textContent="Mouse is inside the box";
});