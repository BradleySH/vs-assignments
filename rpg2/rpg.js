const readline = require("readline-sync");

const playerName = readline.question("🤴 Greetings young brave knight, state who you are...");
console.log("\nGreat to meet you " + playerName + "!  Welcome to La Mancha, a Colossal Adventure awaits you.  As you explore La Mancha and the country of Spain be cautios as there many knights errant not just yourself.  From the look of your armor it could use some major repairs.  Anyways good luck out there!"); 

  //                                Player info
let mainPlayer = 
    {
      name: playerName,
      attackDamage: 10,
      inventory: ["helmet", "armor", "rusty sword"],
      hp: 20
    };

//                      Enemy info 
let enemy = [
    {
        id: 0,
        name:"Sampson Carrasco",
        hp: 10,
        attackDamage: 6,
        speech: "I shall have my revenge!",
        inventory: ["gold ring"]
    },
    {
        id: 1, 
        name: "Cardenio",
        hp: 15,
        attackDamage: 15,
        speech: "You stole my wife, I shall end you",
        inventory: ["poison"]

    },
    {
        id: 2,
        name: "The Priest",
        hp: 12, 
        attackDamage: 15,
        speech: "Burn the books!",
        inventory: ["matches"]
    },
    {
        id:3,
        name: "Roque Guinart",
        hp: 25,
        attackDamage: 10,
        speech: "The innocent shall suffer... big time",
        inventory: ["gold neclace", "new titanium sword"]

    }
];

let newEnemy = Math.floor(Math.random() * 4)

while(enemy[newEnemy].length && mainPlayer.hp > 0){
    const playerOption = readline.keyIn("\npress 'w' to walk or press 'p' to check your inventory.", {limit: ['w', 'p']});
    if(playerOption === 'p'){
        console.log(mainPlayer.hp, mainPlayer.inventory);
    }else if(playerOption ==='w'){
        
        let foundEnemy = readline.keyIn("\nYou ran into an enemy named " + enemy[newEnemy].name + " . " +playerName + " you can choose to battle by pressing 'a' or flee and fight another day by pressing 'r'", {limit: ['a', 'r']})
        console.log(foundEnemy);

        if(foundEnemy === "a"){
            let playerAttack = Math.floor(Math.random() * mainPlayer.attackDamage);
            if(playerAttack >= enemy[newEnemy].hp){
                enemy[newEnemy].hp = enemy[newEnemy].hp - playerAttack
                console.log("\n Striking " + enemy[newEnemy].name + " with your rusty sword you have casused " + playerAttack + " damage");
                console.log("\nhp" + mainPlayer.hp + " inventory " + mainPlayer.inventory);
            }

            let enemyAttack = Math.floor(Math.random() * enemy[newEnemy].attackDamage);
            if(enemyAttack = enemy[newEnemy].attackDamage){
                mainPlayer.hp = mainPlayer.hp - enemyAttack
                console.log("\nOUCH! " + playerName + " has taken " + enemyAttack + " damage from " + enemy[newEnemy].name);
            }
            if(mainPlayer.hp <= 0){
                console.log(playerName + " has died a glorious death");
            }
            if(mainPlayer.hp <= 0 || enemy[newEnemy].length <= 0 ){
                console.log("GAME HAS ENDED ");
            }

            
        if(foundEnemy === "r"){
            if(Math.floor(Math.random() * 100)<50){
                console.log(playerName + " has fled the battle");
            } else{
               mainPlayer.hp = mainPlayer.hp - enemyAttack 
               console.log(playerName + " has recieved " + enemyAttack + " damage and cannot flee the battle.");
               console.log(mainPlayer.hp, mainPlayer.inventory);
            }
        }
        }

    }
}
