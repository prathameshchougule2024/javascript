// array

const Myarr = [0,1,2,3,4,5]
const MyHeros = ["Shaktiman", "Superman"]
console.log(Myarr[1]);   // 1
console.log(MyHeros[0]);   // Shaktiman

// Array Method

Myarr.push(9)
console.log(Myarr);   // [ 0, 1, 2, 3, 4, 5, 9 ]

Myarr.pop()
Myarr.unshift(0)
Myarr.shift()
console.log(Myarr);    // [ 0, 1, 2, 3, 4, 5 ]

console.log(Myarr.includes(9)); // false
console.log(Myarr.indexOf(1)); // 1


const newArr = Myarr.join()

console.log(Myarr);
console.log(newArr);
 
// Slice , Splice
console.log("A ", Myarr);
const Myn1 = Myarr.slice(1,3)
console.log(Myn1);
const Myn2 = Myarr.splice(1,3)
console.log(Myn2);
console.log("B ", Myarr);


console.log(Array.isArray("Prathamesh"));       //   False
console.log(Array.from("Prathamesh"));          //   ['P', 'r' , 'a','t','h','a','m','e','s','h']
console.log(Array.from({name: "Prathamesh"}));  //   []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));    // [ 100, 200, 300 ]