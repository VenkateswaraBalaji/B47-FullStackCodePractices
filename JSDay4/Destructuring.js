// Object and Array Destructuring
let introduction =["Hello", "I","am","Balaji"];
let [greeting, pronoun] = introduction;

console.log (greeting); // "Hello"
console.log (pronoun); // "I"

// Destructuring

const f = ['m','a','B','p','G','s']
const [m,b,o]=f
console.log (m,b,o);

const z = ['m','a','B','p','G','s']
const [,,,...u]=z
console.log (z);

// Swapping Values - Example

let c = 3;
let d = 6;
[c,d] = [d,c]; // Destructuring the values here

console.log(c);
console.log(d);

// Object Destructuring
// object destructuring keys as to be the same

let person = {name:"Balaji",country:"India", job: "Developer"}
let name, country,job; 
let {name: Raji, country: follow} = person;
console.log(Raji); // Balaji
console.log(follow); // India

// Template literals
 let a = 5
 let Str = `Hello, this is + ${a}`
 console.log(Str);

let j = 1;
let e = 2;
let g = 3;
let h = 4;

let oo = `Hello,j+e`+`${g}`
let p = `Hello,`+`{j}`+`g`
 let q = `Hello,${j}+ e`+`{g}`
 let n = `Hello,${e}${g}${j}`
 let tt = `Hello,`+`+${j}${e}{+g}`

 console.log(oo);
 console.log(p)
 console.log(q)
 console.log(n)
 console.log(tt)

