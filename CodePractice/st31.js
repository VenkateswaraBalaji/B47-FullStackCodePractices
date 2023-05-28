// Getting input via STDIN
const { reverse } = require("dns");
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

  
    let n = userInput[0].split(' ').reverse().join(' ');

  console.log(n);
    
  //end-here
});