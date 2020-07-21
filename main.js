let chosenNumber = Math.floor(Math.random() * (120 - 19)) + 19;
$("#amount-needed").text(chosenNumber);
let moneyOne = Math.floor(Math.random() * 12 + 2);
let moneyTwo = Math.floor(Math.random() * 12 + 2);
let moneyThree = Math.floor(Math.random() * 12 + 2);
let moneyFour = Math.floor(Math.random() * 12 + 2);
let points = 0;
$("#restart").hide();
$("#points ").text(points);
$("#restart").click(function() {
  $("#restart").hide();
  $(".money").show();
  points = 0;
  $("#points ").text(points);
  chosenNumber = Math.floor(Math.random() * (120 - 19)) + 19;
  $("#amount-needed").text(chosenNumber);
  moneyOne = Math.floor(Math.random() * 12 + 2);
  moneyTwo = Math.floor(Math.random() * 12 + 2);
  moneyThree = Math.floor(Math.random() * 12 + 2);
  moneyFour = Math.floor(Math.random() * 12 + 2);
});
function checkPoints() {
  if (points > chosenNumber) {
    losses++;
    $("#restart").show();
    $("#losses").text(losses);
    $(".money").hide();
  } else if (points === chosenNumber) {
    wins++;
    $("#restart").show();
    $("#wins").text(wins);
    $(".money").hide();
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
