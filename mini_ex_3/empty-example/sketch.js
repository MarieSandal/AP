var song;

function preload()
{
  song = loadSound('snow')
}

function setup() {
createCanvas(1280, 615);
background(255);
frameRate(12);
song.play();            //soundtrack
song.setVolume(1);

}

function draw() {

//deleting background - the "fading" effect
noStroke();
fill(176, 196, 222, 40); 
rect(500, 230, 300, 300);

//Grass
noStroke();
fill(70,130,180, 40);
rect(500, 450, 300, 80);

//cloud
fill(255);
ellipse(550, 300, 50, 45);
ellipse(535, 300, 35, 37);
ellipse(525, 300, 30, 24);
ellipse(565, 300, 35, 37);
ellipse(575, 300, 30, 24);

//cloud
fill(255);
ellipse(750, 270, 40, 40);
ellipse(735, 270, 25, 34);
ellipse(725, 270, 20, 21);
ellipse(765, 270, 25, 34);
ellipse(775, 270, 20, 21);

//cloud
fill(255);
ellipse(690, 260, 60, 50);
ellipse(675, 260, 45, 44);
ellipse(665, 260, 40, 31);
ellipse(705, 260, 45, 44);
ellipse(715, 260, 40, 31);




fill(255);
line(510, 230, 510, 190);






//mother flower leaves
push();
translate(width/2, height/2);
var cir = 360/9*(frameCount%9); 
rotate(radians(cir));
noStroke();
fill(255);
ellipse(0, 2, 2, 36);
pop();
//mother flower center


//left mini flower 1 leaves
push();
translate(605, 420);
var cir = 360/9*(frameCount%9); 
rotate(radians(cir));
noStroke();
fill(255);
ellipse(0, 0.5, 0.5, 36);
pop();
//left mini flower 1 center
noStroke();
fill(255);
ellipse(605, 420, 2, 2);

push();
translate(690, 275);
var cir = 360/9*(frameCount%9); 
rotate(radians(cir));
noStroke();
fill(255);
ellipse(10, 2, 2, 16);
pop();
//left mini flower 1 center

push();
translate(750, 275);
var cir = 360/9*(frameCount%9); 
rotate(radians(cir));
noStroke();
fill(255);
ellipse(10, 2, 2, 26);
pop();
//left mini flower 1 center
noStroke();
fill(255);
ellipse(605, 420, 2, 2);




//right mini flower 2 leaves
push();
translate(680, 370);
var cir = 360/9*(frameCount%9); 
rotate(radians(cir));
noStroke();
fill(255);
ellipse(0, 0.25, 0.25, 56);
pop();
//right mini flower 2 center
noStroke();
fill(255);
ellipse(680, 370, 2, 2);

//ny oveni
push();
translate(680, 370);
var cir = 360/9*(frameCount%9); 
rotate(radians(cir));
noStroke();
fill(255);
ellipse(0, 1.5, 1.5, 26);
pop();
//right mini flower 2 center
noStroke();
fill(255);
ellipse(680, 370, 2, 2);
//ny oveni
push();
translate(680, 370);
var cir = 360/9*(frameCount%9); 
rotate(radians(cir));
noStroke();
fill(255);
ellipse(0, 3, 3, 40);
pop();
//right mini flower 2 center
noStroke();
fill(255);
ellipse(680, 370, 2, 2);

push();
translate(755, 400);
var cir = 360/9*(frameCount%9); 
rotate(radians(cir));
noStroke();
fill(255);
ellipse(0, 1.8, 1.8, 36);
pop();
//left mini flower 1 center
noStroke();
fill(255);
ellipse(605, 420, 2, 2);

push();
translate(755, 450);
var cir = 360/9*(frameCount%9); 
rotate(radians(cir));
noStroke();
fill(255);
ellipse(0, 0.8, 0.8, 36);
pop();
//left mini flower 1 center
noStroke();
fill(255);
ellipse(605, 420, 2, 2);

textSize(32);
fill(192,192,192);
text("Patience...", 580, 600);
}z