var wins = 0;
$("#wins").text(wins);
var losses = 0;
$("#losses").text(losses);
var totalScore = 0;
$("#score").text(totalScore);

var numberToReach = Math.round(Math.random() * 55) + 15;

$("#number-to-guess").text(numberToReach);
var numberOptions = ["3", "5", "7", "10"];

for (var i = 0; i < numberOptions.length; i++) {

var imageCrystal1 = $("<img>");
imageCrystal1.attr("src", "assets/images/imageCrystal1.jpg");


var imageCrystal2 = $("<img>");
imageCrystal2.attr("src", "assets/images/imageCrystal2.jpg");


var imageCrystal3 = $("<img>");
imageCrystal3.attr("src", "assets/images/imageCrystal3.jpg");


var imageCrystal4 = $("<img>");
imageCrystal4.attr("src", "assets/images/imageCrystal4.jpg");


var imagePool = [imageCrystal1, imageCrystal2, imageCrystal3, imageCrystal4];
imagePool[i].addClass("crystal-image");
imagePool[i].attr("data-crystalvalue", numberOptions[i]);

$("#crystals").append(imagePool[i]);
};



$(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    totalScore += crystalValue;
    console.log(totalScore);
    $("#score").text(totalScore);

    if (totalScore === numberToReach) {
        alert("You win!");
        wins++;
        totalScore=0;
        numberToReach = Math.round(Math.random() * 55) + 15;
        $("#number-to-guess").text(numberToReach);
        $("#score").text(totalScore);
        $("#wins").text(wins);
    } else if (totalScore >= numberToReach) {
        alert("You lose!!");
        losses++;
        totalScore=0;
        numberToReach = Math.round(Math.random() * 55) + 15;
        $("#number-to-guess").text(numberToReach);
        $("#score").text(totalScore);
        $("#losses").text(losses);
    }

   
});


    


