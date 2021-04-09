// Web Storage 

//  Local Storage
//  Session Storage

//saving data on the web browser

//  JSON - JavaScript Object Notation

//      JSON.strigify => turning JS into JSON
//      JSON.parse => turns JSON into JS


// Setter - save data in local storage (key = value pairs)
localStorage.setItem("name", "steve")
localStorage.setItem("age", 10)
localStorage.setItem("isAlive", true)
localStorage.setItem("friends", JSON.stringify(["mark", "tina", "jay"]))
localStorage.setItem("address", JSON.stringify({street: "123 Street", city: "NYC"}))

// Getter
const name =localStorage.getItem("name")
const age = localStorage.getItem("age")
const isAlive = localStorage.getItem("isAlive")
const friends = JSON.parse(localStorage.getItem("friends"))
const address = JSON.parse(localStorage.getItem("address"))

console.log(address);

//  Remove
localStorage.removeItem("age")

//  local stroage is an object


