export class Ball {
    constructor(gameboard) {
        this.ballElement = document.createElement("span");
        this.ballElement.classList.add("ball");
        gameboard.append(this.ballElement);
    }

    setPosition() { //генерация случайно позиции
        this.ballElement.style.setProperty("--x", (Math.random() * 85) + "%");
        this.ballElement.style.setProperty("--y", (Math.random() * 85) + "%");
       
    }

    setColor() { //генерация случайного цвета
        this.ballElement.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    }
}