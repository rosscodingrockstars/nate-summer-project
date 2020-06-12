//const firstCol = document.getElementById("first-col");
//const food = "watermelon";
//firstCol.innerHTML = `<p> Testing... testing.. 123 and ${food}. </p>`;
const numArray = [1, 2, 3, 4, 5];
let result = 0;
for (let i = 0; i < numArray.length; i++) {
  let currentNumber = numArray[i];
  result += currentNumber;
  console.log(result);
}
