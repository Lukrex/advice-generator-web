const text = document.getElementById("advice");
const id = document.getElementById("id");
const btn = document.getElementById("btn");

async function getAdvice() {
    let response = await fetch("https://api.adviceslip.com/advice")
    let data = await response.json();
    return data;
}
getAdvice().then(data => text.innerHTML = data.slip.advice);
getAdvice().then(data => id.innerHTML = data.slip.id);

function resetAdvice() {
    getAdvice().then(data => text.innerHTML = data.slip.advice);
    getAdvice().then(data => id.innerHTML = data.slip.id);
    btn.classList.add("dice-btn-click");
    setTimeout(function(){btn.classList.remove("dice-btn-click")}, 510)
}