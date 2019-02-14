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
    var charObiWan;
    var charLuke;
    var charHan;
    var charMaul;
    var charVader;
    var allCharacters;
    var isHeroSelected;
    var isOpponentSelected;

    // Create the Character objects
    function initChars() {
        isHeroSelected = false;
        isOpponentSelected = false;

        charObiWan = new CharacterObject("Obi-Wan Kenobi", 120, 8, 8, "assets/images/obiwan.jpg");
        charLuke = new CharacterObject("Luke Skywalker", 140, 12, 12, "assets/images/lukeskywalker.jpg");
        charHan = new CharacterObject("Han Solo", 100, 6, 6, "assets/images/hansolo.jpg");
        charMaul = new CharacterObject("Darth Maul", 150, 15, 15, "assets/images/darthmaul.jpg");
        charVader = new CharacterObject("Darth Vader", 180, 20, 20, "assets/images/darthvader.jpg");
        allCharacters = [charObiWan, charLuke, charHan, charMaul, charVader];

        // Create the character cards on screen
        for (var i = 0; i < allCharacters.length; i++) {
            var selectStr = "#card" + i;
            var newChar = $(selectStr);
            // Create a new card
            newChar.addClass("card characters mr-2");
            newChar.attr("data-name", allCharacters[i].charName);


            // // Create the HTML for the image
            var cardImage = $("<img>")
            cardImage.attr("src", allCharacters[i].charImage);
            cardImage.addClass("card-img-top mb-1")

            // // Create the HTML for the body and name and HP
            var cardBody = $("<div>");
            cardBody.addClass("card-body text-center m-0 p-0");
            var cardTitle = $("<h6>");
            cardTitle.addClass("card-title text-center m-0 p-0").text(allCharacters[i].charName);
            var cardHP = $("<p>");
            cardHP.addClass("card-text text-center m-0 p-0").text("HP: " + allCharacters[i].hitPoints)


            // Append it to the target area
            newChar.append(cardImage, cardBody, cardTitle, cardHP);

        };
    };
    initChars();


    $(".characters").on("click", function () {
        var playerChar;
        var playerChoice = ($(this).attr("data-name"));
        console.log("You clicked", playerChoice);

        // when a character card is clicked, move it to the active player area and hide it from the selectArea
        // first determine which character was clicked, as long as both characters haven't been selected yet
        if (!isHeroSelected || !isOpponentSelected) {
            switch (playerChoice) {
                case "Obi-Wan Kenobi":
                    playerChar = charObiWan;
                    console.log($("#card0"));
                    $("#card0").hide();
                    break;
                case "Luke Skywalker":
                    playerChar = charLuke;
                    $("#card1").hide();
                    break;
                case "Han Solo":
                    playerChar = charHan;
                    $("#card2").hide();
                    break;
                case "Darth Maul":
                    playerChar = charMaul;
                    $("#card3").hide();
                    break;
                case "Darth Vader":
                    playerChar = charVader;
                    $("#card4").hide();
                    break;
            }
        }

        // Now determine where the character goes on the screen, playerCharacter or opponentCharacter
        // check flags to see if hero and opponent have been seleceted
        if (!isHeroSelected) {
            var newChar = $("#playerChararcter");
            isHeroSelected = true;
        } else if (!isOpponentSelected) {
            var newChar = $("#opponentCharacter");
            isOpponentSelected = true;
        } else {
            return;
        }

        // THIS WHOLE PART SHOULD BE A FUNCTION WHICH GETS PASSED A PARAMETER OF NEWCHAR
        // Create a new card
        newChar.addClass("card characters");
        newChar.attr("data-name", playerChar.charName);


        // // Create the HTML for the image
        var cardImage = $("<img>")
        cardImage.attr("src", playerChar.charImage);
        cardImage.addClass("card-img-top mb-1")

        // // Create the HTML for the body and name and HP
        var cardBody = $("<div>");
        cardBody.addClass("card-body text-center m-0 p-0");
        var cardTitle = $("<h6>");
        cardTitle.addClass("card-title text-center m-0 p-0").text(playerChar.charName);
        var cardHP = $("<p>");
        cardHP.addClass("card-text text-center m-0 p-0").text("HP: " + playerChar.hitPoints)


        // Append it to the target area
        newChar.append(cardImage, cardBody, cardTitle, cardHP);



    });


});