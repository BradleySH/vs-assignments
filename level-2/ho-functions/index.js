
//  1
// const arr = [2, 5, 100]

// const result = arr.map(num => num * 2)

// console.log(result);


//  2
// const numbers = [2, 5, 100]

// const result = numbers.map(function(numbers){
//     return numbers + ""
// })
// console.log(result);

//   3

// const arr = ["john", "JACOB", "jinGleHeimer", "schmidt"]

// const result = arr.map(function capitalizeNames(arr){
//      return arr[0].toUpperCase() + arr.slice(1).toLowerCase()
// })
// console.log(result);

//   4

// 

//   5
// const names = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kanye West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]

// const result = names.map(function(names){
//     if(names.age < 80){
//         return names.name + " is under age!!";
//     } else{
//         return names.name + " can go to The Matrix"
//     }
// })
// console.log(result);

//   6
// const names = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kanye West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]

// const result = names.map(function(names){
//     return "<h1>" + names.name + "</h1>" + "<h2>" + names.age + "</h2>"
// })
// console.log(result);


//  .filter()  Exercises

//   1 
 //const arr = [3, 6, 8, 2]

// const result = arr.filter(num => num > 5)
// console.log(result);

//    2 
// const result = arr.filter(num => num % 2 === 0)
// console.log(result);


//   3
// const arr = ["dog", "wolf", "by", "family", "eaten", "camping"]

// const result = arr.filter(function(word){
//     if(word.length <= 5){
//         return word
//     }
// })
// console.log(result);

//  4

// const arr = [
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]

// const result = arr.filter(function(illum){
//     if(illum.member === false){
//         return illum
//     }
// })
// console.log(result);

// const arr = [
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
// ]

// const result = arr.filter(function(person){
//     if(person.age >= 18 ){
//         return person
//     }
// })
// console.log(result);


//  SORT EXERCISE

//  1 
// const arr = [1, 3, 5, 2, 90, 20]

// arr.sort((a, b) => a - b)
// console.log(arr);

//   2
// arr.sort((a, b) => b - a )
// console.log(arr);

//   3
//const arr = ["dog", "wolf", "by", "family", "eaten"]

// arr.sort((a, b) => a.length - b.length )
// console.log(arr);

//   4
// arr.sort((a, b) => a.localeCompare(b))
// console.log(arr);

//   5
// const arr = [
//     { name: "Quiet Samurai", age: 22 },
//     { name: "Arrogant Ambassador", age: 100 },
//     { name: "Misunderstood Observer", age: 2 },
//     { name: "Unlucky Swami", age: 77 }
// ]

// arr.sort((a, b) => a.age - b.age)
// console.log(arr);


//   1 
 //const arr = [1, 2, 3]

// const result = arr.reduce(function(final, num){
//     final += num
//     return final
// })
// console.log(result);

//   2
// const result = arr.reduce(function(final, num){
//     final.push(num)
//     return final
// }, []).join("")
// console.log(result);

//   3

// const voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]

// const result = voters.reduce(function(final, voter){
//     if(voter.voted){
//         final.didVote++
//     } 
//     return final

// }, { didVote: 0})
// console.log(result);

// for(i = 0; i < voters.length; i++)
// if(voters.voted === true){

// }
// console.log(voters[i]);

//   4
// const arr = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ]

// const result = arr.reduce(function(final, shop){
//     final += shop.price
//     return final

// }, 0)
// console.log(result);


// //   5 
// const arr = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ];
// const result = Array.prototype.concat.apply([], arr)
// console.log(result);


//    6
const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const voterResult = voters.reduce(function(final, voter){
    //const ageGroup1 = voter.age >= 18 && voter.age <= 25
    if(voter.age <= 25){
        final.numYoungPeople++
    if(voter.voted === true){
        final.numYoungVotes++
    }
}
    if(voter.age >= 26 && voter.age <= 35){
        final.numMidsPeople++
    if(voter.voted === true){
    final.numMidVotesPeople++
    }
}
    if(voter.age >= 36 && voter.age <= 55){
        final.numOldsPeople++
    if(voter.voted === true){
        final.numOldVotesPeople++
    }
}
    return final
}, { numYoungVotes: 0,
     numYoungPeople: 0,
     numMidVotesPeople: 0,
     numMidsPeople: 0,
     numOldVotesPeople: 0,
     numOldsPeople: 0
    },)

    console.log(voterResult);