
var y = 10;

function setup() {
  createCanvas(720, 400); 
  noStroke();
  frameRate(20);
}

function draw() { 

	background (135,206,255);
//sun
noStroke();
fill(255, 255, 0);
ellipse(600, 50, 100, 100);

fill(255);
//cloud on the right 
ellipse(680, 90, 30,20);
ellipse(645, 92, 38,30);
ellipse(620, 92, 38,15);
ellipse(660, 95, 30,20);
ellipse(660, 85, 30,20);
ellipse(660, 85, 30,20);
ellipse(640, 85, 30,20);
ellipse(627, 84, 30,20);

// makes the balloon fly
  y = y - 1; 
  if (y < 0) { 
    y = height; 
  } 
  //balloon
 fill(220,20,60);
   noStroke()
   //balloon shape
  ellipse(mouseX, y, 50, 65);
  triangle(mouseX-6,y+37,mouseX,y+20,mouseX+6,y+37)
 stroke(85,105,120);
 line(mouseX,y+70,mouseX,y+37);
 


// color for the clouds
noStroke();
fill(255);
//middle cloud
ellipse(270, 150, 40,35);
ellipse(235, 152, 48,45);
ellipse(210, 152, 48,30);
ellipse(250, 155, 40,35);
ellipse(250, 145, 30,35);
ellipse(250, 145, 30,35);
ellipse(230, 145, 30,35);
ellipse(217, 142, 30,25);

//cloud to the left
ellipse(120, 200, 40,30);
ellipse(85, 202, 48,40);
ellipse(60, 202, 48,25);
ellipse(100, 205, 40,30);
ellipse(100, 195, 30,30);
ellipse(100, 195, 30,30);
ellipse(80, 195, 30,30);
ellipse(67, 192, 30,20);


//right cloud
ellipse(620, 50, 50,40);
ellipse(585, 52, 58,50);
ellipse(560, 52, 58,35);
ellipse(600, 55, 50,40);
ellipse(600, 45, 50,40);
ellipse(600, 45, 50,40);
ellipse(580, 45, 50,40);
ellipse(567, 42, 50,30);

//grass
fill(0, 205, 102);
  noStroke();
  rect(0, 370, 720, 150);

//box
 fill(139, 121, 94); 
stroke(0);
rect(360, 320, 75, 55, 10);
line(360,330, 435, 330);
fill(0);
textSize(12);
	textFont("arial black");
	text("Balloons", 370, 355);

  fill(220,20,60);   
  stroke(255,255,0);
} 
