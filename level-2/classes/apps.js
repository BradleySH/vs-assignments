//  

class Player(name, totalCoins, status, hasStar, setName){


setName(namePicked){
    //mario or luigi
    // set name to Mario or Luigi
}
gotHit(status){
    //  powered up, Big, small, dead
}
gotPowerUp(){
    //small \, big , power up
}
gameActive(){
    //if false status is dead
}
addCoin(){
    //  adds coin in totalCoins
}
print(){
    // prints to the console the name, totalCoins, status, and star properties
    // Name: Luigi, 
    // Status: small, etc, etc
}
}

//  random range function that returns 0,1, or 2
//If the value is 0 call the gotHit() function on the object.
// If the value is 1 call the gotPowerup() function on the object
// If the value is 2 call the addCoin() function

// call the print Method on the object

//  Now put the random range function inside a setInterval function that ends after gameActive  === false