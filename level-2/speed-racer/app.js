
 function clickCounter() {
    
    //numberOfClicks += 1;
    if(localStorage.numberOfClicks){
        localStorage.numberOfClicks = Number(localStorage.numberOfClicks) + 1;
    } else {
        localStorage.numberOfClicks = 1;
    }
    document.getElementById("click-result").innerHTML = localStorage.numberOfClicks

    


 }