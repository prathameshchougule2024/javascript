let score = true


console.log(typeof score);

let valueInNumber = Number(score)
console.log(valueInNumber);
console.log(typeof valueInNumber);



// "33" => converted into 33
// "33abc" => NaN (Not A Number)
// true => 1; false => 0 

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true ; 0=> false
// "" => false
// "Prathamesh" => true

let somenumber = 33
let stringNumber = String(somenumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ********************Operations**********************

let value = 3
let negvalue = -value
console.log(negvalue);
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(2%2);

let str1 = "Hello"
let str2 = " Prathamesh"

let str3 = str1 + str2
console.log(str3);        // Hello Prathamesh
console.log("1" + 2);     //12
console.log(1 + "2");     //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

console.log((3 + 4) * 5 % 5);

console.log(true); // true
console.log(+true); // 1
console.log(+""); // 0