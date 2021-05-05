

let status = ["Powered Up", "Big", "Small", "Dead"]

class Player{
    constructor(name){
        this.name = name
        this.totalCoins = 0
        this.status = "Small"
        this.hasStar= false
        this.gameActive = true

    }
    gotHit = () => {
        if(this.hasStar === true){
            console.log(`You have a star to protect you!`);
            this.hasStar = false
            this.status = "Big"
            return this.status
        }else {
            if(this.status === "Big"){
                console.log("screams!");
                this.status = "Small"
                this.hasStar = false
                return this.status
        }else if(this.status === "Small"){
            console.log(`${this.name} is dead.\nYour final score is: ${this.totalCoins}`);
            this.gameActive = false
            
        }
    }//  powered up, Big, small, dead
    }

    gotPowerUp = () => {
        if(this.status === "Small"){
            this.hasStar = false
            this.status = "Big"
        }else if(this.status === "Big"){
            this.status = "Powered Up"
            this.hasStar = true
            console.log(`You got a star ⭐️ queue the fast paced music!`);
        }

        //small \, big , power up
    }
    gameActive = () => {
        if(status === "Dead"){
            this.gameActive = false
        } //else if(status === "Small", "Big", "Powered Up"){
            
    
        //if false status is dead
    }
    
    addCoin = () => {
        this.totalCoins = this.totalCoins + 1
        //  adds coin in totalCoins
    }
    print = () => {
        console.log(`Name: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}`);
        // prints to tnsole the name, totalCoins, status, and star properties
        // Name: Luigi, 
        // Status: small, etc, etc
    }
}
const randomNumRange = (max) => {
    let randomNum = Math.floor(Math.random() * max)
    return randomNum

};

const playerOptions = (player) => {
     let choice = randomNumRange(3)
     if(choice === 0){
         return player.gotHit()
          
     } else if(choice === 1){
         return player.gotPowerUp()
          
     } else {
         return player.addCoin()
          
     }
 };
 
 


//   setName = (namePicked) => {
//      let pick = randomNumRange(2)
//      let mario = new Player("Mario")
//      let luigi = new Player("Luigi")
//      if(pick === 1){
//        return namePicked = mario
//      } else {
//      return namePicked === luigi
//      }
// //    //mario or luigi
// //   // set name to Mario or Luigi
//    }
 function playGame(player){
    const runInterval = setInterval(() => {
        playerOptions(player)
        player.print()
        if(player.gameActive === false){
            clearInterval(runInterval)
        };

    }, 1000)
};
let mario = new Player("Mario")
let luigi = new Player("Luigi")
playGame(mario)


    //  random range function that returns 0,1, or 2
    //If the value is 0 call the gotHit() function on the object.
    // If the value is 1 call the gotPowerup() function on the object
    // If the value is 2 call the addCoin() function
    // call the print Method on the object
    //  Now put the random range function inside a setInterval function that ends after gameActive  === false