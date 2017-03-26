// var checkbox;
checkboxes = [];
var xtext = innerWidth/2
var ytext = innerHeight/1.23
var randomtext = ["dare to click me?", "click click click", "you can draw an emoji", "want to draw something?", "it's all yours"]
var slider


function setup() {

  createCanvas(windowWidth, windowHeight);
// laver en slider, der ændrer med gråtoner i baggrundsfarven
  slider = createSlider(0, 255, 100);
  slider.position(innerWidth/2, innerHeight/1.2);
  slider.style('width', '80px');

//skaber checkboxene i et for loop
for (var x = innerWidth / 4; x <= innerWidth / 1.25; x += 13) {
    for (var y = 40; y <= innerHeight / 1.3; y += 13) {  
  var checkbox = createCheckbox('', false);
   checkbox.position(x, y); 
   // via denne funktion kan vi se, hvor mange der er sat flueben i
  checkbox.changed(myCheckedEvent);
  // ved denne funktion samles checkboxene i et array
  checkboxes.push(checkbox);

   }
  }
  frameRate(1.5);

}

function draw () {
  background(255);
  // fortæller hvad det er slideren skal ændre til gråtoner
    var val = slider.value();
    background(val);

  // tekst bliver sat random ind fra arrayet
    fill(255, 69, 0);
    text(random(randomtext), xtext, ytext);

    
}

// en måde, hvorpå man kan checke i consol loggen, hvor mange 
// checkboxes, der er sat flueben i
function myCheckedEvent() {
  if (this.checked()) {
    console.log("Checking!");
  } else {
    console.log("Unchecking!");
   
  }
}