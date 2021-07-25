class Thunderbolt{
    constructor(x, y, r){
        var bodyOptions = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, this.r, bodyOptions);
        this.r = r;
        var rand = Math.round(random(1,4));
            switch(rand){
                case 1: this.image = loadImage("images/thunderbolt/1.png");
                break;
                case 2: this.image = loadImage("images/thunderbolt/2.png");
                break;
                case 3: this.image = loadImage("images/thunderbolt/3.png");
                break;
                case 4: this.image = loadImage("images/thunderbolt/4.png");
                break;
            }
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, Math.random()*800, 100, this.r,this.r);
        pop();
    }
}