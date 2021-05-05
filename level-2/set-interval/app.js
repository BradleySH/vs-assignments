//  JS TIMING FUNCTIONS

// setInterval
//Purpose: Call a function on a repeated basis.( example: every 1 second)

// setTimeout
//  Purpose: Call a function after a certain amount of time

//  When used both setInterval and setTimeout return and ID.  Tha ID can be given to clear Interval or clearTimeout to stop the timers


const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const timer = document.getElementById("timer")

let count = 0 
let intervalId
timer.textContent = count

function incrementTimer(){
    count++ 
    timer.textContent = count
}

startBtn.addEventListener("click", () => {
    intervalId = setInterval(incrementTimer, 1000)
})

stopBtn.addEventListener("click", () => {
    clearInterval(intervalId)
})

//  setTimeout can be switched with setInterval