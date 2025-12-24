// Template Literals Task
// Printing using mutliple variable and using template literals
const first_name = "Rahul";
const marks = 85;
const standard = 12;
console.log(`${first_name} has scored ${marks} marks in class ${standard}th.`);


//Spread Operator Task
//Spread Operator Array Tasks 
// 1.Merge Two Arrays
const arr1 = [1,2,3,4];
const arr2 = [6,7,8,9];
const merged_Array = [...arr1,...arr2];

// 2.Add New Element Without Modifying Original Array
const arr3 = ["Maulik","Shiksha"];
const updated_Array = [...arr3,"Shyam"]; //Insertion at end
const updated_Array2 = ["Mohan",...updated_Array]; //Insertion at beginning

// 3.Copy Array Using Spread Operator
const copy_Array = [...updated_Array2];


//Spread Operator Object Tasks
// 1.Adding new operator to object
const student_info = {
     name:"Rahul",
     standard:12,
     stream:"PCM"
} ;

const updation = {
    ...student_info,
    age:17
};

// 2. Updating the existing property
const updation2 = {
    ...updation,
    age:19 // Age is updated from 17 to 19.
};

// 3. Cloning object
const cloned_obj = {...updation2};


//Rest Operator Task
function max_and_sum(...numbers){
    const maxValue = Math.max(...numbers);
    const sum = numbers.reduce((total,num)=>total+num,0);
    
    return {maxValue,sum};
}
console.log(max_and_sum(10,20,30,40,50,60));


// Default Parameters
// 1.Function with default country
function info(name,country="India"){
    return {name,country};
}
console.log(info("Maulik"));
console.log(info("Messi","Argentina"));


// 2.Function with default discount value
function bill(price,discount=10){
    return(`You have to pay ${price-(price*discount/100)}`);
}
console.log(bill(1000));
console.log(bill(1000,20));


