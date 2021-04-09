const form = document.myForm

form.addEventListener("submit", (event) => {
    event.preventDefault()

        let firstName = form.elements["firstName"].value
        let lastName = form.elements["lastName"].value
        let age = form.elements["age"].value
        let gender = form.elements["gender"].value
        let city = form.elements["city"].value
        const checkedInputs = []
        for(let i = 0; i < form.diet.length; i++){
            if(form.diet[i].checked){
            checkedInputs.push(form.diet[i].value)

        }
        //return checkedInputs
    }

alert(
    "First Name: " + firstName +
    "\nLast Name: " + lastName +
    "\nAge: " + age +
    "\nGender: " + gender +
    "\nLocation: " + city +
    "\nDietary Restrictions: " + checkedInputs
)

})