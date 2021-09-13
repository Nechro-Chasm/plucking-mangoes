 class Launches{
 constructor(stone, hand){
     var options = {
         bodyA:stone,
         pointB:hand,
         stiffness:0.005,
         length:1
     }
this.launch = Constraint.create(options);
World.add(world, this.launch);
this.bodyA = stone
this.pointB = hand 
}
fly(){
    this.launch.bodyA = null
}
reset(rock){
    this.launch.bodyA = rock
}
 display(){
     if(this.launch.body){
        var pointA = this.bodyA.position
        var pointB = this.pointB    
      
        strokeWeight(2);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
     }
 
 }
 }