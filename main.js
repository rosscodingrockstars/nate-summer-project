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
let wins = 0;
let losses = 0;

$("#money1").click(function() {
  alert("money");
});

$("#money2").click(function() {
  alert("money");
});

$("#money3").click(function() {
  alert("money");
});

$("#money4").click(function() {
  alert("money");
});
