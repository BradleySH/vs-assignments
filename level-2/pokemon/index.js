

const xhr = new XMLHttpRequest()
xhr.readyState
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        console.log(JSONdata);
        showData(data.objects[0].pokemon)
        

    }
}
// let allPokemon = pokemon.map(function(element){
//     return `${element.name} ${element.id}` 
// })
// const pokemon = [
//     {
//         name: showData(data.objects[0].pokemon),
//         id: showInfo(data.objects[0].pokemon)
//     }
// ]

function showData(arr) {
    for (let i = 0; i < arr.length; i++) {
        const h3 = document.createElement("h3")
        h3.textContent = arr[i].name
        document.body.appendChild(h3)
        
    }
}
 function showInfo(arr){
     for(let j = 0; j < arr.length; j++){
         const h4 = document.createElement("h2")
         h4.textContent = arr[j].resource_uri
         document.body.appendChild(h4)
    }
 }