// $("#wins").text("1");

// $("#money1").click(function() {
// alert("money");
// });
// $(".btn").click(function() {
//  alert("hi");
// });

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let chosenNumber = Math.floor(Math.random() * (max - min)) + min;
  $("#amount-needed").text(chosenNumber);
}
getRandomInt(19, 120);
let moneyOne = Math.floor(Math.random() * 12 + 1);
let moneyTwo = Math.floor(Math.random() * 12 + 1);
let moneyThree = Math.floor(Math.random() * 12 + 1);
let moneyFour = Math.floor(Math.random() * 12 + 1);

let points = 0;
$("#points ").text(points);
let wins = 0;
let losses = 0;

$("#money1").click(function() {
console.log("moneyOne", points += moneyOne)
});

$("#money2").click(function() {
  console.log("moneyTwo", points += moneyTwo)
});

$("#money3").click(function() {
  console.log("moneyThree", points += moneyThree)
});

$("#money4").click(function() {
  console.log("moneyFour", points += moneyFour)
});
