// Array creation
const names = ["Maulik","Ram","Shyam","Govind"];

// //Length of array 
console.log(names.length); 

// Iterating over every element of array
for (const name of names){
    console.log(name);
}

//Insertion of Element
names.push("Thakur"); //Insertion at the end
names.unshift("Mo"); //Insertion at the beginning

// Removal of Element
names.pop(); //Removes the last element
names.shift(); //Removes from the beginning

// This is built is JavaScript Method used for checking the Array is array.
console.log(Array.isArray(names));

//Copying array
const titles = [...names];
console.log(titles);

// Array Methods
//Map method : Transform every element of array
const lower_Case = names.map(name=>name.toLowerCase());
console.log(lower_Case);

//Filter method: Filter element based on condition.
const new_names = names.filter(name=>name.length>5);
console.log(new_names);

// Find method : Return first matching
const findout = names.find(name=>name==="Maulik");
console.log(findout);

//Reduce Method:Used to reduce array into a single value.
const prices = [100, 200, 300];

const total = prices.reduce((sum, price) => sum + price, 0);


//Array Self Practise Questions
//Create an array of numbers and print all
let numbers = [5,7,12,15,18];
console.log(numbers);

//Using map() to double the values
let map_method = numbers.map(number=>number*2);
console.log(map_method);

//Filter numbers greater than 10
let filter_method = numbers.filter(number=>number>10);
console.log(filter_method);

//find method
let find_method = numbers.find(number=>number===18);
console.log(find_method);

// Reduce method
const addition = numbers.reduce((sum, numbers) => sum + numbers, 0);
console.log(addition)


// Objects
// Object Creation
const user={
    name:"Maulik Thakur",
    age:22,
    company:"Zeta-V Technology",
    role:"Trainee",
    experience:"Rookie"
};

// Accessing object element
console.log(user.company); //Dot method(Prefered)
console.log(user["age"]); //Bracket method

// Adding element
user.city = "Pune";
console.log(user);

//Updating element
user.experience = "Fresher";
console.log(user);

//deleting the key-value pair
delete user.city;
console.log(user);


// Object Self Practise
// Create an object for a product
const product={
    name:"Nuggets",
    brand:"Cadbury",
    shelf_life:6,
    price:350
};

// Add and update properties
product.price = 450;
product.manufacturingCountry = "India";
console.log(product);

//Create nested object and access it
const info ={
    name:"Maulik Thakur",
    role:"Trainee",
    company:"Zeta-V Technology",
    address:{
        residence:"Pune",
        permanent:"Seoni"
    },
    birth_year:2003
};

console.log(info.address.permanent);

//Looping through objects key and values
for(const keys in product){
  console.log(keys,product[keys]);
}


//Array of Object Self Practise
// Create an array of 5 products
const products=[
    {p_id:1,name:"Redmi Note 10 Pro",brand:"Xiaomi",price:19500},
    {p_id:2,name:"Realme 9 Pro+",brand:"Realme",price:22500},
    {p_id:3,name:"Samsung Galaxy S24",brand:"Samsung",price:132000},
    {p_id:4,name:"Iphone 17 Pro",brand:"Apple",price:142000},
    {p_id:5,name:"Nothing 3A",brand:"Nothing",price:27550},
    ];
    
//Print all product names
for(let i=0;i<products.length;i++){
    console.log(products[i].name);
}

//Filter product above price 20000
const filtering = products.filter(products=>products.price>20000);
console.log(filtering);

//find a product by id
const finding = products.find(products=>products.p_id===4);
console.log(finding);

//updating a price of product
const updation = products.map(products=>products.p_id===5?{...products,price:23550}:products);
console.log(updation);

//removal of product by id
const removal = products.filter(products=>products.p_id!==4);

const user={
    name:"Maulik Thakur",
    age:22,
    company:"Zeta-V Technology",
    role:"Trainee",
    experience:"Rookie"
};

//Approach for desturcturing
const {name,company} = user;
console.log(name,"\n",company);

//Desturcturing along with changing variable name
const{name:fullname,company:EmployerIdentity} = user;
console.log(fullname);

//Default Values
const{role:designation="Entry-level"}=user;

//for accessing all details apart from written
const{myname,...restDetails}=user;
console.log(restDetails);

//Objeict Destructuring Self Practise Session
const produc = {
  name:"Airdrop 141",
  brand:"Boat",
  origin:"China",
  price:"1850",
  production:{
      India:500,
      China:250
  },
  launched_year:2023
};


// Destructure name and price from product object and rename destructured variable
const {name:productName,price:cost} = produc;
console.log(productName);
console.log(cost);

// Destructure nested object
const{
    production:{India,China}
} = produc;
console.log(India);
