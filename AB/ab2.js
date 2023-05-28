// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let a;

inp.on("line", (data) => {
  a = Number(data);
});

inp.on("close", () => {
  //start-here
//   const area = (Math.sqrt(3) * a * a) / 4;
//   console.log(area.toFixed(2));

  const area = (a ** 2 * Math.sqrt(3)) / 4;
  console.log(area.toFixed(2));
  //end-here
});
