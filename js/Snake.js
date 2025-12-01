import { GameField } from "./GameField.js";

export class Snake {
    maxTail = 6;

    constructor(context, x = 60, y = 60,
        direction = {
            x: 1,
            y: 0
        },
        speed = {
            x: 20,
            y: 0
        }
    ) {
        this.x = x;
        this.y = y;
        this.context = context;
        this.direction = direction;
        this.speed = speed;
        this.tails = [];
    }

    draw(colorHead = "#f00", colorBody = "#f33") {
        this.context.fillStyle = colorHead;
        this.context.fillRect(this.x, this.y, GameField.size, GameField.size);
        this.context.fillStyle = colorBody;
        this.tails.forEach((tail) => {
            this.context.fillRect(tail.x, tail.y, GameField.size, GameField.size);
        })
    }

    movement() {
        addEventListener("keydown", event => {
            if (event.key === "ArrowUp" && this.direction.y !== 1) {
                this.direction.x = 0;
                this.direction.y = -1;

                this.speed.x = 0;
                this.speed.y = 20;
            } else if (event.key === "ArrowDown" && this.direction.y !== -1) {
                this.direction.x = 0;
                this.direction.y = 1;
                
                this.speed.x = 0;
                this.speed.y = 20;
            } else if (event.key === "ArrowLeft" && this.direction.x !== 1) {
                this.direction.x = -1;
                this.direction.y = 0;
                
                this.speed.x = 20;
                this.speed.y = 0;
            } else if (event.key === "ArrowRight" && this.direction.x !== -1) {
                this.direction.x = 1;
                this.direction.y = 0;

                this.speed.x = 20;
                this.speed.y = 0;
            }
        })

        this.tails.unshift({ x: this.x, y: this.y });

        if (this.tails.length > this.maxTail) this.tails.pop();
        this.x += this.direction.x * this.speed.x;
        this.y += this.direction.y * this.speed.y;
        console.log(this.speed);
        console.log(this.direction);       
    }
}