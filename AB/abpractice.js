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
 
    let A = Number(userInput[0]);
    let B = Number(userInput[1]);
    let c = Number(userInput[2]);
     
    let largest = A;
    if (B > largest){
        largest = B;
    }
    if (C > largest){
        largest = C;
    }

    if (A <= B <= C );{ 
        largest = C }
        console.log(largest)
     
//     const largest = Math.max(Number(userInput[0]), Number(userInput[1]), Number(userInput[1]));
//    console.log(largest);

  //end-here
});