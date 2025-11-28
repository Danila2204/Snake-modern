import { GameField } from "./GameField.js";
import { GameLoop } from "./GameLoop.js";
import { Snake } from "./Snake.js";


let context = document.querySelector("canvas").getContext("2d");

let field = new GameField(context);
let snake = new Snake(context);

class App {
    constructor(context) {
        this.context = context;

        new GameLoop(this.update.bind(this), this.display.bind(this));
    }

    update(deltaTime) {
    }

    display() {
        this.context.clearRect(0, 0, GameField.width, GameField.height);
        snake.draw();
    }
}

const app = new App(context);