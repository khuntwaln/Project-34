class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 10
        }
        this.pointB = pointB
        this.Fly = Constraint.create(options);
        World.add(world, this.Fly);
    }
attach(body)
{
    this.Fly.bodyA=body;

}
    fly(){
        this.Fly.bodyA = null;
    }

    display(){
            if(this.Fly.bodyA){
            var pointA = this.Fly.bodyA.position;
            var pointB = this.pointB;
            
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y);
            
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y);
                
            }
           
            
        }
    }
    
}
