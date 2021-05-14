class Chain{
    constructor(Body1,Point2){
        var options = {
            bodyA: Body1,
            pointB: Point2,
            stiffness: 0.04,
            length: 10

        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);

    }

    display(){
       if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);}
    }
     fly(){
     this.chain.bodyA=null;
    }

}

