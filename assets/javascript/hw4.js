//crystals collector with BTM faces
//this game will randomly generate a number
//there will be four crystals below (faces) that will also randomly generate a number
//the user will click on each crystal (face) and the random number it is worth will add to the total
//if the total matches the random number selected, YOU WIN
//if you go over that number, you lose!
//the game starts over once you've hit or exceeded that number and the win/loss counter will reset
//a new number to match will be generated and the crystals (faces) will generate new numbers
$(document).ready( function() {

    var computerNumber;
    var playerNumber = 0;
    var heroCrystal;
    var sidekickCrystal;
    var shadowtakenCrystal;
    var mothmanCrystal = 1;
    var minCompValue = 19;
    var maxCompValue = 120;
    var minCrystalValue = 1;
    var maxCrystalValue = 19;
    var wins = 0;
    var losses = 0;
    var finishedGame = false;  

//setup game - choose random numbers for the total and crystals.
function setupGame() {

    //refresh screen;
    refreshScreen();

    //Generate the random numbers
    computerNumber = Math.floor(Math.random() * (maxCompValue - minCompValue + 1)) + minCompValue;
    heroCrystal = Math.floor(Math.random() * (maxCrystalValue - minCrystalValue + 1)) + minCrystalValue;
    sidekickCrystal = Math.floor(Math.random() * (maxCrystalValue - minCrystalValue + 1)) + minCrystalValue;
    shadowtakenCrystal = Math.floor(Math.random() * (maxCrystalValue - minCrystalValue + 1)) + minCrystalValue;

    //console.log("computerNumber");
    //console.log(computerNumber);

    //add values to the page
    $("#instructions").css("display", "block")
    $('#computerValue').html(computerNumber);
    $('#playerValue').html(playerNumber);

    //Hide the Game Win and Losses and reset buttons
    $(".button").prop("disabled", false).addClass("pulse");
    $("#pressKeyTryAgain").css("display", "none");
    $("#gameover-image").css("display", "none");
    $("#youwin-image").css("display", "none");

    $(".crystalButtons").on("click", "#heroCrystal", function() {
        playerNumber = parseInt(playerNumber += heroCrystal);
        $('#playerValue').html(playerNumber);
        console.log("playerNumber");
        console.log(playerNumber);
        checkScore();
    });
    $(".crystalButtons").on("click", "#sidekickCrystal", function() {
        playerNumber = playerNumber += sidekickCrystal;
        $('#playerValue').html(playerNumber);
        console.log("playerNumber");
        console.log(playerNumber);
        checkScore();
    });
    $(".crystalButtons").on("click", "#shadowtakenCrystal", function() {
        playerNumber = playerNumber += shadowtakenCrystal;
        $('#playerValue').html(playerNumber);
        console.log("playerNumber");
        console.log(playerNumber);
        checkScore();
    });
    $(".crystalButtons").on("click", "#mothmanCrystal", function() {
        playerNumber = playerNumber += mothmanCrystal;
        $('#playerValue').html(playerNumber);
        console.log("playerNumber");
        console.log(playerNumber);
        checkScore();
    });

}
//check to see if the number the crystal faces are adding up matches or exceeds the random number
//if the number goes over, you lose. if it matches, then you win.
function checkScore() {
    if(playerNumber === computerNumber) {
        $("#instructions").css("display", "none")
        $("#pressKeyTryAgain").css("display", "block");
        $("#youwin-image").css("display", "block");
        $(".button").prop("disabled", true).removeClass("pulse");
        wins++;
        finishedGame = true;
        console.log("You Win!");
        console.log("checking WIN for computerNumber");
        console.log(computerNumber);
        console.log(playerNumber);

    } else if (playerNumber >= computerNumber) {
        $("#instructions").css("display", "none")
        $("#pressKeyTryAgain").css("display", "block");
        $("#gameover-image").css("display", "block");
        $(".button").prop("disabled", true).removeClass("pulse");
        losses++;
        finishedGame = true;
        console.log("You Lose!");
        console.log("checking LOSS for computerNumber");
        console.log(computerNumber);
        console.log(playerNumber);
    }
}

//refresh the screen at the start of a new game
function refreshScreen() {
    var playerNumber = 0;
    $('#playerValue').html(playerNumber);
    //Update the Wins and Losses
    $('#gameWins').text(wins);
    $('#gameLosses').text(losses);
    console.log("SCREEN HAS BEEN REFRESHED");
}
    
// Event listener
document.onkeydown = function(event) {
    //if the game is finished, restart it.
    if(finishedGame) {
        setupGame();
        finishedGame = false;
    }
    
};

setupGame()

});