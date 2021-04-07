class Monster{
    constructor(x,y,r){
        var options = {
            'isStatic': false,
            'restitution':0.2
        }
        this.body = Matter.Bodies.circle(x,y,r,options);
        this.r = r*2;
        this.image = loadImage("monster.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("purple");
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, 100, 100);
        }
  }
    