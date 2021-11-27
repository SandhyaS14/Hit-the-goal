canvas = new fabric.Canvas("myCanvas");
// Create canvas variable
bally = 0;
ballx = 0;
holey = 400;
holex = 800;
//Set initial positions for ball and hole images.


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(IMG){
		hole_obj = IMG;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top: holey,
			left: holex
		});
		canvas.add(hole_obj);
	});
	// write code to Upload golf image on the canvas
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function (IMG){
		ball_obj = IMG;
		ball_obj = scaleToHeight(50);
		ball_obj = scaleToWidth(50);
		ball_obj.set({
			top: bally,
			left: ballx
		});
		canvas.add(ball_obj);
	});
	// write code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ballx == holex) && (bally == holey)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML = "You have hit the goal!";
		document.getElementById("myCanvas").styke.borderColor = "red";	
	}
	else {
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(bally > 0){
			bally = bally - block_image_height;
			canvas.remove(ball_obj);
			new_image();
		} 
		// Write a code to move ball upward.
	}

	function down()
	{
		if(bally < 450){
			bally = bally + block_image_height;
			canvas.remove(ball_obj);
			new_image();
		}
		 // Write a code to move ball downward.
	}

	function left()
	{
		if(ballx >5)
		{
			ballx = ballx - block_image_width;
			canvas.remove(ball_obj);
			new_image();
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ballx <=1050)
		{
			ballx = ballx + block_image_width;
			canvas.remove(ball_obj);
			new_image();	
			// Write a code to move ball right side.
		}
	}
	
}

