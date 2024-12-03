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

// Variables and Constants


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}
