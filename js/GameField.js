export class GameField {
    static size = 20;
    static bagckround = "#000";
    static width = 1000;
    static height = 800;

    constructor(context) {
        context.fillStyle = this.bagckround;
        context.fillRect(0, 0, this.width, this.height)
    }
}