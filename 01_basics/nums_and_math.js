// *************************************NUMBERS**************************************************
const score = 400
console.log(score); // 400

const balance = new Number(100)
console.log(balance); //   [Number: 100]
console.log(balance.toString()); // 100
console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));  //123.9

const hundreads = 100000000
console.log(hundreads.toLocaleString('en-IN'));   // 100,000,000

// *************************************MATHS**************************************************

console.log(Math);             // Object [Math] {}
console.log(Math.abs(-4));     // 4
console.log(Math.abs(4));      // 4
console.log(Math.round(4.4));  // 4
console.log(Math.round(4.5));  // 5
console.log(Math.ceil(3.2));   // 4
console.log(Math.floor(3.2));  // 3
console.log(Math.floor(3.9));  // 3

console.log(Math.min(4,3,6,8));  // 3
console.log(Math.max(4,3,6,8));  // 8

console.log(Math.random());      // output is random value

console.log(Math.floor(Math.random()*10)+ 1);   // output is random value with floor

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

