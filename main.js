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
if (points > chosenNumber) {
  console.log("you lost");
} else {
  console.log("maybe won");
}

let moneyOne = Math.floor(Math.random() * 12 + 1);
let moneyTwo = Math.floor(Math.random() * 12 + 1);
let moneyThree = Math.floor(Math.random() * 12 + 1);
let moneyFour = Math.floor(Math.random() * 12 + 1);
let wins = 0;
let losses = 0;

$("#money1").click(function() {
  points += moneyOne;
  $("#points ").text(points);
});

$("#money2").click(function() {
  points += moneyTwo;
  $("#points ").text(points);
});

$("#money3").click(function() {
  points += moneyThree;
  $("#points ").text(points);
});

$("#money4").click(function() {
  points += moneyFour;
  $("#points ").text(points);
});
