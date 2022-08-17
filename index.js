let sum = document.getElementById("sum-el")
let num1 = 2
let num2 = 5
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add() { 
    let adding = num1 + num2
    sum.innerText = adding
}
function subtract() { 
    let subtracting = num1 - num2
    sum.innerText = subtracting
}
function divide() { 
    let dividing = num1 / num2
    sum.innerText = dividing
}
function multiply() { 
    let multiplying = num1 * num2
    sum.innerText = multiplying
}
