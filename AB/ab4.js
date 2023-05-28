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
 let length = parseInt(userInput[0]);
 let breadth = parseInt(userInput[1]);

 let area = length * breadth ;

 let roundedarea = Math.round(area); 

  console.log(area);

  //end-here
});