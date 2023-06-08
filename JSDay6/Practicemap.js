//1 Take a array of Numbers & convert them into string
// 2 Array of names, capitalize the 1st letter
// 3 arr =[{name:{
  //  firstname: "Balaji",
   //  lastname:"Lakshmanan"
// }, age:25, address:"ABC Road"
// 4 Array of numbers given, calculate the sum of all elements, sub of all elements, multiplication of all elements
// Answer 1
const num = [1,2,3,4,5]
const newarr = num.map((item)=> {
    return item+""
})

console.log(newarr);

// Answer 2

const num1 = ["abc","mvh","hhgb"]
const newarr1 = num1.map((item)=> {
    return item[0].toUpperCase()+item.slice(1)
})

console.log(newarr1);

// Answer 3

const arr3 = [{name: {
    firstname:"Balaji",
    lastname:"LV"},
    age: 25, 
    address: "ABC Road"}];

const newarr3 = arr3.map((item)=> {
    return item.name.firstname+" "+item.name.lastname
})
console.log(newarr3);

// Answer 4

const num4=[1,2,3,4,5,6,8,8]
var sum =0;
var sub = 0;
var mul = 1;
const newarr4=num4.map((item)=>{
    sum+=item
    sub-=item
    mul*=item
})

console.log(sum,sub,mul);



