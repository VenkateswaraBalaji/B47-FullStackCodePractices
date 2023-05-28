// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  // let a = Number(userInput[0]);
  // let b = Number(userInput[1]);
  // let c = Number(userInput[2]);
//  let A = Number(userInput[0]);
//  let B = Number(userInput[1]);
//  let C = Number(userInput[2]);

//  let largest = A;
//  if (B > largest) { 
//   largest = B;
//  }
//  if (C > largest){
//   largest = C;
// }
  // // find the largest among the three numbers
  // let largest = a;
  // if (b > largest) {
  //   largest = b;
  // }
  // if (c > largest) {
  //   largest = c;
  // }

  // Method 2:
  const largest = Math.max(Number(userInput[0]), Number(userInput[1]), Number(userInput[2]));
console.log(largest);

  //console.log(largest);
  

  //end-here
});