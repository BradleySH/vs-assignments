
const form = document["plus"]

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const add1 = form.add1.value
    const add2 = form.add2.value
    form.add1.value = ""
    form.add2.value = ""


     const h3 = document.createElement("h3")
     h3.textContent = Number(add1) + Number(add2)
     document.getElementsByClassName("result")[0].append(h3);
    
})

const sub = document["minus"]

sub.addEventListener("submit", (event) => {
    event.preventDefault()

    const sub1 = sub.sub1.value
    const sub2 = sub.sub2.value
    sub.sub1.value = ""
    sub.sub2.value = ""

     const h3 = document.createElement("h3")
     h3.textContent = Number(sub1) - Number(sub2)
     document.getElementsByClassName("sub-result")[0].append(h3);
    
})

const mult = document["times"]

mult.addEventListener("submit", (event) => {
    event.preventDefault()

    const mult1 = mult.mult1.value
    const mult2 = mult.mult2.value
    mult.mult1.value = ""
    mult.mult2.value = ""

     const h3 = document.createElement("h3")
     h3.textContent = Number(mult1) * Number(mult2)
     document.getElementsByClassName("mult-result")[0].append(h3);
    
})

// form.addEventListener("submit", function(event){
//     event.preventDefault()
    
//     const firstName = form.firstName.value
//     const lastName = form.lastName.value
//     form.firstName.value = "" 
//     form.lastName.value = ""

//     // 1 
//     const h1 = document.createElement("h1")

//     //2  <h1>Harry Potter</h1>
//     h1.textContent = firstName + " " + lastName

//     //3 append
//     document.getElementsByTagName("body")[0].append(h1)


// })