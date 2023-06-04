{
    let x = "Guvi"
    console.log(x);
    var y = "Victory"
} // console.log(x) // let doesnt print if we assign print outside the block
 console.log(y)

 //Spread operator- join two arrays into a single array

 const numbersOne = [1,2,3];
 const numbersTwo = [4,5,6];
 const numbersThree = [7,8,9];
 const numberscombined = [...numbersOne, ...numbersTwo,...numbersThree];
 console.log(numberscombined);

 let a = [1,2,3]
 let b = [4,5,6]
 let c = [a,b]
 let d = [...a,...b]
 console.log (c);
 console.log(d);

 const numbers = [1,2,3,4,5,6,7,8]

 // combine two arrays

const [one,two,...rest] = numbers;
console.log(numbers);

// combine two objects

const myvehicle = {
    brand : "Audi",
    model : "Royal",
    color : "Red"
}
const updatemyvehicle = {
    type : "car",
    year : "2022",
    colour : "Yellow"
}
 const myUpdatedVehicle = {...myvehicle,...updatemyvehicle};
 console.log(myUpdatedVehicle);