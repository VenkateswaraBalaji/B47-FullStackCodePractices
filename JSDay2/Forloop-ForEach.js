// arr = ['Mango', 'Apple','Banana'];
// // console.log(arr);
// // console.log(arr[1]);
// //Traverse the array and print the value
// for (let i=0; i<=arr.length;i++) {
//     console.log(arr[i]);
// }

// brr = [1,2,3,4,6,7,8]
// // Traverse the array and calculate the sum
//  let sum=0; 
//  for(let i=0;i<=brr.length-1;i++){
//      sum+=brr[i]
//  }
//  console.log(sum);

//  // For Each - It is a inbuilt function. An array function. An alternative of loop
// // Example W3 school - ForEach
// // For Each is an higher order function
// // Higher order function is a function which takes another function as a parameter
// function abc(a){
//     return a*10
// }
// let q = abc(10);
// // passing a function
//  function secondfunction(a){
//      return a*10
//  }
//  function first(secondfunction){
//      return secondfunction (10)
//  }
// let b = first (secondfunction);
// console.log(q);

// const numbers = [65,44,12,4];
// numbers.forEach(myfunction)
// function myfunction(item,index,arr){
//     arr[index] = item * 10
// } console.log(numbers);

// // crr = [1,2,3,4,5,6,7,8,9]
let sum = 0;
let mul =1;
let crr = [1,2,3,4,5,6,7,8,9]
crr.forEach(myfunction)
function myfunction(item) {
    sum+= item
    mul*= item
}
console.log(sum,mul);

// arr.forEach (replacebyzero)
// function replacebyzero(item);
// arr [index]=0
// for loop
 let a = [{
    name: "Balaji",
    age: 42
 } ,{
    name:"Raji",
    age: 37
 } , {
    name:"Dheeraj",
    age:8
 } ]

 sum = 0;
 a.forEach (calcAge);
 function calcAge(item){
 sum+= item.age}
 console.log (sum);