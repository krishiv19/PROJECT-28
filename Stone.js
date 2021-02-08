class Stone{
    constructor(x,y){
        var options={
            'isStatic':false,
           ' restitution':0,
            'friction':1,
            'density':4
        }

        this.width = 50;
        this.height = 50;
        this.image = loadImage("images/stone.png");
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}

