function setup() {
createCanvas(800, 600);
console.log("hello world");
}

function draw() {
fill(255);
ellipse(200, 100, 80, 80);
ellipse(185, 90, 17, 20);
// ellipse(202, 116, 10, 15); // den runde mund
ellipse(215, 90, 17, 20);
fill(0);
ellipse(185, 92, 7, 7); //farven i øjnene
ellipse(215, 92, 7, 7);

arc(200, 109, 25, 30, 0, 3.14, PI+QUARTER_PI, CHORD);
line(206, 70, 222, 75);
line(194, 70, 178, 75);
line(200, 140, 200, 180);
}
