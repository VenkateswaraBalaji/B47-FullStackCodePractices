// Create a class Bike having keys as model, colour, price, mileage.
// Create 5 different object and show the mileage of all the bikes

class Bike {
    constructor(model,colour,price=98000,mileage=20) {
        this.model = model;
        this.colour = colour;
        this.price = price;
        this.mileage= mileage;
    }
}

const myBike1 = new Bike ("Hero", "Red", 60000, 50);
const myBike2 = new Bike ("Benz", "Blue", 100000, 35);
const myBike3 = new Bike ("Ducati", "Black",undefined, 30);
const myBike4 = new Bike ("Bajaj", "white", 65000, 60);
const myBike5 = new Bike ("Yamaha", "Yellow", 80000, 25);
const myBike6 = new Bike ("Yamaha+", "Violet", 90000); // if mileage not assigned, it will take the default value assigned in constructor
const Bikes =[]
// myBike1.mileage + " " + myBike5.mileage;
// to create only mileage of the Bikes
for (let i=1;i<=6;i++){
    console.log((eval("myBike"+i)).price);
    console.log((eval("myBike"+1)).mileage);
}
    // Bikes.push(eval("myBike"+i));}
 // console.log(Bikes);
// console.log(myBike1.mileage)
// console.log(myBike2.mileage
// console.log(myBike3.mileage)
// console.log(myBike4.mileage)
// console.log(myBike5.mileage)
// eval is an inbuilt function which is used to convert the string to its value
