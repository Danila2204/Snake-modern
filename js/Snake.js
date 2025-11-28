import { GameField } from "./GameField.js";

export class Snake {
    constructor(context, x = 60, y = 60, direction = "right") {
        this.x = x;
        this.y = y;
        this.context = context;
        this.direction = direction;
        this.tails = [];
    }

    draw(colorHead = "#f00", colorBody = "#f30") {
        this.context.fillStyle = colorHead;
        this.context.fillRect(this.x, this.y, GameField.size, GameField.size);
        this.context.fillStyle = colorBody;
        this.tails.forEach((tail) => {
            context.fillRect(tail.x, tail.y, GameField.size, GameField.size);
        })
    }
}