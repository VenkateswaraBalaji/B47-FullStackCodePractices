// Functions - Set of instruction (to solve particular purpose)
// Function - WE write the logic for a particular problem only once and whenever need to perform that problem, instead of writing the logic again, we jsut call the function
// How to define a function

// function functionname (argumentparameter){
   // functionbody
//}
// Example
//Sum of two numbers
function sum (a,b){
    console.log(a+b) // fuction body
}
sum (2,3)// function call

// calculate the factorial of the number
// factorial for 5! = 5*4*3*2*1

 function factorial (c) {
  let f=1;
  for (let i=c;i>=1;i--){
  f=f*i
  }
  console.log(f)
  } factorial(5)

// Above code will fail for negative value or zero, for that we need to put a check (return) for solution

//Using if else statement

  function factorial (d){
      if (d < 0) {
          return ("Enter a Non-Negative integer")}
       let f =1 
       for (i=d;i>=1;i--){
          f = f*i
       } console.log(f)
           } factorial (5)

// return statement
// It returns the final output calculated by a function to the line which calls it

 function factorial (e){
     if (e < 1) {
         return ("Enter a Non-Negative integer")}
     let g =1 
      for (i=e;i>=1;i--){
         g = g*i
      } console.log(g)
          } factorial (5)

