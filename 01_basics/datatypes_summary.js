/* Primitive
There are 7 types of Primitive datatypes

String
Number
Boolean
null
undefined
symbol 
BigInt
*/


const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('1234')
const anotherId = Symbol('1234')
console.log(id === anotherId);        //false
const bignumber = 12365478906515456n

/*
Non-Primitive Data types

Array
Objects
Functions

*/

const heros = ["shaktiman","Nagraj","Doga"];
let myObj = { 
    name: "Prathamesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof bignumber );  //bigint
console.log(typeof anotherId ); // Symbol