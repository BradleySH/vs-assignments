const form = document["my-form"]

// SUBMIT EVENT
form.addEventListener("submit", function(event){
    event.preventDefault()
    
    const firstName = form.firstName.value
    const lastName = form.lastName.value
    form.firstName.value = "" 
    form.lastName.value = ""

    // 1 
    const h1 = document.createElement("h1")

    //2  <h1>Harry Potter</h1>
    h1.textContent = firstName + " " + lastName

    //3 append
    document.getElementsByTagName("body")[0].append(h1)


})
