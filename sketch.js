// Swagalicous Tower defense
// Riley Sane and Chase Buniak
// January whenever, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// to do list
// - floor the lines for the path
// - get rid of console.log in enemy.move()

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
  constructor(x, y, radius, damage, attackSpeed, range) {
    super(x, y, radius);
    this.color = color;
    this.damage = damage;
    this.range = range;
  }

}

// Parent Class for the enemies.
class Enemy {
  constructor(y) {
    this.x = 0;
    this.y = y;
    this.radius = 10;
    this.speed = 1;
  }

  display() {
    noStroke();
    circle(this.x, this.y, this.radius);
  }

  move() {
    if (this.x < width/10 - this.speed) {
      this.x += this.speed;
    }
    if (this.y < Math.floor(height/1.5) && this.x === Math.floor(width/10)) {
      this.y += this.speed;
    }
    if (this.x < Math.floor(width/5) && this.y === Math.floor(height/1.5)) {
      this.x += this.speed;
    }
    if (this.y > Math.floor(height/3) && this.x === Math.floor(width/5)) {
      this.y -= this.speed;
    }
    if (this.x < Math.floor(width/10*3) && this.y === Math.floor(height/3)) {
      this.x += this.speed;
    }
    if (this.y < Math.floor(height/1.25) && this.x === Math.floor(width/10 * 3)) {
      this.y += this.speed;
    }
    if (this.x < Math.floor(width/5 * 2) && this.y === Math.floor(height/1.25)) {
      this.x += this.speed;
    }
    if (this.y > Math.floor(height/4) && this.x === Math.floor(width/5 * 2)) {
      this.y -= this.speed;
    }

  }
}

// The Class for our 'normal' enemies; enemies with medium damage, speed and health to set a baseline for the other enemy types.
class NormalEnemy extends Enemy {
  constructor(y) {
    super(y);
    this.health = 10;
    this.speed = 1;
    this.damage = 1;
    this.color = 'red';
  }
  display() {
    fill(this.color);
    super.display();
  }
  
  move() {
    super.move();
  }

}

// Variables and Constants
let grid = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawPath();
  for (let enemy of grid) {
    enemy.move();
    enemy.display();
  }
}

function drawPath() {
  stroke('black');
  line(0, Math.floor(height/2),  Math.floor(width/10), Math.floor(height/2));
  line(Math.floor(width/10), Math.floor(height/2), Math.floor(width/10), Math.floor(height/1.5));
  line(Math.floor(width/10), Math.floor(height/1.5), Math.floor(width/5), Math.floor(height/1.5));
  line(Math.floor(width/5), Math.floor(height/1.5), Math.floor(width/5), Math.floor(height/3));
  line(Math.floor(width/5), Math.floor(height/3), Math.floor(width/10 * 3), Math.floor(height/3));
  line(Math.floor(width/10 * 3), Math.floor(height/3), Math.floor(width/10 * 3), Math.floor(height/1.25));
  line(Math.floor(width/10 * 3), Math.floor(height/1.25), Math.floor(width/5 * 2), Math.floor(height/1.25));
  line(Math.floor(width/5 * 2), Math.floor(height/1.25), Math.floor(width/5 * 2), Math.floor(height/4));
  line(Math.floor(width/5 * 2), Math.floor(height/4), Math.floor(width/5 * 3), Math.floor(height/4));
  line(Math.floor(width/5 * 3), Math.floor(height/4), Math.floor(width/5 * 3), Math.floor(height/1.25));
  line(Math.floor(width/5 * 3), Math.floor(height/1.25), Math.floor(width/10 * 7), Math.floor(height/1.25));
  line(Math.floor(width/10 * 7), Math.floor(height/1.25), Math.floor(width/10 * 7), Math.floor(height/3));
  line(Math.floor(width/10 * 7), Math.floor(height/3), Math.floor(width/5 * 4), Math.floor(height/3));
  line(Math.floor(width/5 * 4), Math.floor(height/3), Math.floor(width/5 * 4), Math.floor(height/1.5));
  line(Math.floor(width/5 * 4), Math.floor(height/1.5), Math.floor(width/10 * 9), Math.floor(height/1.5));
  line(Math.floor(width/10 * 9), Math.floor(height/1.5), Math.floor(width/10 * 9), Math.floor(height/2));
  line(Math.floor(width/10 * 9), Math.floor(height/2), Math.floor(width), Math.floor(height/2));
}

function mousePressed() {
  let someEnemy = new NormalEnemy(height/2);
  grid.push(someEnemy);
}

