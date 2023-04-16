// functions

// function greet() {
//     return "hello!"
// }

// greet();

// console.log(greet());

// function greetPerson(name) {
//     return `hello ${name}!`;
// }

// greetPerson("No name");

// console.log(greetPerson("Donte"));

// function greetPerson(aName) {
//     return "Hello a 2nd time " + aName;

// }

// const greetPersonArrow = (aNAme) => `Hello ${aNAme}!`;

// console.log(greetPerson("Donte"));

// const sumNums = function(n1, n2) {
//     return n1 + n2;
// }

// console.log(sumNums(2, 2));

// // arrow functions aka anon fucntion

// const subtractNums = (n1 - n2) => {
//     return n1 - n2;
// }

// function subtractNums(n1, n2) {
//     return n1 - n2;
// }

// console.log(subtractNums(10, 4));

// const myArray = [1, 2, 3, 4, 5];

// const newArray = myArray.map((x => x * x));

// console.log(myArray);

// function string() {
//     console.log("never name a function")
// }

// function dontesFunction(num1, otherNumber) {
//     let concat = num1 + otherNumber + "";
//     return concat;
// }
// let sumNumber = 44

// const result = dontesFunction(sumNumber, 2);

// console.log(result);

// console.log(dontesFunction("Hello", "World"));

// var area = function(width, height) {
//     return width* height;
// }

// var size = area(3, 4);

// console.log(size);
// console.log(sumNums(5, 5));
// const sumNums = (n1, n2) => n1 + n2;

// // arrow functions are anonymous functions (usually labeled with a variable like const)

// const somefunction = function(aNAme) {

// }

// IIfE

// instantly invoked fucntion expression

// (function(){
//     console.log("i was instantly invoked as a anon function");
// })


// const labelForFunction = function() {
//     console.log("hello world!");
// }

// function labelForFunction

// const myArray = [1, 2, 3];
// const myStr = "Hello World!";
// function somefunction(x) {
//     console.log("the value of x is" + x);
//     x = "i love JS"
//     console.log(x)
// }

// // somefunction(myStr); 
// // console.log(myStr);

// somefunction(myArray[1]);
// console.log(myArray);

// let outside = 44;

// function testFunction(num) {
//  return num += 22;
// }

// let result = testFunction(outside);

// console.log(result);

// pass by reference

// const outside = {
//     num: 44
// }

//  function testFunction(obj) {
    
//     obj.num += 22;
//  }

//  let result = testFunction(outside);

//  console.log(outside.num);

//  const myArray = [1, 2, 3];


//  function somefunction(myArray) {
//      console.log(myArray);
//         myArray[1] = "i love JS";
//      console.log(myArray)
//  }
 
//  // somefunction(myStr); 
//  // console.log(myStr);
 
//  somefunction(myArray);
//  console.log(myArray);

// const myArray = [1, 2, 3];


// function somefunction(myArr) {
//     console.log(myArr);
//     const newArr = [...myArr]
//        myArray[1] = "i love JS";
//     console.log(myArray, newArr);

//     return newArr;
// }

// // somefunction(myStr); 
// // console.log(myStr);

// somefunction(myArray);
// // console.log(myArray);

// scoping

// function testFunction(notUsed) {
//     let hello = "hello, world!"
//     return hello;
// }

// function calculateSale() {
//     let total = 0;
// }

// function calculateDiscount() {
//     let total = 0;
// }

// console.log(testFunction(hello));
// console.log(hello);

// function varTest() {
//     var x = 1;

//     if (x === 1) {
//          x = 2;
//         console.log(x);
//     }
// }

// varTest();

// // let is scoped tot he code block making its value protected and the label reusable 

// function letTest() {
//     let x = 1;
//     if (x === 1) {
//         let x = 2;
//         console.log(x);
//     }
//     console.log(x);
// }

// letTest(1, 2, 3, 40);

// console(someString);

// const someString = "some string";

// Write a function that takes a temperature in Celsius, converts it Fahrenheit, and returns the value.

// Formula:  F = (C * 9/5) + 32

// function celsiusToF(aNum) {
//     return (aNum * 9/5) + 32;
// }

// console.log(celsiusToF(22));

// function celsiusToF(thisIsJustALabel) {
//     const newTemp = (thisIsJustALabel * 9/5) + 32;
//     return newTemp;
// }

// console.log(celsiusToF(22));