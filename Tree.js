class Tree
{
	constructor(x,y)
	{
		this.x=x;
        this.y=y;
        
		this.wallWidth=450;
		this.wallHeight=600;
		this.wallThickness=10;
		
		this.image=loadImage("images/tree.png")

		this.bottom=Bodies.rectangle(this.x, this.y, this.wallWidth, this.wallThickness, {isStatic:true})

		this.leftWall=Bodies.rectangle(0, this.y-this.wallHeight/2, this.wallThickness, this.wallHeight, {isStatic:false})
		
		this.rightWall=Bodies.rectangle(this.x+this.wallWidth/2, this.y-this.wallHeight/2, this.wallThickness, this.wallHeight, {isStatic:false})
		
		World.add(world, this.bottom)
		World.add(world, this.leftWall)
		World.add(world, this.rightWall);

	}
	display()
	{
			var posBottom=this.bottom.position;
			push()
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.wallHeight/2,this.wallWidth, this.wallHeight)
			pop()
			
	}

}