const form1 = document.getElementById("goomba")

form1.addEventListener("submit", (event) => {
    event.preventDefault()

    for(let i = 0; i < goomba.length; i++){
        //console.log(goomba[i]);
        let clickedButton = event.target; 
        let input = clickedButton.parentElement.children[2];
        let goombaKilled = input.value;
        let newValue  = parseInt(goombaKilled);
        input.value = newValue

        function goombaBaddies() {
            let amount = document.querySelectorAll(".coinAmount");
            let total = 0;
            for(let i = 0; i < amount.length; i++){
                if(parseInt(amount[i].value)){
                    total += parseInt(amount[i].value);
                }
            }
            document.getElementById("total").value = total * 5
        }
        

    }
    goombaBaddies()
})

const form2 = document.getElementById("bombs")

form2.addEventListener("submit", (event) => {
    event.preventDefault()

    for(let i = 0; i < bombs.length; i++){
        //console.log(bombs[i]);
        let clickedButton = event.target; 
        let input = clickedButton.parentElement.children[2];
        let bombsKilled = input.value;
        let newValue = parseInt(bombsKilled);
        input.value = newValue

        function bombBaddies() {
            let amount = document.querySelectorAll(".coinAmount");
            let total = 0;
            for(let i = 0; i < amount.length; i++){
                if(parseInt(amount[i].value)){
                    total += parseInt(amount[i].value);
                }
            }
            document.getElementById("total").value = total * 7
        }

    }
    bombBaddies()
})
const form3 = document.getElementById("cheep")

form3.addEventListener("submit", (event) => {
    event.preventDefault()

    for(let i = 0; i < cheep.length; i++){
        //console.log(cheep[i]);
        let clickedButton = event.target; 
        let input = clickedButton.parentElement.children[2];
        let cheepsKilled = input.value;
        let newValue = parseInt(cheepsKilled);
        input.value = newValue

        function totalBaddies() {
            let amount = document.querySelectorAll(".coinAmount");
            let total = 0;
            for(let i = 0; i < amount.length; i++){
                if(parseInt(amount[i].value)){
                    total += parseInt(amount[i].value);
                }
            }
            document.getElementById("total").value = total * 11
        }

    }
    totalBaddies()
})
//   function totalBaddies() {
//       let amount = document.querySelectorAll(".coinAmount");
//       let total = 0;
//       for(let i = 0; i < amount.length; i++){
//           if(parseInt(amount[i].value)){
//               total += parseInt(amount[i].value);
//           }
//       }
//       document.getElementById("total").value = total
//   }

    

