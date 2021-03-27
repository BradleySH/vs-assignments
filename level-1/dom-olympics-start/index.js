// Qualifier Header and SubHeader
let pageHeader = document.getElementById("header");
let newHeader = document.createElement("h1");
newHeader.textContent = "JavaScript Made This";
pageHeader.append(newHeader);
newHeader.style.textAlign = "center";

//subeader my name
let newSpan = document.createElement("span");
let myName = newSpan.textContent = "Brad ";

let subHeader = document.createElement("h4");
subHeader.textContent = "Wrote the JavaScript";
header.append(subHeader);
subHeader.prepend(myName);
subHeader.style.textAlign = "center";

// Bronze Custom JavaScript Conversation
//Clear Button
let messagesDiv = document.querySelector("div.messages");
const clearBtn = document.getElementById("clear-button");
clearBtn.addEventListener("click", function() {
    messagesDiv.innerHTML = "";
});

//text already in box
const left = document.getElementsByClassName("message left");
left[0].textContent = "I have something serious we need to talk about";
left[1] .textContent = "If you are at work then who is downstairs?!?";

const right = document.getElementsByClassName("message right");
right[0].textContent = "I cant talk I am at work";
right[1].textContent = "Its me you idiot I work from home";


// Silver Theme buttons

let select = document.getElementById("theme-drop-down");
let value = document.getElementById("value");
const lefty = document.querySelectorAll(".messages .left");
const righty = document.querySelectorAll(".messages .right");

select.addEventListener("change", function result(event){


if(event.target.value === "theme-one") {
    lefty.forEach(item => {
        item.style.backgroundColor = "blue"
        item.style.color = "white"
        item.style.borderRadius = "15px"
        item.style.opacity = "0.9"
    })
    righty.forEach(item => {
        item.style.backgroundColor = "gray"
        item.style.color = "white"
        item.style.borderRadius = "15px"
        item.style.opacity = "0.5"
    })
}
else if(event.target.value === "theme-two"){
    lefty.forEach(item => {
        item.style.backgroundColor = "red"
        item.style.color = "white"
        item.style.borderRadius = "15px"
        item.style.opacity = "0.7"
    })
    righty.forEach(item => {
        item.style.backgroundColor = "darkgray";
        item.style.color = "white"
        item.style.borderRadius = "15px"
        item.style.opacity = "0.7"
    })
}
});

// Gold Adding more messages
//const textBox = document.getElementById("input");
const form = document["input-message"]

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const textMsg = form.textMsg.value;
    form.textMsg.value = "";
    
    const newMsge = document.createElement("div")

    div.textContent = value "";

    document.getElementsByTagName("messages")[0].append("div");

});
//const button = document.getElementById("button").addEventListener("click", function(){
    
//});

const even = document.querySelectorAll("div:nth-child(even)")
const odd = document.querySelectorAll("div:nth-child(odd)")
for (var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = "theme-one || theme-two"
    even[i].style.backgroundColor = "theme-one || theme-two"
}
