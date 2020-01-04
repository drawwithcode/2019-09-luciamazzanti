var colors = ['yellow', 'red', 'green'];

function setup() {
   createCanvas(windowWidth,windowHeight);
   angleMode(DEGREES);
 }

function draw() {
  //campo da bocce
  background('#ECE3D3');

  stroke('grey');
  line(0, height/3, width, height/3);
  line(0, height/3*2, width, height/3*2);

  stroke('brown');
  fill('brown');
  rect(0, 0, 5, height);
  rect(width-5, 0, width, height);

  //boccino
  fill('white');
  noStroke();
  ellipse(windowWidth/4, windowHeight/6, 20);

  //bocce
  fill('yellow');
  ellipse(map(rotationX, -180, 180, 1, windowWidth), map(rotationZ, 0, 360, 1, windowHeight), 50);

  fill('red');
  ellipse(map(rotationY, -180, 180, 1, windowWidth), map(rotationX, -180, 180, 1, windowHeight), 50);

  fill('green');
  ellipse(map(rotationZ, 0, 360, 1, windowWidth), map(rotationY, -180, 180, 1, windowHeight), 50);

  for (var i = 0; i < touches.length; i++) {
    // One color per finger
    fill(colors[i]);
    // Draw a circle at each finger
    ellipse(touches[i].x, touches[i].y, 50);
  }
}

function touchMoved() {
return false;
 }

 function touchEnded() {
   DeviceOrientationEvent.requestPermission();
 }
