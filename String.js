class String {
constructor(b1,b2 , offsetX,offsetY){
   this.offsetX = offsetX
   this.offsetY = offsetY
   var options = {'bodyA':b1 ,'bodyB':b2 , 'pointB':{x:offsetX , y:offsetY}};
   this.string = Constraint.create(options);
   World.add(world, this.string);

   }
   display(){
var pointA = this.string.bodyA.position;
var pointB = this.string.bodyB.position;

strokeWeight(3)
var Anchor1X = pointA.x
var Anchor1Y = pointA.y

var Anchor2X = pointB.x
var Anchor2Y = pointB.y
line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

   }
}