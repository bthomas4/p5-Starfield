var stars = [];
var speed;
var max_speed = 25;

function setup() {
  createCanvas(400, 400);
  speed = 0;
  for (var i = 0; i < 500; i++){
    stars[i] = new Star();
  }
}

function draw() {
  background(0);
  translate(width/2, height/2);
  
  if (mouseIsPressed) {
    speed = min(speed+0.05, max_speed);
  }
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}
 
function mousePressed() {
  if (speed == max_speed) {
    speed = 0;
  }
}
