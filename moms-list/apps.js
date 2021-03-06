

const form = document.getElementById("shop-item");
const itemList = document.getElementById("list");

// submit event
form.addEventListener("submit", function addItem(e){
    e.preventDefault();

    //itemList.addEventListener("click", addItem)
    const newItem = document.getElementById("new-item").value;
    // create element
    const li = document.createElement("li");
    li.className = "item-group";
    li.appendChild(document.createTextNode(newItem));

    //edit button
    const editBtn = document.createElement("button");
    editBtn.className = "edit";
    editBtn.appendChild(document.createTextNode("edit"));
    li.appendChild(editBtn);
    
    //delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);

    itemList.appendChild(li);
    
});

//edit button click event
const editItem = document.getElementById("edit");
itemList.addEventListener("click", function newEdit(e){
     if(e.target.classList.contains("edit")){
         let li = e.target.parentElement;
         li.appendChild(editItem);
     }
 });


// delete button click event
const deleteItem = document.getElementById("delete");
itemList.addEventListener("click", function removeItem(e){
    if(e.target.classList.contains("delete")){
        let li = e.target.parentElement; 
        itemList.removeChild(li);
    }
});


const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       let response = JSON.parse(xhttp.responseText); 
       let item = response.item;
       for(let i = 0;i < item.length; i++){
           output += "<li>"+item[i]+"</li>";
       }
    }
};
xhttp.open("GET", "items.json", true);
xhttp.send();


