function setup() {
createCanvas(400, 180);
console.log("hello world");


// p5 Color object
background(color(176, 196, 222));
}
function draw() {
var c = color(255, 224, 196);  // Define color 'c'
fill(c);  // Use color variable 'c' as fill color
ellipse(200, 100, 80, 80);
fill(255);
ellipse(285, 90, 17, 20);
// ellipse(202, 116, 10, 15); // den runde mund
ellipse(315, 90, 17, 20);
ellipse(285, 92, 7, 7); //øjenfarven
ellipse(315, 92, 7, 7);
fill(0);
ellipse(285, 92, 7, 7); //sorte farve i øjnene
ellipse(315, 92, 7, 7);
textSize(32);
textFont("Arial Black");
text("Loading...", 90, 30);


arc(200, 109, 25, 30, 0, 3.14, PI+QUARTER_PI, CHORD);
line(206, 70, 222, 75);
line(194, 70, 178, 75);
line(200, 140, 200, 180);
line(170, 155, 200, 170);
line(230, 155, 200, 170);
}
