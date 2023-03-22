import  { Ball } from "./ball.js";

const gameboard = document.getElementById('gameboard');

let ball;
let timerID;

spawn();

function spawn() {
    gameboard.removeChild(gameboard.firstChild);
    ball = new Ball(gameboard);
    ball.setPosition();
    ball.setColor();
}

timerID = setInterval(spawn, 2000);


gameboard.addEventListener('click', function(event) {
    let targetClick = event.target;

    if  (targetClick.classList.contains("ball")) {      
        clearInterval(timerID);
        spawn();
        timerID = setInterval(spawn, 2000);
    }
});






