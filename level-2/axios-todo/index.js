//  plan 







//  todo list :
//accepts input of a form
// create form
const form = document.createElement("form")
const title = document.createElement("input")
const desc = document.createElement("input")
const price = document.createElement("input")
const img = document.createElement("input")
const submit = document.createElement("button")
submit.textContent = "Submit"
title.setAttribute("type", "text")
title.setAttribute("placeholder", "Item Name")
desc.setAttribute("type", "text")
desc.setAttribute("placeholder", "Item Description")
price.setAttribute("type", "text")
price.setAttribute("placeholder", "Item Price")
img.setAttribute("type", "url")
img.setAttribute("placeholder", "Image URL")
submit.setAttribute("type", "submit")
form.append(title, desc, price, img, submit)
form.className = "new-todo"
//document.body.append(form)
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const newTodo = {
        title: title.value,
        description: desc.value,
        price: price.value,
        imgUrl: img.value
    }
    
    axios.post("https://api.vschool.io/bradleyhorlander/todo/", newTodo)
    .then(res => res.data)
    .catch(err => console.log(err))
})
document.body.append(form)
//document.body.append(newTodo())
// get request
axios.get("https://api.vschool.io/bradleyhorlander/todo/")
    .then(res => addData(res.data))
    .catch(err => console.log(err))
function addData(data){
    for(let i = 0; i < data.length; i++){
        const dataDiv = document.createElement("div")
        const dataTitle = document.createElement("h2")
        const dataDesc = document.createElement("p")
        const dataPrice = document.createElement("h3")
        let dataImg = document.createElement("img")
        const dataCheckbox = document.createElement("input")
        const dataDeleteButton = document.createElement("button")
        //input type checkbox, checked
        dataCheckbox.checked = data[i].completed;
        dataCheckbox.setAttribute("type", "checkbox")
      //title
        dataTitle.textContent = data[i].title;
        dataTitle.className = "title";
        dataDesc.textContent = data[i].description;
        dataPrice.textContent = data[i].price
        dataImg.src = `${data[i].imgUrl}`;
        console.log(data[i].imgUrl)
        dataImg.style.height = "100px";
        dataImg.style.width = "75px"
        dataDeleteButton.textContent = "Delete";
        dataDiv.append(dataTitle, dataPrice, dataDesc, dataCheckbox, dataImg, dataDeleteButton);
        dataDiv.className = "todo-list";
        document.body.append(dataDiv);


         const updateObj =  {
             completed: true
         }
          const incompleteObj = {
              completed: false
          }
        // axios.put("https://api.vschool.io/bradleyhorlander/todo" + data._id, updateObj)
        // .then(res => alert(`${data[i]._id} Item Completed`))
        // .get(err => console.log(err))
        //eventlistener
        
        dataCheckbox.addEventListener("click", (e) => {
            e.preventDefault
            //if(data[i].completed)
             if(dataCheckbox.checked === true ){
            axios.put(`https://api.vschool.io/bradleyhorlander/todo/${data[i]._id}`, updateObj)//{completed: true})
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
          } else {
              axios.put(`https://api.vschool.io/bradleyhorlander/todo/${data[i]._id}`, incompleteObj)
              .then(res => console.log(res))
              .catch(err => console.log(err))
        }})


        dataDeleteButton.addEventListener("click", () => {
            axios.delete("https://api.vschool.io/bradleyhorlander/todo/" + data[i]._id)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        })
    }
}

// ----------- CSS ----------------------
document.body.style = "margin: 0; box-sizing: border-box; background-color: #d3d3d3; padding: 0;"
// const header = document.createElement("h1");
// header.textContent = "AXIOS TODO"
// header.append(header)
