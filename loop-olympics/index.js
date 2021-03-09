// nested loops 
// let arrayOfArrays = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
//for (let i = 0; i <arrayOfArrays.length; i++){
//    for (let j = 0; j < arrayOfArrays[i].length; j++){
//        console.log(arrayOfArrays[i][j]);
//    }
//};

// 1. console.log the number 6
//for (let i = 1; i < arrayOfArrays.length; i++){
//    for (let j = 2; j <arrayOfArrays[i].length; j++){
//       console.log(arrayOfArrays[i][j]);
//    }
//} 

// 2. log number  1
//console.log(arrayOfArrays[0][0]);

// 3 log number 9
//console.log(arrayOfArrays[2][2]);


// Also known as Matrix or Grid

// 1. write a for loop that prints to the console the number 0 through 9
// 2. write a for loop that prints to the console 9 through 0
// 3. write a for loop that prints these fruits to the console
//let fruit = ["banana", "orange", "apple", "kiwi"]

// 1.
// for (let i = 0; i <= 9; i++){
//     console.log(i);
// }

// 2.
// for (let i = 9; i >= 0; i--){
//     console.log(i);
// }

// 3.
// const fruit = ["banana", "orange", "apple", "kiwi"];
// for (let i = 0; i < fruit.length; i++){
//     console.log(fruit[i]);
//}

// Bronze Medal 

// 1.
 //const bronze = [];

// for (let i = 0; i <= 9; i++){
//     console.log(bronze.push(i));
// };

// 2.
// for (let i = 0; i <= 100; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }

// 3. 
// let fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];

// for (let i = 0; i < fruit.length; i++){
//     if(i % 2 === 1){
//         console.log(fruit[i]);
//     }
//}


// SILVER MEDAL 
// var peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]
  
//    const names = ["Harrison Ford", "Vladimir Putin"] // names
//    const occupations = ["Singer", "Entertainer"] // occupations

  // 1.
  //for (let i = 0; i < peopleArray.length; i++){
  //    console.log(peopleArray[i].name);
  //}
  
  // 2. 
//  for(let i = 0; i < peopleArray.length; i++){
//      if(peopleArray.concat(names)){
//          console.log(peopleArray[i].names);
//      }
//  }

// 3. 

  

// GOLD MEDAL
let arrayOfArrays = {
[[0, 0, 0] 
[0, 0, 0] 
[0, 0, 0]]

},

for (let i = 0; i < arrayOfArrays.length; i++){
    for(let j = 0; j < arrayOfArrays[i].length; j++){
        console.log(arrayofArrays[i][j]);
    }
};