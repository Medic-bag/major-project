// Swagalicous Major Project 2: Electric Boogaloo
// Riley Sane and Chase Buniak
// January whenever, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// to do list
// Fix tower classes
// Make a tower
// Add to the ui
// Have enemies be damagable

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
  constructor(color, damage, attackSpeed, range) {
    super(x, y, radius);
    this.color = 'yellow';
    this.damage = 7;
    this.range = 50;
    this.attackSpeed = 2;
  }

  attack() {
    let closestEnemyIndex = 0;
    for (enemy in enemyArray) {
      if (dist(enemy.x, enemy.y, width, Math.floor(height/2)) > dist(closestEnemyIndex.x, closestEnemyIndex.y, width, Math.floor(height/2))) {
        closestEnemyIndex = enemyArray.indexOf(enemy);
      }
      if (enemyArray.indexOf(enemy) === closestEnemyIndex) {
        enemy.health -= this.damage;
      }
    }
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
    else if (this.y < Math.floor(height/1.5) && this.x === Math.floor(width/10)) {
      this.y += this.speed;
    }
    else if (this.x < Math.floor(width/5) && this.y === Math.floor(height/1.5)) {
      this.x += this.speed;
    }
    else if (this.y > Math.floor(height/3) && this.x === Math.floor(width/5)) {
      this.y -= this.speed;
    }
    else if (this.x < Math.floor(width/10*3) && this.y === Math.floor(height/3)) {
      this.x += this.speed;
    }
    else if (this.y < Math.floor(height/1.25) && this.x === Math.floor(width/10 * 3)) {
      this.y += this.speed;
    }
    else if (this.x < Math.floor(width/5 * 2) && this.y === Math.floor(height/1.25)) {
      this.x += this.speed;
    }
    else if (this.y > Math.floor(height/4) && this.x === Math.floor(width/5 * 2)) {
      this.y -= this.speed;
    }
    else if (this.x < Math.floor(width/5 * 3) && this.y === Math.floor(height/4)) {
      this.x += this.speed;
    }
    else if (this.y < Math.floor(height/1.25) && this.x === Math.floor(width/5 * 3)) {
      this.y += this.speed;
    }
    else if (this.x < Math.floor(width/10 * 7) && this.y === Math.floor(height/1.25)) {
      this.x += this.speed;
    }
    else if (this.y > Math.floor(height/3) && this.x === Math.floor(width/10 * 7)) {
      this.y -= this.speed;
    }
    else if (this.x < Math.floor(width/5 * 4) && this.y === Math.floor(height/3)) {
      this.x += this.speed;
    }
    else if (this.y < Math.floor(height/1.5) && this.x === Math.floor(width/5 * 4)) {
      this.y += this.speed;
    }
    else if (this.x < Math.floor(width/10 * 9) && this.y === Math.floor(height/1.5)) {
      this.x += this.speed;
    }
    else if (this.y > Math.floor(height/2) && this.x === Math.floor(width/10 * 9)) {
      this.y -= this.speed;
    }
    else if (this.x < width && this.y === Math.floor(height/2)) {
      this.x += this.speed;
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
let enemyArray = [];
let playerHealth = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawPath();
  normalEnemyAI();
  ui();
}

function ui() {
  fill('black');
  text(playerHealth, 10, 10);
}

function normalEnemyAI() {
  for (let enemy of enemyArray) {
    let enemyIndex = enemyArray.indexOf(enemy);
    enemy.move();
    enemy.move();
    enemy.display();
    if (enemy.x === width) {
      enemyArray.splice(enemyIndex, 1);
      playerHealth -= 1;
    }
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
  line(Math.floor(width/10 * 9), Math.floor(height/2), width, Math.floor(height/2));
}

function keyPressed() {
  let someEnemy = new NormalEnemy(height/2);
  enemyArray.push(someEnemy);
}

