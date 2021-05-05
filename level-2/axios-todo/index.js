//  plan 

const axios = require("axios")

//  todo list :
//accepts input of a form
// create form

// get todo items from API 
//  add items to the dom

//  title, description, img


//  make a post a request 



//  CHECKBOX  --> checked for completed items

// delete request 
//delete items from list

//https://api.vschool.io/bradleyhorlander/todo/
//  ID's are automatically generated


// get request
axios.get("https://api.vschool.io/bradleyhorlander/todo/")
.then(res => {
    addData(res.data)

})
axios.get(err => console.log(err))

function addData(data){
    for(let i = 0; i < data.length; i++){
        
        const title = document.createElement("h2")
        const desc = document.createElement("p")
        const img = document.createElement("img")
        const checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox")

        //input type checkbox, checked
        checkbox.checked = data[i].completed

        // <img src = "url"
        

        //add data to elements
        title.textContent = data[i].title
        desc.textContent = data[i].description
        img.setAttribute("width", "300px")

        div.append(title, desc, checkbox, img)
        todos.append(div)
//pu
        //eventlistener
        checkbox.addEventListener("click", (e) => {
            //if(data[i].completed)
            const updateObj = {
                completed: false

            }

            if(checkbox.checked === false){
             // item is completed
             // completed: false
            //  unchecking  is uncompleted 
            //completed: true
            //updateObj.completed = false
            // if checkbox.checked
            //updateObject = flase
            axios.put("https://api.vschool.io/bradleyhorlander/todo/", + [id], {completed: false})
            .then(res => console.log(res))
            .get(err => console.log(err))
        } else {
            //updatedObj.completed = true
            axios.put("https://api.vschool.io/bradleyhorlander/todo/", + [id], {completed: true})
            .then(res => console.log(res))
            .get(err => console.log(err))

        }
        axios.put("https://api.vschool.io/bradleyhorlander/todo/", + [id], {completed: true})
            .then(res => console.log(res))
            .get(err => console.log(err))


        })
    }
}


