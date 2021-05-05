// Constructor Functions
// blueprint for generating js objects with the same shape


// Constructor is "what it is to be a car"
// function Car(make, model){
//     this.make = make
//     this.model = model
//     // this.honk = function(){
//     //     console.log("hoooonk");
//     // }
// }
// //What do cars "do"
// Car.prototype.honk = function(){
//     console.log("Honk");
// }

// instantiate
    // const jeep = new Car("jeep", "cherokee")
    // const mazda = new Car("mazda", "3")

    // mazda.honk()
    


//  ES6 Classes

class Vehicle {
    constructor(make, model, honkSound){
        this.make = make
        this.model = model
        this.honkSound = honkSound
    }
    honk(){
        console.log(this.honkSound);
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, honkSound, hasSideCar){
        super(make, model, honkSound)
        this.hasSideCar = hasSideCar
    }
}
const jeep = new Vehicle("jeep", "cherokee", "Veerp")
const harley = new Motorcycle("Harley", "Davidson", "Honkey", true)

harley.honk()



//-------------------------

const arr = [1, 2, 3]


arr.join("")

class Array {
    constructor(){

    }
    join(){

    }
}