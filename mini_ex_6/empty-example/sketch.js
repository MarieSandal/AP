//credit: http://www.openprocessing.org/sketch/228000
//sketch07
var r = 0;
var status = "up";
var randomtext = ["Is this art?", "What is art?", "Is there any meaning behind this?", "Or is it just a bunch of cirlces in random colors?", "I need answers...", "Who made this?"] //array
var yaytext = ["I'm still confused!", "Does it have to have a meaning?", "Why can't it just be pretty?", "Too many thoughts..."]

function setup() {
 
 createCanvas(windowWidth, windowHeight);   //create a drawing canvas
strokeWeight(1); // Stroke weight to 8 pixels

 frameRate(6);
}

function draw() {
   background(random(255), random(255), random(255)); // making the background color random

// choosing the placement of the circles
  for (var xcor = 0; xcor < width-10; xcor += 20){   
    for (var ycor = 0; ycor < height-10; ycor += 20){  
       drawSomething(xcor, ycor);  
     }
  }   
  
  //to keep increasing or decreasing the ellipses - the first rule
  if (status == "up") {
  	r+=0.02;   //increase the size at a time   
  }else{
  	r-=0.02;
  }

//second rule - decides which array of words to be shown
  if (status == "up") {
  fill(255);
  textSize(28);
  stroke(0);
  textFont("Arial");
  text(random(randomtext), width / 2.95, height / 7.5);
  } else{
    textFont("Arial Black");
    fill(random(255), random(255), random(255));
    text(random(yaytext), width / 2.95, height / 7.5);
  }
  //if it reaches certain size, change the direction
  if (r > 2.5){    //until r reaches a certain number, reset the status
   status = "down";
  }else if (r < 0) {
   status = "up";
  }

   console.log(r);    
}

//draws random colored ellipses - third rule
function drawSomething(x, y) { 
fill(random(255), random(255), random(255), random(255))  // total horizontal ellipses (x axis = width/50); total vertical ellipses 19 (y axis = height/50) ) x2 ellipses (draw 2 ellipses at a time, see below) 
  ellipse(x+1, y+1, 20*r, 20*r);  //try to change with rect to see the effect
  ellipse(x+1, y+1, 20*r, 20*r);
  ellipse(x+10, y+20, 50*r, 50*r);
  // ellipse(x+25, y+50, 70*r, 50*r);
  // arc(x+50, y+25, 50*r, 50*r, 0, HALF_PI);

}
