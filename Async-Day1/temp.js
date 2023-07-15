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

function party(){
    setTimeout(() => {
        console.log("Booked");
        setTimeout(()=> {
            console.log("Ordered")
            setTimeout(()=> {
                console.log("Prepared");
                setTimeout(()=> {
                    console.log("Served");
                    setTimeout(()=> {
                        console.log("Eating");
                        setTimeout(()=> {
                            console.log("Billed");
                            setTimeout(()=> {
                                console.log("Left")
        },1000) 
             }, 2000)
                },    5000)
                    },2000);
                        }, 4000);
                            }, 3000);
                                }, 2000);
                                        }
function booking(){
    console.log("Booked")
}
party(booking);
function party() {
     setTimeout(() => {
         console.log("Booked")
         setTimeout(() => {

             console.log("Ordered")
             setTimeout(() => {

                 console.log("Prepared");

                 setTimeout(() => {

                     console.log("Served");

                     setTimeout(() => {

                         console.log("Eating");

                         setTimeout(() => {

                             console.log("Billed");

                             setTimeout(() => {

                                 console.log("Left")

                             }, 1000);

                        }, 2000);

                     }, 5000);

                 }, 2000);

             }, 4000);

         }, 3000);

     }, 2000);

 }
 

 party();
