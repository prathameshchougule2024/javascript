function sayMyName(){
    console.log("P")
    console.log("R")
    console.log("A")
    console.log("T")
    console.log("I")
    console.log("K")
}
//sayMyName()

// function addTwoNumbers(number1,number2){               //9
//     console.log(number1 + number2);

// }
// function addTwoNumbers(number1,number2){
//     let result = number1 + number2                    //Result:  9
//     return result
function addTwoNumbers(number1,number2){
       return number1 + number2                 //Result:  9
}   

// addTwoNumbers(4,5)     // 9
const result = addTwoNumbers(4,5)
console.log("Result: ",result);

function loginUserMessage(username = "sam"){
    if(!username ){
        //console.log("please enter a username");

    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Prathamesh"))            //Prathamesh just logged in
console.log(loginUserMessage(""))            //just logged in
console.log(loginUserMessage("PC"))            //undefinedjust logged in

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(100,200,512,400));

const user = {
    username: "PC",
    price: 299
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleObject(user)           //Username is PC and price is 299
handleObject({
    username: "sam",
    price: 599              //Username is sam and price is 599
})

const  myNewArray = [200,420,455,100]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));
