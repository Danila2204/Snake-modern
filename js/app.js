import { GameField } from "./GameField.js";
import { GameLoop } from "./GameLoop.js";

let context = document.querySelector("canvas").getContext("2d");

let field = new GameField(context);

class App {
    constructor(context) {
        this.context = context;

        new GameLoop(this.update.bind(this), this.display.bind(this));
    }

    update(deltaTime) {
    }

    display() {
    }
}

const app = new App(context);