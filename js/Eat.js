export class Eat {
    constructor(context, x, y, size, image = false) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.size = size;
        this.image = image;
    }


    draw(src = undefined) {
        if (!this.image) {
            this.context.fillStyle = "#0ab";
            this.context.fillRect(this.x, this.y, this.size, this.size);
        } else {
            let image = new Image();
            image.src = src;            

            this.context.drawImage(image, this.x, this.y, this.size, this.size);
        }
    }
}