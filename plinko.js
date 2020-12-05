class Plinko {
    constructor(x,y){
        var options = {
            restituition: 1.5,
            isStatic: true,
            friction: 0
        }
        this.r = 10;
        this.body = Bodies.circle (x,y,this.r,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(255,255,255);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();

    }
}