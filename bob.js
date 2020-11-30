class Bob{

    constructor(x,y,radius){
        var options = {
            
            'restitution': 0.3,
            'friction': 1,
            'density': 2
        
        }

        this.radius = radius;

        this.body = Bodies.circle(x , y , radius , {isStatic: false});
	World.add(world, this.body);
    }
        display(){
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.radius);

     }
}