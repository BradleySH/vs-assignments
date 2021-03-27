
/*  const officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];
 
  const result = officeItems.filter(item => item.length > 7)

  console.log(result);
 
 const items = officeItems.filter(function(value){
     return value === "computer";
 })
 console.log(items);*/


 /*var peopleWhoWantToSeeMadMaxFuryRoad = [
     {
       name: "Mike",
       age: 12,
       gender: "male" || "him"
     },{
       name: "Madeline",
       age: 80,
       gender: "female" || "she"
     },{
       name: "Cheryl",
       age: 22,
       gender: "female" || "she"
     },{
       name: "Sam",
       age: 30,
       gender: "male" || "him"
     },{
       name: "Suzy",
       age: 4,
       gender: "female" || "she"
     }
   ];
   const HIM = "male"
   const SHE = "female"

    for(let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "  is not old enough to see Mad Max." + " do not let " + peopleWhoWantToSeeMadMaxFuryRoad[i].gender + " in.");
        } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough " + peopleWhoWantToSeeMadMaxFuryRoad[i].gender + " is good to see Mad Max.");
        }
    }; */

// odd numbers its on & even numbers its off
const arr = [2, 3, 2];

for (let i = 0; i < arr.length; i++){
    if(arr[i].reduce % 3 === 0 ){
        console.log(arr[i]);
    }
}