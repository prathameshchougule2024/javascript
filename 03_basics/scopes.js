let a = 300
if(true){
    let a =10
    const b = 20
    var c = 30
    //console.log("Inner: ",a);  //10
}
// for (let i = 0; i< array.length; i++) {
//     const element = array[i];
    
// }

//console.log(a);      //300
// console.log(b);
// console.log(c);

function one(){
    const username = "PC"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()

}
//one()
if(true){
    const username = "PC"
    if (username === "PC") {
        const website = " youtube"
       // console.log(username + website );    
    }
    //console.log(website);
}
//console.log(username);


// +++++++++++++++++++++++++++Interesting+++++++++++++++++++++++++++++++++++++
console.log(addone(5))
function addone(num){
    return num + 1
}



const addTwo = function(num){
    return num + 2
}
addTwo(5)