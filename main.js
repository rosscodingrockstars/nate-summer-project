// $("#wins").text("1");

// $("#money1").click(function() {
// alert("money");
// });
// $(".btn").click(function() {
//  alert("hi");
// });
let chosenNumber = Math.floor(Math.random() * (120 - 19)) + 19;
$("#amount-needed").text(chosenNumber);
let points = 0;
$("#points ").text(points);
function checkPoints() {
  if (points > chosenNumber) {
losses++;
  } else if (points === chosenNumber) {
wins++;  } else {
    console.log("still playing");
  }
}
let moneyOne = Math.floor(Math.random() * 12 + 2);
let moneyTwo = Math.floor(Math.random() * 12 + 2);
let moneyThree = Math.floor(Math.random() * 12 + 2);
let moneyFour = Math.floor(Math.random() * 12 + 2);
let wins = 0;
let losses = 0;

$("#money1").click(function() {
  points += moneyOne;
  $("#points ").text(points);
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
