// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

function findSmallestFrequency(frequencies) {
    let max = 100;
    for (let key in frequencies){
        max = frequencies[key] < max ? frequencies[key] : max;
    }
    return max;
}

function filterSmallestFrequencies(frequencies, smallestFrequency) {
    let result = [];

    for (let key in frequencies) {
        if (frequencies[key] == smallestFrequency) {
            result.push(key);
        }
    }
    return result;
}
inp.on("close", () => {
  
     let[length, numbers] = [parseInt(userInput[0]), userInput[1].split(' ').map(Item=>parseInt(Item))];
     //start-here
  // find all the frequencies
  let frequencies = {}

  for( let number of numbers) {
    frequencies[number] = 0;
  }

  for (let number of numbers) {
    frequencies[number]++;}

    // find the smallest frequency
    let smallestFrequency = findSmallestFrequency(frequencies);
  
    let result = filterSmallestFrequencies(frequencies, smallestFrequency);

    result = result.map(item => parseInt(item));
    result.sort((a, b) => b - a);
    console.log(result.join(' '));

  //end-here
});