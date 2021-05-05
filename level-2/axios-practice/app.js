//const axios = require("axios");

//const { default: axios } = require("axios");

//const { default: axios } = require("axios");

//const { default: axios } = require("axios");

//const { default: axios } = require("axios")

// const lukeSkywalker = axios.get("https://swapi.co/api/people/1");

// console.log(lukeSkywalker);

// axios.post('https://api.vschool.io/bradleyhorlander/todo/', newTodo).then(response => {
//     console.log(response.data);
// }).catch(error => {
//     console.log(error);
// });

//-----------------------------------------


//  Get requests with axios
// url: https://api.vschool.io/bradleyhorlander/todo

//  Get All
//  axios.get("https://api.vschool.io/bradleyhorlander/todo")
//      .then(response => {
//          for(let i = 0; i < response.data.length; i++){
//              const h1 = document.createElement("h1")
//              h1.textContent = response.data[i].title
//              document.body.appendChild(h1)

//          }
//         })
//      .catch(error => console.log(error))



// Get One
// axios.get("https://api.vschool.io/bradleyhorlander/todo/60902bacee6f8d3fc3fed64e")
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))


//----------------------------------------------------------

// POST request 
// Request Body

// const newTodo = {
//     title: "My third todo", 
//     description: "This is my 3rd Entry",
//     imgUrl: "https://unsplash.com/photos/W8NMMbnlsEI"

// }

// axios.post("https://api.vschool.io/bradleyhorlander/todo", newTodo)
// .then(response => console.log(response.data))
// .catch(error => console.log(error))


// const todoForm = document.todoform

// todoForm.addEventListener("submit", function(event){
//     event.preventDefault()

//     const newTodo = {
//         title: todoForm.title.value, 
//         description: todoForm.description.value,
//         imgUrl: todoForm.imgUrl.value
    
//     }
    
//     axios.post("https://api.vschool.io/bradleyhorlander/todo", newTodo)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))


// })

//-----------------------------------------------------

// DELETE request with axios

// const button = document.getElementById("delete-button")

// button.addEventListener("click", function(){
//     axios.delete("https://api.vschool.io/bradleyhorlander/todo/6090e202ee6f8d3fc3fed6a0")
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))
// })

//  axios.delete("https://api.vschool.io/bradleyhorlander/todo/6090e202ee6f8d3fc3fed6a0")
//  .then(response => console.log(response.data))
//  .catch(error => console.log(error))





// GET all todos
//  axios.get("https://api.vschool.io/bradleyhorlander/todo/6090e202ee6f8d3fc3fed6a0")
//       .then(res => console.log(res))
//       .catch(err => console.log(err))

//---------------------------------------------------------

//  PUT request with axios

// const updates = {
//     title: "I need to delete all my duplicates",
//     description: "I changed this as well"
// }

// axios.put("https://api.vschool.io/bradleyhorlander/todo/6090e00eee6f8d3fc3fed694", updates)  // request body 
// .then(response => console.log(response.data))
// .catch(error => console.log(error))

// const person = {
//     name: "Steve",
//     age: 20
// }
// const updates = {
//     name: "Dan"
// }

// const result = Object.assign(person, updates)
// console.log(result);




// GET all todos
//  axios.get("https://api.vschool.io/bradleyhorlander/todo")
//       .then(res => console.log(res))
//       .catch(err => console.log(err))

//------------------------------------------------------

// Updating a webpage

// GET's THE TODO's FROM THE DATABASE
function getData(){
    axios.get("https://api.vschool.io/bradleyhorlander/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}
// innerHTML 



// LISTS THE TODO TITLES TO THE DOM
function listData(data){
    //document.getElementById('todo-list').innerHTML = ""
    clearList()
    for(let i = 0; i < data.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = data[i].title
        document.getElementById('todo-list').appendChild(h1)
    }
}
function clearList(){
    const el = document.getElementById('todo-list')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}
getData()


// FORM FOR THE POST REQUEST
const todoForm = document["todo-form"]

todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value
    }
    
    todoForm.title.value = ""
    
    axios.post("https://api.vschool.io/bradleyhorlander/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})