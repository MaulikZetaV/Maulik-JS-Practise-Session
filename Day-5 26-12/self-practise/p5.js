// setTimeout-Execute once after delay.

// Basic Syntax
// setTimeout(callback,delayInMillisecounds);
// setTimeout(()=>{callback};,delay);

// function can also be passed inside the setTimeout
// setTimeout(function_name,delay);


// setInterval - Execute repeatedly.

// Basic Syntax
// setInterval(callback,delay);
// setInterval(()=>{callback};,delay);

//Self-practise Session
//setTimeout and setInterval

// 1.Print message after 3 seconds
setTimeout(()=>{
    console.log("Printed after 3 secounds");
},3000);

// 2.Create counter using setInterval
let counting = 0

const timeout = setInterval(() => {
    counting = counting+1;
    console.log(counting);
    
    if(counting>15){
        clearTimer(timeout);
    }
},1000);


//3.Stop interval after 5 executions
let counter = 5;
let execution = 1;

const var_name = setInterval(() =>{
    console.log(`${execution} execution is done`);
    execution++;
    counter--;
    
    if(counter<1){
        clearInterval(var_name);
    }
},500);


// // Callback 
// 1. Create a function sayHello that accepts a callback function.
function sayHello(callback){
  console.log("Hello");
  callback();
};

function asking(){
    console.log("How are you ?");
};

sayHello(asking);


//2.Create a function calculateSum(a, b, callback) that adds use callback for result.
function calculateSum(a,b,callback){
    let sum =  a+b;
    callback(sum);
}

function result(sum){
    console.log(`Sum is : ${sum}`);
}

calculateSum(5,3,result);


// 3.Asynchronous CallBack question
function delayedMessage(callback){
    setTimeout(() => {
        callback("Data loaded after 2 sec")
    },2000);
}

delayedMessage(function(){
    console.log("Task completed");
});


// 4.Create a function checkAge(age, successCallback, errorCallback)
function checkAge(age,successCallback, errorCallback){
    if(age>18){
        successCallback();
    }else{
        errorCallback();
    }
}

function success(){
    console.log("Access Granted");
}

function error(){
    console.log("Access Denied");
}

checkAge(17,success,error);


// Promise
// 1.Create a promise that resolves with "Hello Promise" after 1 second and prints it using .then().

function greet(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello Promise")
        },1000);
    });
}

greet().then(result=>console.log(result));


// 2.Create a function checkNumber(num) is even or odd.
function checkNumber(num){
    return new Promise((resolve,reject)=>{
        if(num%2===0){
            resolve("Number is even")
        }else{
            reject("Number is odd")
        }
    });
}

checkNumber(24)
    .then(result=>console.log(result))
    .catch(error=>console.log(error));


// 3.Promise with setTimeout
function delaySum(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a+b)
        },2000);
    });
}

delaySum(5,7)
    .then(result=>console.log(result))
    .catch(error=>console.log(error));


// setTimeout
setTimeout(()=>{
    console.log("Hello Maulik");
},2000);

//clearing setTimeout
const timeid =setInterval(()=>{
    console.log("Hello Maulik");
},2000);

clearTimeout(timeid);

// setInterval and clearing setInterval
let count = 4;
const intervalid = setInterval(()=>{
  console.log("Maulik");
  count--;
   
  if(count===0){
    clearInterval(intervalid);
}
},500);

// Callback
// Method-1 : Both function defined independent way
function greeting(callback){
    console.log("Hello Good Morning!");
    callback();
}

function bye(){
    setTimeout(()=>{
      console.log("You have to check out now"); 
    },2000);
}
greeting(bye);

// Method-2 : where function is defined inside the calling
function greeting(callback){
    console.log("Hello Good Morning!");
    callback();
}

greeting(function(){
    setTimeout(()=>{
      console.log("You have to check out now"); 
    },2000);
});


// Promise
// For variable
let value = 2 ;
const pro = new Promise((resolve,reject)=>{
    if(value>4){
        resolve("It is working");
    }else{
        reject("Not working")
    }
});

pro
    .then(result=>console.log(result))
    .catch(error=>console.log(error));
    
// For function
function agelimit(age,weight){
    return new Promise((resolve,reject)=>{
      if(age>21 && weight>65){
          resolve("You can participate");
      }else{
          reject("You cannot participate");
      }
    });
}

agelimit(22,72)
    .then(result=>console.log(result))
    .catch(error=>console.log(error));
    
// Promise Chaining Q1
function getNumber() {
    return new Promise((resolve, reject) => {
        resolve(25);
    });
}

function multiply(number) {
    return new Promise((resolve, reject) => {
        resolve(number * 2);
    });
}

function addition(doubled_num) {
    return new Promise((resolve, reject) => {
        resolve(doubled_num + 10);
    });
}

getNumber()
    .then(number => multiply(number))
    .then(doubled => addition(doubled))
    .then(result => console.log(result))
    .finally(() => console.log("done"));

// Promise Chaining Q2
function getMessage(){
    return new Promise((resolve,reject)=>{
       resolve("Hello"); 
    });
}

function appending(greet){
    return new Promise((resolve,reject)=>{
       resolve(greet+" World"); 
    });
}

function upper(message){
    return new Promise((resolve,reject)=>{
       resolve(message.toUpperCase()); 
    });
}

getMessage()
    .then(greet=>appending(greet))
    .then(text=>upper(text))
    .then(result=>console.log(result))
    .finally(()=>console.log("Understood"));

// async/await
function begin(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("End");
        }, 2000);
    });
}

async function logging(){
    console.log("Start");
    const variable = await begin();
    console.log(variable);
}

logging();


// async/await parallel execution
function getUser(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
            let name = "Maulik Thakur";
            resolve(name);   
       },2000);
    });
}

function getPosts(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let post = "Trainee Developer";
            resolve(post);   
       },2000);
    });
}

async function handlingTwoFunction(){
    try{
        const [user,post] = await Promise.all([
            getUser(),
            getPosts()
        ]);
        console.log(user,post);
    }catch(error){
        console.log("Error: ",error)
    }
}

handlingTwoFunction();



