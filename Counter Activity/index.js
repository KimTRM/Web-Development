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

    if(count < 0)
    {
        Counter.style.color = "red";
    }
}

// -- RESETS THE COUNTER --
Resetbtn.onclick = function()
{
    count = 0;
    Counter.textContent = count;

    Counter.style.color = "white";
}

// -- INCREASES THE COUNTER --
Increasebtn.onclick = function()
{
    count++;
    Counter.textContent = count;

    if(count > 0)
    {
        Counter.style.color = "green";
    }
}