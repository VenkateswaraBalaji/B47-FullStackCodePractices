// function abc (){
//     // function body
// }

// A function having no-name is Anonymous function
// Example: // applu const to assign name
const abc = function ( ){
    // function body
    console.log ('abc called');
}
abc();

// Example 2
const def= () => {
    // function body
    console.log ('abc recalled');
}
def();

// Object Property Shorthand

const names = "Balaji"
const age = 42
const location = "Coimbatore"


const user = {
    names,
    age,
    location
}

const users = {
    uuuu:names,
    yyyy:age,
    zzzz:location
}
console.log (user)
console.log (users)