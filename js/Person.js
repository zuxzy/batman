class Person{
    constructor(x, y, r){
        var bodyOptions = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, this.r, bodyOptions);
        this.r = r;
        this.image = loadImage("images/Walking Frame/walking_1.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 400, 600, this.r,this.r);
        pop();
    }
}