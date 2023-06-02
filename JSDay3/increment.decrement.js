let number = 5;

// Increment loop
console.log("Increment loop:");
for (let i = 0; i < 5; i++) {
  number = increment(number);
  console.log(number);
}

// Decrement loop
console.log("Decrement loop:");
for (let i = 0; i < 5; i++) {
  number = decrement(number);
  console.log(number);
}
