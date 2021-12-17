class Bin {
    constructor (x,y,width,height){
        var options = {
            isStatic : true,
        }
        this.body = Matter.Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("https://projectsassets.s3.us-east-2.amazonaws.com/dustbingreen.png")
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}