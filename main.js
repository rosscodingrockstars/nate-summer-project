let chosenNumber = Math.floor(Math.random() * (120 - 19)) + 19;
$("#amount-needed").text(chosenNumber);
let moneyOne = Math.floor(Math.random() * 12 + 2);
let moneyTwo = Math.floor(Math.random() * 12 + 2);
let moneyThree = Math.floor(Math.random() * 12 + 2);
let moneyFour = Math.floor(Math.random() * 12 + 2);
let points = 0;
$("#points ").text(points);
$("#restart").click(function() {
  points = 0;
  $("#points ").text(points);
  chosenNumber = Math.floor(Math.random() * (120 - 19)) + 19;
  $("#amount-needed").text(chosenNumber);
});
function checkPoints() {
  if (points > chosenNumber) {
    losses++;
    $("#losses").text(losses);
  } else if (points === chosenNumber) {
    wins++;
    $("#wins").text(wins);
  }
}
let wins = 0;
$("#wins").text(wins);
let losses = 0;
$("#losses").text(losses);
$("#money1").click(function() {
  points += moneyOne;
  $("#points").text(points);
  checkPoints();
});

$("#money2").click(function() {
  points += moneyTwo;
  $("#points ").text(points);
  checkPoints();
});

$("#money3").click(function() {
  points += moneyThree;
  $("#points ").text(points);
  checkPoints();
});

$("#money4").click(function() {
  points += moneyFour;
  $("#points ").text(points);
  checkPoints();
});
