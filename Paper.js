class Paper {
    constructor(x,y){
        var options = {
            density:1.0,
            friction:1.2,
            restitution:0.8,
            isStatic :false
            
        }
        this.body = Bodies.circle(x,y,50, options);
        this.radius = 50;
        this.image = loadImage("paper.png")
        World.add(world,this.body);
    }

    display(){
      var pos = this.body.position
      imageMode(CENTER);
      image(this.image,pos.x, pos.y,this.radius,this.radius);
        
    }
}