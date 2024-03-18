// Date

let myDate = new Date()
console.log(myDate.toString());        //   Mon Mar 18 2024 10:04:03 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());    //   Mon Mar 18 2024
console.log(myDate.toLocaleString());  //   3/18/2024, 10:04:03 AM
console.log(typeof myDate);   //object

let myCreatedDate = new Date(2023, 0 , 23) 
console.log(myCreatedDate.toDateString());    // Mon Jan 23 2023


let myTimeStamp = Date.now()
console.log(myTimeStamp);    // 1710757206002
console.log(myCreatedDate.getTime());   // 1674432000000
console.log(Math.floor(Date.now()/1000));   //1710757369

let newDate = new Date()
console.log(newDate);            // 2024-03-18T10:31:55.627Z
console.log(newDate.getMonth() + 1);  // 3
console.log(newDate.getDay());   // 1

newDate.toLocaleString('default',{
    weekday: "long"
})