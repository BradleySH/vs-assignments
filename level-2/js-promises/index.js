
// resolve - .then()
// reject - .catch()


//  when a function returns a promis its call a -- thenable

function flipCoin(){
    return new Promise((resolve, reject) =>{
        const randomNum = Math.floor(Math.random() * 2)

        if(randomNum === 0){
            resolve("Heads")
        } else if(randomNum === 1){
            reject("Tails")
        }

    })

}

// flipCoin()
//     .then(response => console.log("Resolved: " + response))
//     .catch(error => console.log("Rejected: " + error))

//Promise.resolve("Something").then(response => console.log(response))

function getData(){
    return new Promise((resolve) => {
        setTimeout(() => resolve("HELLO WORLD"), 3000)
    })
}
getData()
    .then(res => console.log(res))
    .catch(err => console.log(err))