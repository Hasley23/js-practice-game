const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const score = document.getElementById('score-text');

alert("Welcome to dino game!");

document.addEventListener("keydown", function (event) {
    jump();
})

function jump() {
    let dino = document.querySelector("#dino");
    if (!dino.classList != "jump") {
        dino.classList.add("jump");
    }
    // вызывает функцию 1 раз через время
    setTimeout(function () {
        dino.classList.remove("jump");
    }, 300);
}

let isAlive = setInterval(function () {
    // getComputedStyle - возворащает все свойства элемента
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("GAME OVER!\nSCORE: " + score.innerHTML);
        score.innerHTML = "0";
    } else {
        // score
        score.innerHTML = parseInt(score.innerHTML) + 1;
    }
}, 10);