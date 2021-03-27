

let people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
let alphabet = "abcdefghijklmnopqrstuvwxyz"

let newPeople = people.map(function(e){
    return e + " :"
})
//console.log(newPeople);

let newAlphabet = alphabet.toUpperCase().split("");

//funtion that takes 2 arrays as parameters  array 1 = name array 2= alphabet
//using for loops within a for loop create and return an array 

function forception(newPeople, newAlphabet){
    for (let i = 0; i < newPeople.length; i++){
        for (let j = 0; j < newAlphabet[i].length; j++){

        }
    }
}

let newArr = newPeople[0].concat(newAlphabet)
console.log([newArr]);

