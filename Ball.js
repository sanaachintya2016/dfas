class Ball{
    constructor(x, y, width) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, width, options);

        World.add(world, this.body);
      }
      display()
      {
          var pos=this.body.position;
          var angle=this.body.angle;
          push();
          translate(pos.x,pos.y);
          rotate(angle);
          ellipseMode(CENTER);
          fill("green");
          ellipse(0,0,50);
          pop();     
      }
  }

