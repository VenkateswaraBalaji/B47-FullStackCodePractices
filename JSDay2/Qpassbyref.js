 a = "Balaji"
 // 1.Need to change Balaji to Dheeraj

 array = [1,2,3,4,5]
 // 2.swap the 2nd and 2nd last elements of the array

 //3.Update the array by all its element as element * 10% of that element

 // passbyreference - object or array
// 1 solution
 let obj = {
    a: "Balaji"
 }
 console.log (obj.a)
 funct(obj)
 function funct(obj){
    obj.a="Dheeraj"
 }
 console.log(obj.a);
 
 //2 solution

function funct(arr){
    let temp =arr[1]
    arr[1]= arr[arr.length-2]
    arr[arr.length-2]= temp
}
// array is also by default pass by reference
 let arr = [1,2,3,4]
 console.log(arr)
 funct(arr)
 console.log(arr)

//3 Solution

// let brr =[1,2,3,4]
//      function funct(brr){
//      let temp1 =brr[i]
//      brr[i]= brr[i]*.01*brr[i]
       
//  }
// // // array is also by default pass by reference
 
//   console.log(arr)
//   funct(brr)
//   console.log(brr)

// // arr[1]*.01*arr[i]