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
    if (this.x <= width/10 - this.speed) {
      this.x += this.speed;
      console.log(this.x);
    }
    if (this.y >= height/1.5 && this.x === width/10) {
      this.y += this.speed;
    }
    if (this.x <= width / 5 && this.y === height/1.5) {
      this.x += this.speed;
    }
    if (this.y <= height/3 && this.x === width/5) {
      this.y -= this.speed;
    }
  }
}

// The Class for our 'normal' enemies; enemies with medium damage, speed and health to set a baseline for the other enemy types.
class NormalEnemy extends Enemy {
  constructor(y) {
    super(y);
    this.health = 10;
    this.speed += 1;
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
  for (let enemy of grid) {
    enemy.move();
    enemy.display();
    drawPath();
    
  }
}

function drawPath() {
  line(0, height/2,  width/10, height/2);
  line(width/10, height/2, width/10, height/1.5);
  line(width/10, height/1.5, width/5, height/1.5);
  line(width/5, height/1.5, width/5, height/3);
  line(width/5, height/3, width/10 * 3, height/3);
  line(width/10 * 3, height/3, width/10 * 3, height/1.25);
  line(width/10 * 3, height/1.25, width/5 * 2, height/1.25);
  line(width/5 * 2, height/1.25, width/5 * 2, height/4);
  line(width/5 * 2, height/4, width/5 * 3, height/4);
  line(width/5 * 3, height/4, width/5 * 3, height/1.25);
  line(width/5 * 3, height/1.25, width/10 * 7, height/1.25);
  line(width/10 * 7, height/1.25, width/10 * 7, height/3);
  line(width/10 * 7, height/3, width/5 * 4, height/3);
  line(width/5 * 4, height/3, width/5 * 4, height/1.5);
  line(width/5 * 4, height/1.5, width/10 * 9, height/1.5);
  line(width/10 * 9, height/1.5, width/10 * 9, height/2);
  line(width/10 * 9, height/2, width, height/2);
}

function mousePressed() {
  let someEnemy = new NormalEnemy(height/2);
  grid.push(someEnemy);
}

