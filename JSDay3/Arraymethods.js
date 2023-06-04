// Array to string
let a = ['h','u','p']
 console.log(a.toString())
// Array to join
 console.log(a.join())
 console.log(a.join(' '))
 console.log(a.join('%'))
 console.log(a.join('ooooooo'))
// push - insert any element at last
// pop - insert any element at the front
// shift - will delete the first one
//unshift - insert at the beginning

a.push('g','o');
a.pop()
a.shift()
a.unshift('k')
console.log (a)
// Array - The flat method
const arr = [[1,2],[3,4],[5,6,7,8]];
const newarr=arr.flat();
console.log(newarr);

// Array Splice and slice method
// splice method adds new element to array
// slice method slices out a piece of an array

const fruits = ["Banana","Apple","Grape","Mango"];
fruits.splice(2,0,"Lemon","Plum") // inserts in 2 position / 0 means delete nothing
fruits.splice(5,0,"Kiwi") // inserts in 5 position / deletes nothing
console.log(fruits)

const fruits1 = ["Banana","Apple","Grape","Mango","Guava","Orange"];
const citrus = fruits1.slice(1) // slices the 1st index of the array
const bitrus = fruits1.slice(1,4) // slices the 1st to 3rd index (always its -1 for slicing index)
console.log(citrus)
console.log(bitrus)