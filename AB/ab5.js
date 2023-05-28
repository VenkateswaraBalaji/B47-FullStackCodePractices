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
 
  
   const n = parseInt(userInput[0]);
  
  const multiple1 = n;
  const multiple2 = n * 2;
  const multiple3 = n * 3;

  
  console.log(`${multiple1} ${multiple2} ${multiple3}`);
  
      
  //end-here
});