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
        name:"Bob",
        hp: 5,
        attackDamage: 6,
        speech: "I shall have my revenge!",
        inventory: ["gold ring"]
    },
    {
        id: 1,
        name: "Jim",
        hp: 6,
        attackDamage: 10,
        speech: "You stole my wife, I shall end you",
        inventory: ["poison"]
    },
    {
        id: 2,
        name: "Carl",
        hp: 4,
        attackDamage: 10,
        speech: "Burn the books!",
        inventory: ["matches"]
    },
    {
        id:3,
        name: "Earl",
        hp: 9,
        attackDamage: 10,
        speech: "The innocent shall suffer... big time",
        inventory: ["gold neclace", "new titanium sword"]
    }
]; 
while(mainPlayer.hp > 0){
    const playerOption = readline.keyIn("\npress 'w' to walk or press 'p' to check your inventory.", {limit: ['w', 'p']});
    if(playerOption === 'p'){
        console.log(mainPlayer.hp, mainPlayer.inventory);
    } else if(playerOption === 'w'){
        let newEnemy = Math.floor(Math.random() * enemy.length) //The random number you're using becomes undefined after we take an enemy out of the enemy array aka after an enemey is defeated. I fixed it later in the code
        let foundEnemy = readline.keyIn("\nYou ran into an enemy named " + enemy[newEnemy].name + " . " +playerName + " you can choose to battle by pressing 'a' or flee and fight another day by pressing 'r'", {limit: ['a', 'r']})
            console.log(foundEnemy);
            if(foundEnemy === "a"){
                //fight
                    let playerAttack = Math.floor(Math.random() * mainPlayer.attackDamage);
                    if(playerAttack > 1){
                        console.log("\n Striking " + enemy[newEnemy].name + " with your rusty sword you have casused " + playerAttack + " damage");
                        console.log(enemy[newEnemy].hp - playerAttack);
                        enemy[newEnemy].hp = enemy[newEnemy].hp - playerAttack
                    }
                     if(enemy[newEnemy].hp <= 0 && enemy.length <= 0){
                        return console.log("\n" + playerName + " have defeated all of my enemies, it was extremely easy for a knight errant such as myself");
                    }; //moved this higher up so that we can end the game before the next if statement makes newEnemy changes to a different number. Also made it a regular if statement since else if's are used when the previous statement is false and in this case the previous statement and this statemnt can both be true at the same time.
                    if(enemy[newEnemy].hp <= 0){
                        console.log(playerName + " has defeated the enemy and gained new inventory and HP ");
                        // enemy[newEnemy].shift()
                        mainPlayer.inventory.push(enemy[newEnemy].inventory.toString()) //this is me adding stuff to you inventory
                        enemy = enemy.filter(foe => foe.id !== enemy[newEnemy].id)
                         newEnemy = Math.floor(Math.random() * enemy.length) //changes newEnemy to a different number so we don't get undefined's later in the code.
                         if(enemy.length <= 0){ //reused your if statement and changed the conditions. if enemy.length is zero than the eenemy[newEnemy].hp would be zero as well.
                            return console.log("\n" + playerName + " have defeated all of my enemies, it was extremely easy for a knight errant such as myself");
                        }
                         continue; //This keyword allows you to takes you to the next iteration in your while loop. It prevents us from gettting to the enemyAttack which is good since we don't want our enemy attacking after it dies . Learn the "continue" keyword by your assessment tomorrow.
                    }
                //enemy attack
                    let enemyAttack = Math.floor(Math.random() * enemy[newEnemy].attackDamage)
                    if(enemyAttack > 1){
                        mainPlayer.hp = mainPlayer.hp - enemyAttack
                        console.log("\nOUCH! during the fight " + playerName + " has taken " + enemyAttack + " damage from " + enemy[newEnemy].name, mainPlayer.hp - enemyAttack);
                    };
            }   
                    // run 50% chance of escape
            if(foundEnemy === "r"){
                let enemyAttack = Math.floor(Math.random() * enemy[newEnemy].attackDamage);
                let run = Math.floor(Math.random() * 50);
                if(run >= 25){
                    console.log(playerName + "\n has fled from battle");
                } else if(run < 25){
                    console.log(playerName + "\n has failed to run ");
                    mainPlayer.hp = mainPlayer.hp - enemyAttack
                    console.log(playerName + "\n took hp " + enemyAttack + " damage from " + enemy[newEnemy].name);
                }
                }
                //if(enemy[newEnemy].hp <= 0){
                //  return console.log("\n" + playerName + " have defeated all of my enemies, it was extremely easy for a knight errant such as myself");
                //};
                if(enemy[newEnemy].hp <= 0){
                    mainPlayer.hp = mainPlayer.hp + 5
                    let items = mainPlayer.inventory.push(enemy[newEnemy].inventory)
                    console.log(items);
                }
                if(mainPlayer.hp <= 0){
                    return console.log("YOU HAVE LOST");
                }
        }
    };