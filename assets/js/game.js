var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttach = 12;

var fight = function(enemyName) {
    while(enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    // if player chooses to fight, fight
    if (promptFight === "fight" || promptFight === "FIGHT") 

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    
    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }

      // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
      } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }

    // if player choses to skip
    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
       }
    for(var i = 0; i < enemyNames.length; i++) {
      fight(enemyNames[i]);
    }  

        // award player money for winning
        playerMoney = playerMoney + 20;

        // leave while() loop since enemy is dead
        break;
        else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');  
      }
      
        } 
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i +1));
            
            //pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            //reset enemyHealth before starting new fight
            enemyHealth = 50;

            //use debugger to pause script from running and check whats going on at that moment in the code
            // debugger;

            //pass the pickedEnemyName variables's value into the fight functin, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);
        }
            else{
                window.alert("You have lost your robot in battle! Game Over!")
                break;
            }

    
         
 

    
     
     // if no (false), ask question again by running fight() again
    else { 
        fight();
     }
 
     // if player did not choose 1 or 2 in prompt
    else {
       window.alert("You need to pick a valid option. Try again!");
   }
 };
 
 // run fight function to start game
 for (var i = 0; i < enemyNames.length; i++) {
     var pickedEnemyName = enemyNames[i]
     // call fight function with enemy-robot
     fight (pickedEnemyName);
 }
 
 // function to start a new game
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
      if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
        var pickedEnemyName = enemyNames[i];
  
        enemyHealth = 50;
  
        fight(pickedEnemyName);
      }
      else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
      }
    }
    // play again
    startGame();
  };
    // start the game when the page loads
    startGame();
   



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

    

    
    