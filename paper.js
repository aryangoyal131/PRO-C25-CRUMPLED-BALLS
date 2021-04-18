class paper
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2		
			}
		this.width=width;
		this.height=height;
		this.body=Bodies.rectangle(x,y,width,height, options);
        this.image = loadImage("paper.png");
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,200,600,this.width, this.height);
			pop()
			
	}

}