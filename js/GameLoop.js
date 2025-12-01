export class GameLoop {
    constructor(_update, _display, fps = 30) {
        this.update = _update;
        this.display = _display;
        
        this.deltaTime = 0;
        this.lastUpdate = 0;

        this.frameTime = 1000 / fps;
        this.accumulator = 0;
        this.animate = this.animate.bind(this);

        this.animate();
    }

    animate(currentTime = 0) {        
        requestAnimationFrame(this.animate);
        
        if (this.lastUpdate == 0) {
            this.lastUpdate = currentTime;
            return;
        }

        this.deltaTime = currentTime - this.lastUpdate;
        this.lastUpdate = currentTime;

        this.accumulator += this.deltaTime;

        while (this.accumulator >= this.frameTime) {
            this.update(this.frameTime);
            this.accumulator -= this.frameTime;
        }

        this.display();
    }
}