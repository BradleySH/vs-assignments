//  beginning rpg storyline

const readline = require("readline-sync");
// const rl = readline.createInterface({input : process.stdin,
//                                         output : process.stdout});

const playerName = readline.question("🤴 Greetings young brave knight, state who you are...");
console.log("Great to meet you " + playerName + "!  Welcome to La Mancha, a Colossal Adventure awaits you.  As you explore La Mancha and the country of Spain be cautios as there many knights errant not just yourself.  From the look of your armor it could use some major repairs.  Anyways good luck out there!"); 

  //                                Player info
  const mainPlayer = [
      {
      name: playerName,
      attackDamage: 25,
      inventory: ["helmet", "armor", "rusty sword"],
      hp: 100
      }
 ];

//  const playerInfo = {
//      name: playerName,
//      hp: mainPlayer[3].hp, 
//      inventory: mainPlayer[2].inventory
// };


//           PLAYER WALK AND GENERATES POSSIBLE ENEMY 25% CHANCE OF ENEMy
   let walking = () => {
       if(readline.keyIn("Press 'w' to walk ", {limit: "$<'w'>"})){
           console.log(playerName + " is walking");
       }
  };
  walking()

//                      Enemy info 
let enemy = [
    {
        id: 0,
        name:"Sampson Carrasco",
        health: 25,
        attackDamage: 20,
        speech: "I shall have my revenge!",
        inventory: ["gold ring"]
    },
    {
        id: 1, 
        name: "Cardenio",
        health: 30,
        attackDamage: 30,
        speech: "You stole my wife, I shall end you",
        inventory: ["poison"]

    },
    {
        id: 2,
        name: "The Priest",
        health: 40, 
        attackDamage: 35,
        speech: "Burn the books!",
        inventory: ["matches"]
    },
    {
        id:3,
        name: "Roque Guinart",
        health: 20,
        attackDamage: 50,
        speech: "The innocent shall suffer... big time",
        inventory: ["gold neclace", "new titanium sword"]

    }
]; 

const randomNum = (min,max) =>{
    return Math.floor((Math.random() * (min-max) + min))
}


// attack damage and if kills enemy give player HP use while loops and if dies logs a cool death note and game ends

//                              RANDOM ATTACK

let foundEnemy = (attack) =>{
     let options = readline.question("You found an enemy! You have a choice to stay and fight or run.  Press 'a' to attack and 'r' to run.    Press Enter")
    if(options === "a", readline.keyIn("My name is " + playerName + " running is out of the question.  press a", {limit: "$<'a'>"})){
        console.log(attack);
    }if (options === "r", readline.keyIn("I " + playerName + " shall send my trusty squire Sancho Panza in my place as you are not a worth knight to fight the " + playerName +"!   press r", {limit: "$<'r'>"})){
        console.log(options);
    }
};
foundEnemy();

//                                  ATTACK
    let attack = () => {
        let playerAttackDamage = Math.floor(Math.random() * 40 + 1);
        if(playerAttackDamage > 1){
            return enemy.hp - playerAttackDamage, readline.keyIn(playerName + " strikes the " + enemy[2].name + " with a rusty sword causing " + playerAttackDamage + " damage proving very effective.  The enemy screams " + enemy[2].speech);
        } else if (playerAttackDamage = Math.floor(Math.random() * 1 + 1)){
            return readline.keyIn(playerName + "swings and misses enemy", {limit: "$<'m'>"}, waling());
        }
    };
    attack()
    //readline.question(playerName + " attacks the " + enemy[2].name + " with a rusty sword. " + ////enemy[2].name + " yells " + enemy[2].speech + "!");
//     let attackDamage = enemy.attackDamage
//     for(enemyAttack === attackDamage; enemy.attackDamage - mainPlayer.slice(3);){
//         console.log(enemyAttack);
//     }
//     console.log(mainPlayer)

//                                      RUNAWAY
let runAway = () => {
    let run = readline.question(" you have chosen to run")
    if(run = randomNum < 2){
        return readline.keyIn(enemy.name + " you are not fast enough to outrun me, you will batle me now.")
        //console.log(" you arent fast enough to run, you must fight me");
    } 
    if (randomNum > 2){
        return readline.keyIn(playerName + " quickly flees from battle.");
    }
};
runAway();

let playerStat = () => {
    if(readline.keyIn("Check my inventory press 'p'", {limit: '$<"p">'})){
        console.log(mainPlayer);
    }
};
playerStat()
// run from attack 50% CHANCE OF ESCAPE
//                                     ENEMYDEAD
let enemyDead = () => {
    if(enemy.hp <= 0){
        return readline.keyIn(playerName + " has killed the enemy");
    }
}
enemyDead();


// inventory   when player kills enemy awarded with items if play uses "p" in console it will display player name, HP and inventory items