// Swagalicous Tower defense
// Riley Sane and Chase Buniak
// January whenever, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Classes
class Tower {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  display() {
    noStroke();
    circle(this.x, this.y, this.radius * 2);
  }
}

// High damage Tower with slow attack speed and high range
class Sniper extends Tower {
  constructor(x, y, radius, color, damage, attackSpeed, range) {
    super(x, y, radius);
    this.color = color;
    this.damage = damage;
    this.range = range;
  }

}

class Enemy {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  display() {
    noStroke();
    circle(this.x, this.y, this.radius);
  }

  move()  {

  }
}



// Variables and Constants


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawPath();
}

function drawPath() {
  line(0, height/2,  width/ 10, height/2);
  line(width/10, height/2, width/10, height/1.5);
  line(width/10, height/1.5, width/5, height/1.5);
  line(width/5, height/1.5, width/5, height/3);
  line(width/5, height/3, width/10 * 3, height/3);
  line(width/10 * 3, height/3, width/10 * 3, height/1.25);
  line(width/10 * 3, height/1.25, width/5 * 2, height/1.25);
  line(width/5 * 2, height/1.25, width/5 * 2, height/4);
  line(width/5 * 2, height/4, width/5 * 3, height/4);
  line(width/5 * 3, height/4, width/5 * 3, height/1.25);
  line(width/5 * 3, height/4, width/5 * 3, height/1.25);
}