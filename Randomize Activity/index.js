// ----- RANDOM NUMBER GENERATOR -----

const button = document.getElementById("Random");
const number = document.getElementById("DiceNum");
const minimum = 1;
const maximum = 6;
let randomNum;

button.onclick = function()
{
    randomNum = Math.floor(Math.random() * maximum) + minimum;
    number.textContent = randomNum;
}