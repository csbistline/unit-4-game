$(document).ready(function () {

    // Create a new object constructor for the character
    function CharacterObject(name, hp, ap, cap, img) {
        this.charName = name;
        this.hitPoints = hp;
        this.attackPower = ap;
        this.counterAttackPower = cap;
        this.charImage = img;
    }

    // GLOBAL VARIABLES
    var charObiWan;                 // Obi Wan
    var charLuke;                   // Luke
    var charHan;                    // Han
    var charMaul;                   // Maul
    var charVader;                  // Vader
    var allCharacters;              // Array containing all chars
    var isHeroSelected;             // flag for hero selected
    var isOpponentSelected;         // flag for opponent selected
    var playerChar;                 // player's choice of character/opponent
    var opponentChar;               // opponent choice of character
    var opponentsLeft;                 // how many opponents have you defeated
    var isGameOver = false;
    console.log(isGameOver);

    // Create the Character objects
    function initChars() {
        console.log("Initializing game, resetting variables")
        isHeroSelected = false;
        isOpponentSelected = false;
        isGameOver = false;

        charObiWan = new CharacterObject("Obi-Wan Kenobi", 120, 8, 8, "assets/images/obiwan.jpg");
        charLuke = new CharacterObject("Luke Skywalker", 140, 12, 12, "assets/images/lukeskywalker.jpg");
        charHan = new CharacterObject("Han Solo", 100, 6, 6, "assets/images/hansolo.jpg");
        charMaul = new CharacterObject("Darth Maul", 150, 15, 15, "assets/images/darthmaul.jpg");
        charVader = new CharacterObject("Darth Vader", 180, 20, 20, "assets/images/darthvader.jpg");
        allCharacters = [charObiWan, charLuke, charHan, charMaul, charVader];
        opponentsLeft= allCharacters.length - 1;
        console.log("Opponents remaining:", opponentsLeft);

        // Create the character cards on screen
        for (var i = 0; i < allCharacters.length; i++) {
            var selectStr = "#card" + i;
            var newChar = $(selectStr);
            drawCharacter(newChar, allCharacters[i]);
        };
    };

    // BEGIN THE GAME
    initChars();


    // CHARACTER SELECT CLICK HANDLER
    $(".characters").on("click", function () {
        var playerChoice = ($(this).attr("data-name"));
        console.log("You clicked", playerChoice);
        // debugger;
        // when a character card is clicked, move it to the active player area and hide it from the selectArea
        // first determine which character was clicked, as long as both characters haven't been selected yet
        if (!isHeroSelected) {
            isHeroSelected = true;
            var selectAudio = new Audio("assets/sounds/LightsaberTurnOn.mp3");
            selectAudio.play();

            switch (playerChoice) {
                case "Obi-Wan Kenobi":
                    playerChar = charObiWan;
                    $("#card0").fadeOut("slow");
                    var newChar = $("#playerChararcter");
                    $("#vsText").removeClass("d-none");
                    drawCharacter(newChar, playerChar, "hero");
                    break;
                case "Luke Skywalker":
                    playerChar = charLuke;
                    $("#card1").fadeOut("slow");
                    var newChar = $("#playerChararcter");
                    $("#vsText").removeClass("d-none");
                    drawCharacter(newChar, playerChar, "hero");
                    break;
                case "Han Solo":
                    playerChar = charHan;
                    $("#card2").fadeOut("slow");
                    var newChar = $("#playerChararcter");
                    $("#vsText").removeClass("d-none");
                    drawCharacter(newChar, playerChar, "hero");
                    break;
                case "Darth Maul":
                    playerChar = charMaul;
                    $("#card3").fadeOut("slow");
                    var newChar = $("#playerChararcter");
                    $("#vsText").removeClass("d-none");
                    drawCharacter(newChar, playerChar, "hero");
                    break;
                case "Darth Vader":
                    playerChar = charVader;
                    $("#card4").fadeOut("slow");
                    var newChar = $("#playerChararcter");
                    $("#vsText").removeClass("d-none");
                    drawCharacter(newChar, playerChar, "hero");
                    break;
            }
        } else if (!isOpponentSelected) {
            isOpponentSelected = true;
            var selectAudio = new Audio("assets/sounds/LightsaberTurnOn.mp3");
            selectAudio.play();

            switch (playerChoice) {
                case "Obi-Wan Kenobi":
                    opponentChar = charObiWan;
                    $("#card0").fadeOut("slow");
                    var newChar = $("#opponentCharacter");
                    $("#messageArea").removeClass("d-none");
                    drawCharacter(newChar, opponentChar, "badguy");
                    $("#messageTitle").text("Prepare to battle!");
                    $("#messageText").empty();

                    break;
                case "Luke Skywalker":
                    opponentChar = charLuke;
                    $("#card1").fadeOut("slow");
                    var newChar = $("#opponentCharacter");
                    $("#messageArea").removeClass("d-none");
                    drawCharacter(newChar, opponentChar, "badguy");
                    $("#messageTitle").text("Prepare to battle!");
                    $("#messageText").empty();
                    break;
                case "Han Solo":
                    opponentChar = charHan;
                    $("#card2").fadeOut("slow");
                    var newChar = $("#opponentCharacter");
                    $("#messageArea").removeClass("d-none");
                    drawCharacter(newChar, opponentChar, "badguy");
                    $("#messageTitle").text("Prepare to battle!");
                    $("#messageText").empty();
                    break;
                case "Darth Maul":
                    opponentChar = charMaul;
                    $("#card3").fadeOut("slow");
                    var newChar = $("#opponentCharacter");
                    $("#messageArea").removeClass("d-none");
                    drawCharacter(newChar, opponentChar, "badguy");
                    $("#messageTitle").text("Prepare to battle!");
                    $("#messageText").empty();
                    break;
                case "Darth Vader":
                    opponentChar = charVader;
                    $("#card4").fadeOut("slow");
                    var newChar = $("#opponentCharacter");
                    $("#messageArea").removeClass("d-none");
                    drawCharacter(newChar, opponentChar, "badguy");
                    $("#messageTitle").text("Prepare to battle!");
                    $("#messageText").empty();
                    break;
            }
        } else {
            return;
        }
    });

    function drawCharacter(where, whatChar, whichSide) {
        where.empty();
        where.addClass("card characters px-0 mx-1");
        where.attr("data-name", whatChar.charName);

        // // Create the HTML for the image
        var cardImage = $("<img>")
        cardImage.attr("src", whatChar.charImage);
        cardImage.addClass("card-img-top mb-1")

        // // Create the HTML for the body and name and HP
        var cardBody = $("<div>");
        cardBody.addClass("card-body text-center m-0 p-0");
        var cardTitle = $("<h6>");
        cardTitle.addClass("card-title text-center m-0 p-0").text(whatChar.charName);
        var cardHP = $("<p>");
        cardHP.addClass("card-text text-center m-0 p-0").addClass(whichSide).text("HP: " + whatChar.hitPoints)

        // Append it to the target area
        where.append(cardImage, cardBody, cardTitle, cardHP);
        where.fadeIn("slow");
    };

    // CHARACTER ATTACK CLICK HANDLER
    $("#playerChararcter").on("click", function () {
        if (isHeroSelected && isOpponentSelected) {
            // make sure character is alive
            if (playerChar.hitPoints > 0) {
                $("#messageTitle").text("The battle has begun!")
                // attack the opponent
                var selectAudio = new Audio("assets/sounds/LightsaberClash.mp3");
                selectAudio.play();
                opponentChar.hitPoints -= playerChar.attackPower;
                $("#messageText").text(playerChar.charName + " attacks for " + playerChar.attackPower);
                // decrease the HP of opponent
                $(".badguy").text("HP: " + opponentChar.hitPoints);
                // increase base attack power
                playerChar.attackPower += playerChar.counterAttackPower;

                //opponent counter attack if not dead
                if (opponentChar.hitPoints > 0) {
                    playerChar.hitPoints -= opponentChar.counterAttackPower;
                    $("#messageText").append("<p>" + opponentChar.charName + " attacks for " + opponentChar.counterAttackPower + "</p>");
                    $(".hero").text("HP: " + playerChar.hitPoints);

                    // check if you died
                    if (playerChar.hitPoints <= 0) {
                        $(".introMessage").text("You have been defeated by " + opponentChar.charName + "! GAME OVER!")
                    }
                    
                } 
                // otherwise you've won the battle
                else {
                    isOpponentSelected = false;
                    opponentsLeft--;
                    // $("#opponentCharacter").empty();
                    $("#messageTitle").text("You won!")
                    $(".introMessage").text("You have defeated " + opponentChar.charName + "! " + "Select a new opponent to battle.")
                    // $("#messageText").text("Select a new opponent to battle.");
                    
                    //You've won the game
                    if (opponentsLeft === 0) {
                        // debugger;
                        isGameOver = true;
                        $(".introMessage").text("YOU'VE DEFEATED ALL THE ENEMIES!")
                    }

                }
            }
        };
    });



});