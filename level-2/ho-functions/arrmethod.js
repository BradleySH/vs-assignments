const peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
];

// function filteredOfAge(){
//     const ages = peopleArray.filter(function(num){
//         if(num.age > 18 ){
//             return num
//         }
//     })
//     console.log(ages);


// }
// filteredOfAge()

// function sortedOfPeople(){
//     const order = peopleArray.sort((a, b) => a - b)
//     console.log(order);

// } 
// sortedOfPeople()

// function mapOfNames(){
//     const names = peopleArray.map(function(name){
//         return "<li>" + name.firstName + name.lastName + " is " + name.age + "</li>"


//     })
//     console.log(names);

// }
// mapOfNames()

function sortedOfAge(arr){
const result = arr
.filter(person => person.age > 18)
.sort((a, b) => {
    if(a.lastName < b.lastName){
        return -1;
    }
    if(a.lastName > b.lastName){
        return 1;
    }
    return 0
})
.map(name => {
    return "<li>" + name.firstName + " " + name.lastName + " is " + name.age + "</li>";
})

return result
}
console.log(sortedOfAge(peopleArray));