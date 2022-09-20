// Javascript is a programming language that interacts with our browser

//variables in javascript
//string, numbers, 

// let myName = "Andy";
//^ let is the initialzier
/// myName is the name of the variable that we are giving it to. camelcase
// camelcase is where 

// console.log(myName);

//javascript is immutable and we can change data types
// data type is a string
// data type to a number

// myName = 5;

// console.log(myName);

//Javascript and Python you can go ahead and change data types 


// let and const
// const is always const and cannot change its value 
// const myName = "Andy";

// console.log(myName);

// myName = "Soaky";

// console.log(myName);

//if else conditionals
// if (condition 5 > 4 or myName = Andy ){
//      run this block of code
//} else{ run this block }

// let myName = "Soaky";

// console.log(5 == '5'); // the double equal sign only compares the value, not the data type.
// console.log(5 === '5');

// if(myName === "Andy"){
//     console.log("Hello there Andy, how are you doing?");
// }else if( myName === "Vireak"){
//     console.log("Oh he is the teacher, hello")
// }
// else{
//     ("Hey, bring Andy back.");
// }


//if /else conditionals
// operators
// +, - , = , / , *, %
// <, >, <=, >=, ==, ===

//What is the difference between the double == and triple ===?
// triple === strictly compares the value and the data type
// double == compares just the value
// let age = 
// if(age < 21) do this else (do that)


// function and methods
// a reusable block of code

// checkName("vIreaK");

// function checkName(name){
//     if(name.toLowerCase() === "andy"){
//         console.log("Hello there Andy, how are you doing?");
//     }else if(name.toLowerCase() === "vireak"){
//         console.log("Oh he is the teacher, hello")
//     }
//     else{
//         console.log("Hey, bring Andy back.");
//     }
// }

// checkName("andy");
// checkName("soaky");

// DRY Principle
// Dont Repeat Yourself

// function addSum (num1, num2){
//     // console.log(num1 + num2);
//     return num1 + num2;
// }

// console.log(addSum(8,2))
//string concatanation "5" + 2 = "52"

// let myName = "Andy";

// console.log("Hi my name is Andy"); // hardcoding
// console.log("Hi my name is " + myName); // string concat
// console.log(`Hi my name is ${myName}`); // template literal
// console.log("Hi my name is " + myName + " and I am 23 years old. Oh by the way my name is " + myName + " don't want you to forget it.")
// console.log(`Hi my name is ${myName} and I am 23 years old. Oh by the way my name is ${myName} dont want you to forget it.`)
//Syntatic Sugar => more than one way of writing things


// For loops
// a for loop is something that keeps running or looping through over and over
//While loops
// function countNums(num){
//     for(let i = 1; i <= num; i++ i + 1){
//         console.log(i)
//     }
// }

// countNums(10);

// array is a list of numbers and/or integers
let array = [1,2,3,4,5,6,7,8,9,10] // length of the array is 10

function checkArray (array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}

// checkArray(array)

array = ["BMW", "Toyota", "Honda", 2345, "Suzuki"];

// checkArray(array)

console.log(array)

// create a function that loops over this array

let thisArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// create a function that loops over the array
// and if the array[i] % 3 === 0 console.log "fizz"
// else if the array[i] % 5 === 0 console.log "buzz"
// else console.log[i]

function fizzBuzz(array){
    //for loop
    // and if the array[i] % 3 === 0 console.log "fizz"
    // else if the array[i] % 5 === 0 console.log "buzz"
    // else console.log[i]

    //expected return
    // 1 2 "fizz" 4 "buzz" 6 7 8 "fizz" "buzz" 11 "fizz" 13 14 "fizz"
}