// Input -> Process -> Output

//  High order array method
// .map()
//  it will always return: A new array the same size as the input array
// purpose:  allows you to take an array of data and create a new array of data from it

// const arr = [1,2,3,4,5,6,7,8]
// // sets up a for loop 
// const result = arr.map(function(num){  // arr[i]
//     return num + 10 

// })

// console.log(result);


// // ES6 Syntax

// const result = arr.map(num => num + 10)


// OBJECTS

// const users = [
//     {name: "joe"},
//     {name: "steve"},
//     {name: "lisa"}
// ]

// const result = users.map(function(user){
//     return user.name
// })
// console.log(result);


//    .filter()
//  returns: A new array with only the filtered out items from the original array 
//  purpose: Reducing a data set into a sub-data set.
// Ex: Initial array has all the movies ( action, fantasy, horror)
//             you could use filter to return an array with only the action movies


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const result = arr.filter(function(num){
// //     if(num % 2 === 0 ){
// //         return true
// //     }
// // })

// // ES6 
// // you can get rid of the ? true : false and it will still work the same in this instance
// const result = arr.filter(num => num % 2 === 0 ? true : false)
// console.log(result);

//  filter to return movies with the genre action  

//  const movies = [
//      { name: "movie1", genre: "horror" },
//      { name: "movie2", genre: "action" },
//      { name: "movie3", genre: "action" },
//      { name: "movie4", genre: "horror" }
//  ]

// //  const result = movies.filter(function(movie){
// //      if(movie.genre === "action"){
// //          return movie
// //      }
// //  })

//  const result = movies.filter(movie => movie.genre === "action")
//  console.log(result);


//    For Each, Find & Find Index

// const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// const users = [
//     { name: "joe"},
//     { name: "julie"},
//     { name: "rick"}
// ]

//   .forEach
// returns: Undefined
// purpose: used in place of a for-loop  will never assign a variable
//  caveat:  For-Loops allow you to customize where the loop starts, stops, and increments by.
//  forEach will alwaysd loop the entire length of the array.
// const newArr = []

// arr.forEach(function(num){
//     if(num % 2 === 0){
//         newArr.push(num)
//     }
// })
// console.log(newArr);

// arr.forEach(num => num % 2 === 0 && newArr.push(num))
// console.log(newArr);



//   .find()
//  returns: The first item if finds in the array that matches your criteria
//  purpose: Finding an item in an array
// const result = users.find(function(user){
//     if(user.name === "julie"){
//         return user
//     }
// })
// console.log(result);




//   .findIndex()
//   Returns: The index number of the first item in the array that matches your criteria
//   Purpose:  Finding the index number of an item in an array

// const userIndex = users.findIndex(function(user){
//     if(user.name === "joe"){
//         return true
//     }
// })
// console.log(userIndex);



//    SOME & EVERY
//  Both return Booleans

//const names = ["Jack", "John", "Jill", "Joseph", "Jackie", "Steve"]


//   .some()
//   Returns: returns true if at least  one item in the array matches your criteria.
//   Purpose:  to see if something exists in the array
// const result = names.some(function(name){
//     if(name[0] === "S"){
//         return true
//     }
// })
// console.log(result);



//   .every()
//  Returns: returns true if EVERY item in the array matches your criteria, false if otherwise
//   Purpose: TO see if everything in an array matches your criteria
// const result = names.every(function(name){
//     if(name[0] === "J"){
//         return true
//     }
// })
// console.log(result);

// const result = names.every(name => name[0] === "J")

// console.log(result);



//    SORT
//  Returns:  The array sorted BUT sort also mutates the original array, so capturing the returned value is not necessary
//  Purpose: to sort an unsorted array of items.

//const arr = [34, 6, 22, 1, 6, 44, 3, 64, 234, 5]

// arr.sort(function(a, b){
//     return a - b
// })
// console.log(arr);

// arr.sort((a, b) => a - b)
// console.log(arr);


//    REDUCE

//  .reduce()
//  Returns: Whatever you want it to!  
//  Purpose:  Take an array of data and reduce it into a small or completely different data set.

//  1 - reduce the array of numbers into a sum of all the numbers  (final, current)
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const result1 = nums.reduce(function(final, num){
//     final += num
//     return final

// })
// console.log(result1);


//  2 - reduce the users to an array of strings of the users first and last names
// const users = [
//     { fName: "joe", lName: "smithy"},
//     { fName: "tina", lName: "johnson"},
//     { fName: "rick", lName: "sanchez"},
// ]
// const result = users.reduce(function(final, user){
//     final.push(user.fName + " " + user.lName)
//     return final

// }, [])
// console.log(result);


//  3 - reduce the array into a count of how many people voted
// const voters = [
//     { name: "steve", voted: true },
//     { name: "janet", voted: true },
//     { name: "rebecca", voted: false },
//     { name: "harvey", voted: true }
// ]

// const voteCount = voters.reduce(function(final, voter){
//     if(!voter.voted){
//         final++
//     }
//     return final

// }, 0)

// console.log(voteCount);

//  Return an object that has a count who voted and who didnt
// { didVote : 3, didntVote: 1}
// const voterObj = voters.reduce(function(final,voter){
//     if(voter.voted){
//         final.didVote++
//     } else{
//         final.didntVote++
//     }
//     return final

// }, { didVote: 0, didntVote: 0 })

// console.log(voterObj);