
function calculateCombination(n, r) {
    // Calculate factorial of a number
    function factorial(num) {
      if (num === 0 || num === 1) {
        return 1;
      } else {
        return num * factorial(num - 1);
      }
    }
  
    // Calculate nCr
    let n = factorial(n) / (factorial(r) * factorial(n - r));
  
    return nCr;
  }
  
  let n = 5;
  let r = 2;
  let result = calculateCombination(n, r);
  
  console.log(result); // Output: 10
  