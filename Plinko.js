class Plinko {
    constructor(x,y,r){
        var options = {
      restitution : 10
        }
        this.r = 10;
        this.body = Bodies.circle(x,y,this.r,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World .add(world,this.body);
    }
}