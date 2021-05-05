// Why is ageRange not defined?
// answer because its not outside of the function, its not global.
// not withing the curly brackets

// How can we fix this function with const or let?
// answer using const ageRange  = function getAgeRange(person)

// how can we fix this function avoiding the use of let or const
//once its been defined by const you cant change it so you would only be able to use it once

// Why would you use const or let?
//  answer - could probably use a for loop and set the paramters that way 

function getAgeRange(age){
    let ageRange
    if(age < 18){
         ageRange = "Child"
    } else if (age >= 18 && age <80){
         ageRange = "Adult"
    } else {
         ageRange = "Elderly Person"
    }

    return ageRange
}

//  What would the above function potentially look like if we destructed the person parameter?

const person = {name: "Andrea", age: 27 }
// Why can we add .ageRange to person when we used const to define person?
//  becausde we have defined what .ageRange is in the getAgeRange function
person.ageRange = getAgeRange(person)  // feel free to comment out lines that cause errors

// or lines that clutter the console
console.log(`The ${person.ageRange}, ${person.name}, is ${person.age} years old.`);
// change the above concatenated string into a template literal

const springMonths = ["March", "April", "May"]
const fallMonths = ["September", "October", "November"]
//  replace this line with one that uses a spread operator to do the same thing as concat
//const fringeMonths = springMonths.concat(fallMonths)
const fringeMonths = [...springMonths, ...fallMonths]

console.log(springMonths, fallMonths, fringeMonths);