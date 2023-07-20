console.log("Hi");
setTimeout(() => {
    console.log("There");
}, 3000);
console.log("Fine");

setTimeout(() => {
    console.log("Hello")
}, 4000);
setTimeout(() => {
 console.log("Good to Know")   
}, 5000);
setTimeout(() => {
    console.log("Great")
}, 6000);

// callback is a function that is passed as an argument to call another function
// synchronous are executed sequentially and blocks the code
// Asynchronous does not block the code

// function result(number){
//     console.log("PRINT THE DATA")
//     // console.log(number);
//     console.log(number(20,40));
// }
// function calculate(a,b){
//     return a+b;
// }
// // result(calculate(10,20));
// result (calculate);

// Restaurant 
//1.Booking 2000
//2.Ordering 3000
//3.Preparing 4000
//4.Serving 2000
//5.Eating 5000
//6.Bill 2000
//7.Leaving 1000

// function party(){
//     setTimeout(() => {
//         console.log("Booked");
//         setTimeout(()=> {
//             console.log("Ordered")
//             setTimeout(()=> {
//                 console.log("Prepared");
//                 setTimeout(()=> {
//                     console.log("Served");
//                     setTimeout(()=> {
//                         console.log("Eating");
//                         setTimeout(()=> {
//                             console.log("Billed");
//                             setTimeout(()=> {
//                                 console.log("Left")
//         },1000) 
//              }, 2000)
//                 },    5000)
//                     },2000);
//                         }, 4000);
//                             }, 3000);
//                                 }, 2000);
//                                         }
// function booking(){
//     console.log("Booked")
// }
// party(booking);
// function party() {
//      setTimeout(() => {
//          console.log("Booked")
//          setTimeout(() => {

//              console.log("Ordered")
//              setTimeout(() => {

//                  console.log("Prepared");

//                  setTimeout(() => {

//                      console.log("Served");

//                      setTimeout(() => {

//                          console.log("Eating");

//                          setTimeout(() => {

//                              console.log("Billed");

//                              setTimeout(() => {

//                                  console.log("Left")

//                              }, 1000);

//                         }, 2000);

//                      }, 5000);

//                  }, 2000);

//              }, 4000);

//          }, 3000);

//      }, 2000);

//  }
 

//  party();

// Restaurant 
//1.Booking 2000
//2.Ordering 3000
//3.Preparing 4000
//4.Serving 2000
//5.Eating 5000
//6.Bill 2000
//7.Leaving 1000

function bookTheTable(callback){
    setTimeout(() => {
        console.log("Booked");
        callback();
    }, 2000)
}

function placeTheOrder(callback){
    setTimeout(() => {
        console.log("Ordered");
        callback();
    }, 3000)
}

function preparingTheFood(callback){
    setTimeout(() => {
        console.log("Prepared");
        callback();
    }, 5000)
}

function servingTheFood(callback){
    setTimeout(() => {
        console.log("Served");
        callback();
    }, 2000)
}

function EatingTheFood(callback){
    setTimeout(() => {
        console.log("Eaten");
        callback();
    }, 5000)
}

function billingTheFood(callback){
    setTimeout(() => {
        console.log("Billed");
        callback();
    }, 2000)
}

function leaving(callback){
    setTimeout(() => {
        console.log("Left");
        callback();
    }, 1000)
}

bookTheTable(function() {
    placeTheOrder(function(){
        preparingTheFood(function(){
            servingTheFood(function(){
                EatingTheFood(function(){
                    billingTheFood(function(){
                      leaving(function(){})
                    })
                })
            })
        })
    })
})

// Callback Hell
// Pyramid of doom 
// Code become difficult to read and maintain
// Multiple async operation are dependent on each other or on extended sequentially
// callback - callback nested

// Promise- Promise is invented to solve the problem and to better handle the task
// Promise --> Pending --> Resolve --> .then .then (block which is known as Promise chain) / Reject--> .catch --> 
// --> Successfully completion of task
// potential error or bug