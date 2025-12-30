// 1. getElementById works as expected
const manipulation = document.getElementById("last");
setTimeout(() => {
    manipulation.textContent = "Done by Maulik";
}, 1000);

// 2. getElementsByClassName returns an HTMLCollection. 
// You must loop through it or select an index.
const m2 = document.getElementsByClassName("list");
setTimeout(() => {
    for (let element of m2) {
        element.style.color = "blue";
    }
}, 2000);

// 3. getElementsByTagName also returns a collection
const m3 = document.getElementsByTagName("li");

// 4. Correct syntax: querySelectorAll 
const m4 = document.querySelectorAll("li"); 
m4.forEach(li => {
    li.style.color = "blue";
});
