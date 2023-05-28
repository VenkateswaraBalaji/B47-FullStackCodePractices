// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close",() => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
 let n = parseInt(userInput[0]);

 let greycodes = ['0','1'];

 if (n == 1) {
  console.log (greycodes.join(' '));
 } else {
  while (n-1>0) {
  let greycodescopy = [...greycodes];
  greycodescopy.reverse();
 
 greycodes = greycodes.map(item => '0' + item);
 greycodescopy = greycodescopy.map(item => '1'+ item);
 greycodes = greycodes.concat(greycodescopy);
 n--
  }
  //end-here
  console.log(greycodes.join(' '));}
});