// Getting input via STDIN
const { constants } = require("buffer");
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
  // Function to calculate the Nth term of the series
function findNthTerm(N) {
    if (N <= 0) {
      return 0;
    } else {
      const nthTerm = N * N;
      return nthTerm;
    }
  }
  
  // Prompt the user to enter the value of N
  const N = parseInt(userInput[0]);
  
  // Call the function and store the result
  const result = findNthTerm(N);
  
  // Print the result
  console.log(result);
  
  //end-here
});