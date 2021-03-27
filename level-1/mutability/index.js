//  MUTABILITY

// IMMUTABLE - cannot be changed
    // String
    // Numbers
    // Booleans
   /* var age = 10 
    var otherAge = age

    console.log(otherAge);*/

// MUTABLE - Containers --- Passed by reference
    // Array
    // Object

 /*   var arr = [1, 2, 3, 4, 5];
    arr[0] = 6 //-- prints [6, 2, 3, 4, 5]
console.log(arr); 

var person = {
    name: "harry",
    age: 12
}
//person.hasWand = true
//delete person.hasWand
var newPerson = person
newPerson.hasWand = true

console.log(person);*/

//  TYPEOF - returns the typy of the data immedietly to its right 
//console.log(typeof person);


//  CONSTRUCTOR FUNCTIONSv------ USE this

//They build Object
// "new" - instantiates the object 

/*function Car(make, model, year, honkSound){
    this.make = make
    this.model = model
    this.year = year
    this.honkSound = honkSound
    this.honk = function(){
        console.log(this.honkSound);
    }
}

let jeep = new Car("jeep", "cherokee", 1995, "MEEEERRP");
let mazda = new Car("mazda", "3 hatchback", 2015, "BLAARP")

jeep.honk()
mazda.honk()

//console.log(); // jeep.make, jeep.model, jeep.year
*/