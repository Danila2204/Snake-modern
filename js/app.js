import { GameField } from "./GameField.js";
import { GameLoop } from "./GameLoop.js";
import { Snake } from "./Snake.js";
import { Eat } from "./Eat.js";

let context = document.querySelector("canvas").getContext("2d");

let field = new GameField(context);
let snake = new Snake(context);
let berry = new Eat(context, 100, 100, 20, true);

class App {
    constructor(context) {
        this.context = context;

        new GameLoop(this.update.bind(this), this.display.bind(this), 10);
    }

    update() {        
        snake.movement();
    }

    display() {        
        this.context.clearRect(0, 0, GameField.width, GameField.height);
        snake.draw();
        berry.draw("https://png.pngtree.com/png-vector/20231214/ourmid/pngtree-pixel-style-fruit-watermelon-vector-png-image_11349948.png");
    }
}

const app = new App(context);