function findDifferenceAndCheck(N, M) {
    var difference = Math.abs(N - M);  // Calculate the absolute difference between N and M
    if (difference % 2 === 0) {
      return "even";  // The difference is even
    } else {
      return "odd";  // The difference is odd
    }
  }
  
  // Example usage
  var N = 5;
  var M = 5;
  var result = findDifferenceAndCheck(N, M);
  console.log(result);
  