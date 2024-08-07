// ----- COUNTER INCREASE OR DECREASE ----- 

const Decreasebtn = document.getElementById("decreasebtn");
const Resetbtn = document.getElementById("resetbtn");
const Increasebtn = document.getElementById("increasebtn");
const Counter = document.getElementById("Counter");
let count = 0;


// -- DECREASES THE COUNTER --
Decreasebtn.onclick = function()
{
    count--;
    Counter.textContent = count;
}

// -- RESETS THE COUNTER --
Resetbtn.onclick = function()
{
    count = 0;
    Counter.textContent = count;
}

// -- INCREASES THE COUNTER --
Increasebtn.onclick = function()
{
    count++;
    Counter.textContent = count;
}