// Getting input via STDIN
const { randomUUID } = require("crypto");
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
  // const radius = parseFloat(userInput(0));

  // if (radius < 0) {
  //   console.log ('ERROR');
  // } else {
  //   const circumference = 2 * Math.PI*radius;
  //   const roundedcircumference = circumference.toFixed(2);
  //   console.log(roundedcircumference);
  // }

 // console.log(userInput);

 const radius = parseFloat(userInput);
 if (radius < 0) {
     console.log('ERROR');
  } else {
     const circumference = 2 * Math.PI*radius;
     const roundedcircumference = circumference.toFixed(2);
     console.log(roundedcircumference);
  }
  //  console.log(userInput);

  //end-here
});