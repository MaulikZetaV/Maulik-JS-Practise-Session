// 1. Synchronous vs Asynchronous
console.log("Start");

setTimeout(() => {
    console.log("Async Task Executed");
}, 2000);

console.log("End");


// 2. setTimeout with 0 delay
setTimeout(() => {
    console.log("setTimeout with 0 delay");
}, 0);


// 3. setInterval - Print numbers 1 to 10 every second
let count = 1;

const intervalId = setInterval(() => {
    console.log(count);
    count++;

    if (count > 10) {
        clearInterval(intervalId);
    }
}, 1000);


// 4. Digital Clock using setInterval
setInterval(() => {
    const now = new Date();
    console.log(now.toLocaleTimeString());
}, 1000);


// 5. Callbacks Example
function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched successfully");
    }, 3000);
}

fetchData((result) => {
    console.log(result);
});


// 6. Promises Example
function checkResult(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 35) {
            resolve("Pass");
        } else {
            reject("Fail");
        }
    });
}

checkResult(40)
    .then(result => console.log(result))
    .catch(error => console.log(error));


// 7. Promise Chaining
function addTen(num) {
    return Promise.resolve(num + 10);
}

function multiplyByTwo(num) {
    return Promise.resolve(num * 2);
}

function subtractFive(num) {
    return Promise.resolve(num - 5);
}

addTen(5)
    .then(multiplyByTwo)
    .then(subtractFive)
    .then(result => console.log("Final Result:", result));


// 8. async / await Example
async function calculateResult() {
    try {
        let value = await addTen(5);
        value = await multiplyByTwo(value);
        value = await subtractFive(value);
        console.log("Async/Await Result:", value);
    } catch (error) {
        console.log("Error:", error);
    }
}

calculateResult();


// 9. Fetch API Example
async function fetchUsers() {
    try {
        console.log("Loading...");
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("API Error");
        }

        const users = await response.json();

        users.forEach(user => {
            console.log("Name:", user.name);
            console.log("Email:", user.email);
        });

    } catch (error) {
        console.log("Error fetching users");
    }
}

fetchUsers();
