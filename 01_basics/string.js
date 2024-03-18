const name = "Prathamesh"
const repoCount = 100

console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);  

const gameName = new String ('Prathamesh-fc-com')
console.log(gameName[0]);         //p
console.log(gameName.__proto__);  //{}

console.log(gameName.length);  //10
console.log(gameName.toUpperCase());  //PRATHAMESH
console.log(gameName.charAt(5));  // a
console.log(gameName.indexOf('a'));  // 2

const newString = gameName.substring(0,5)  
console.log(newString);   // prath

const anotherString = gameName.slice(-10,5)  
console.log(anotherString);   //prath

const newStringOne = "    Prathamesh     "
console.log(newStringOne);     //      Prathamesh
console.log(newStringOne.trim());   //Prathamesh

const url = "https://pc.com/pc%35chougule"
console.log(url.replace('%35' , '%20'));   //https://pc.com/pc%20chougule

console.log(url.includes('pc'))    //true
console.log(url.includes('pratik'))    //false

console.log(gameName.split('-'));     //  [ 'Prathamesh', 'fc', 'com' ]