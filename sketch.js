var basket;
var paper;
var allMyPapers;

var manyPapers = [];
var amountOfManyPapers = 30;

function preload() {
  basket = loadImage("./assets/basket.png");
  paper = loadImage("./assets/paper.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < amountOfManyPapers; i++) {
    allMyPapers = new Paper(random(0, windowWidth), random(0, windowHeight));
    manyPapers.push(allMyPapers);
  }

}

function draw() {
  background('grey');
  for (var i = 0; i < manyPapers.length; i++) {
    var allMyPapers = manyPapers[i];

    allMyPapers.move();
    allMyPapers.show();
  }

  image(basket, map(rotationY, -180, 180, 1, width), windowHeight - basket.height/4, basket.width/4, basket.height/4);
}

function Paper(_x, _y) {
  var paperWidth = 80;
  var paperHeight = 80;

  this.x = _x;
  this.y = _y;
  this.speed = 3;

  var xIncrease = 0;
  var yIncrease = 1;

  this.move = function() {
    this.x += xIncrease * this.speed;
    this.y += yIncrease * this.speed;
  }

  this.show = function() {
    image(paper, this.x, this.y, paperWidth, paperHeight);
  }
}
