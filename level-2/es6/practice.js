//       Rest Operators 

// function collectAnimals(...args) {  
//     let result = 0; 
//     for(let arg of args) result += arg;
//     return result
// }
// console.log(collectAnimals);
// let animals = collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// --------------------------------------


//////    Cannot get this to return anything but [Function: foodGroup]

//  let foodGroup = (fruit, sweets, vegetables) => {
//      return {
//          fruit: combineFruit[0]
//      }
//  }
//  console.log(foodGroup);

//  let combineFruit=(["apple", "pear"],
//                    ["cake", "pie"],
//                    ["carrot"])
//=> {
    //     fruit: ["apple", "pear"],
    //     sweets: ["cake", "pie"],
    //     vegetables: ["carrot"]
    //  }


//------------------------------------
    ////     3   Using deconstructing to use the property names as variables.  Destructure the object in the parameter

//     const vacation = {  
//         location: "Burly Idaho",
//         duration: "2 weeks"
//       };
      
//     //   function parseSentence(_________){
//     //     return `We're going to have a good time in ${location} for ${duration}`
//     //   }
// travelInfo = () => {
// let {location, duration} = vacation;
// return `We're going to have a good time in ${location} for ${duration}`
// }
// console.log(travelInfo());

//---------------------
// let returnFirst = items => { return firstItem = items[0]}
// console.log(returnFirst);
    // const firstItem = items[0]; /*change this line to be es6*/
    // return firstItem


//-----------------------
//------------Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:
// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     let firstFav = favoriteActivities[1];
//     let secondFav = favoriteActivities[4];
//     let thirdFav = favoriteActivities[0]
//     return `My top three favorite activities are, ${firstFav} ,${secondFav} and ${thirdFav}`;
// }
// console.log(returnFavorites(favoriteActivities));
//returnFavorites(favoriteActivities)


//----------------------------------------
// function combineAnimals() {
//     let animal = realAnimals.concat(magicalAnimals, mysteriousAnimals)
//     return animal
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// //combineAnimals.concat(realAnimals, magicalAnimals, mysteriousAnimals); 
// console.log(combineAnimals());

// ["dog", "cat", "mouse", "jackolope", "platypus"]


//------------------------------------------
// const product = (a, b, c, d, e) => {  
//     let numbers = [a,b,c,d,e];
  
//     return numbers.reduce((acc, number) =>  acc * number, 1)
//   }


//-------------------------------------
// let unshift = (array, ...second) => { 
//     return [...second, ...array]
// }
