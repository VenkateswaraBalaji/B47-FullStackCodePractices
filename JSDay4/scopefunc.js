// Scope - lifetime validity of a variable
// functions are special type of block
// Block scope
// difference between var, let, const
// var makes the variable is a accessible outside the block
// let - variable accessible only inside the block
// difference between let and const is (let - once initiated with a value we can change it later)
// const - once initiated we can't change it later (No updation in const) 

 {
     let x = "Hello"
     var y = "Good Job"
     console.log(x)
 } console.log(y);

function abc () {
    let x = "Hello"
    var y = "Good Job"
    console.log(x)
} console.log(y);
// var not accessible when it gets in a function
// Global variables