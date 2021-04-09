
let increase = document.getElementsByClassName("inc-button")
let decrease = document.getElementsByClassName("dec-button")

const goombaAmount = document.getElementById("goomba1")

//  increase button
const goomba = document.getElementById("goomba-count1")
for(let i = 0; i < increase.length; i++){
    let button = increase[i];
    button.addEventListener("click", (event) => {
        let clickedButton = event.target;
        let input = clickedButton.parentElement.children[2];
        let goombaAmount = input.value;
        let newValue = parseInt(goombaAmount) + 1
        input.value = newValue

        totalBaddies();



    })

}

//   decrease button
for(let i = 0; i < decrease.length; i++){
    let button = decrease[i];
    button.addEventListener("click", (event) => {
        let clickedButton = event.target;
        let input = clickedButton.parentElement.children[2];
        let inputValue = input.value;
        let newValue = parseInt(inputValue) - 1
        if (newValue >=0){
            input.value = newValue
        }
        else{
            input.value = 0;
            alert(" Cant kill negative baddies")
        }
        totalBaddies()



    })

}


function totalBaddies() {
    let amount = document.querySelectorAll(".coinAmount");
    let total = 0;
    for(let i = 0; i < amount.length; i++){
        if(parseInt(amount[i].value)){
            total += parseInt(amount[i].value);
        }
    }
    document.getElementById("total").value = total

}
