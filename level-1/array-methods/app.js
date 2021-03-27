var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//1 
vegetables.pop()
//console.log(vegetables);

//2
fruit.shift()
//console.log(fruit);

//3
let orangeIndex = fruit.indexOf("orange")
//console.log(orangeIndex);

//4
let fruitArr = fruit.push(orangeIndex)
//console.log(fruit);

//5
console.log(vegetables.length);

//6
let vegetablesArr = vegetables.push(vegetables.length)
//console.log(vegetables);

//7
 let food = fruit.concat(vegetables);
 console.log(food);

 //8
food.splice(4, 2);
console.log(food);

//9
let newArr = food.reverse();
console.log(newArr);

let newFruit = newArr.toString();
console.log(newFruit);
