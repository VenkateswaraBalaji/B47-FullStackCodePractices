//Given an array A of positive integers. Your task is to find the leaders in the array. An element of array is leader if it is greater than or equal to all the elements to its right side. The rightmost element is always a leader. 
//Example 1:

//Input:
//n = 6
//A[] = {16,17,4,3,5,2}
//Output: 17 5 2
//Explanation: The first leader is 17 as it is greater than all the elements to its right.  Similarly, the next 
//leader is 5. The right most element is always a leader so it is also included.
 
//Example 2:

//Input:
//n = 5
//A[] = {1,2,3,4,0}
//Output: 4 0
 
//Your Task:
//You don't need to read input or print anything. The task is to complete the function leader() which takes array A and n as input parameters and returns an array of leaders in order of their appearance.

//Expected Time Complexity: O(n)
//Expected Auxiliary Space: O(n)


function leader(A, n) {
    let leaders = [];
    let maxRight = A[n - 1];
    leaders.push(maxRight);
  
    for (let i = n - 2; i >= 0; i--) {
      if (A[i] >= maxRight) {
        leaders.push(A[i]);
        maxRight = A[i];
      }
    }
  
    leaders.reverse();
    return leaders;
  }
  const n = 6;
const A = [16, 17, 4, 3, 5, 2];

const result = leader(A, n);
console.log(result.join(' '));

const n1 = 5;
const A1 = [1, 2, 3, 4, 0];

const result1 = leader(A1, n1);
console.log(result1.join(' '));
