class Constraint1{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.constraint = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.constraint);
    }

    fly(){
        this.constraint.bodyA=null;  
    }

    display(){
        if(this.constraint.bodyA){
            var pointA = this.constraint.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    attach(bodyA){
        this.constraint.bodyA;
    }

    
    
}

