//           ES6 Practice

//           Let and Const

// const name = "John"
// const age = 101

// function runForLoop(pets) {
//     let petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])


//      Task 1

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     const result = arr.map(carrot => { type: "carrot", name: carrot })


// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

//     let result = people.filter(person => person.friendly)
    
//     console.log(result);

// let doMathSum = (a, b) =>  a + b

// let produceProduct = (a, b) =>  a * b

// console.log(produceProduct(5, 5));


// Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following: 
// const user = {
//     firstName: "Jane",
//     lastName: "Doe", 
//     age: 100
// }

// console.log(`Hi ${user.firstName} ${user.lastName}, how does it feel to be ${user.age}`);



// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];
 
//  const filterForDogs = animals.filter(animal => animal.type === "dog", true)

//  console.log(filterForDogs);


// const user = {
//     location: "Hawaii",
//     name: "Janice"
// }
// console.log(`Hi ${user.name}! \nWelcome to ${user.location}! \nI hope you enjoy your stay. Please ask the president of ${user.location} if you need anything.`);