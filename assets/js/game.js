var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttach = 12;

var fight = function(enemyName) {}

     // repeat and execute as long as the enemy-robot is alive 
    while(enemyHealth > 0) {
    // place fight function code block here . . .

     // ask player if they'd like to fight or run
     var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

     // if player chooses to fight, fight
     if (promptFight === "fight" || promptFight === "FIGHT") {
         // remove enemy's health by subtracting the amount set in the playerAttack variable
     enemyHealth = enemyHealth - playerAttack;
     console.log(
         playName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
     );
 
     // check enemy's health
     if (enemyHealth<= 0) {
         window.alert(enemyName + " had died!");
     } else {
         window.alert(enemyName+ " stil has " + enemyHealth + " health left.");
     }
 
     // if player choses to skip
 } else if (promptFight === "skip" || promptFight === "SKIP") {
     // confirm player wants to skip
     var confirmSkip = window.confirm("Are you sure you'd like to quit?");
 
     // if yes (true), leave fight
     if (confirmSkip) {
         window.alert(playerName + " has decided to skip this fight. Goodbye!");
     // subtract money from playerMoney for skipping
         playerMoney = playerMoney - 2;
     }
     // if no (false), ask question again by running fight() again
     else {
           fight();
     }
 
     // if player did not choose 1 or 2 in prompt
   } else {
       window.alert("You need to pick a valid option. Try again!");
   }
 };
 
 // run fight function to start game
 for (var i = 0; i < enemyNames.length; i++) {
     var pickedEnemyName = enemyNames{i}
     // call fight function with enemy-robot
     fight (pickedEnemyName);

  }
    
   
}


    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    

    
    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    

    
    