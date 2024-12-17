// Swagalicous Major Project 2: Electric Boogaloo
// Riley Sane and Chase Buniak
// January whenever, 2024
//
// Extra for Experts:
// - Chase sucks at this game also.

// to do list
// Add to the ui

// Classes
class Tower {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  display() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.radius * 2);
    if (dist(mouseX, mouseY, this.x, this.y) <= this.radius) {
      fill(this.rangeColor);
      circle(this.x, this.y, this.range * 2);
    }
  }

  attack() {
    let closestEnemyIndex = 0;
    if (this.cooldown < this.attackSpeed) {
      this.cooldown++;
    }
    for (let enemy of enemyArray) {

      if (dist(enemy.x, enemy.y, width, Math.floor(height/2)) < dist(enemyArray[closestEnemyIndex].x, enemyArray[closestEnemyIndex].y, width, Math.floor(height/2))) {
        closestEnemyIndex = enemyArray.indexOf(enemy);
      }
      if (enemyArray.indexOf(enemy) === closestEnemyIndex && this.cooldown === this.attackSpeed && dist(enemyArray[closestEnemyIndex].x, enemyArray[closestEnemyIndex].y, this.x, this.y) < this.range) {
        stroke(this.color);
        line(enemy.x, enemy.y, this.x, this.y);
        enemy.health -= this.damage;
        this.cooldown = 0;
      }
    }
  }
  
}

// High damage Tower with slow attack speed and high range; bisque in colouring. 
class LongRange extends Tower {
  constructor(x, y, radius) {
    super(x, y, radius);
    this.color = color(242, 210, 189);
    this.rangeColor = color(242, 210, 189, 50);
    this.damage = 10;
    this.range = 500;
    this.attackSpeed = 60;
    this.cooldown = 0;
  }

  display() {
    
    super.display();
  }

  attack() {
    super.attack();
  }
}

// Medium Damage Tower with medium attack speed and range; purple in colouring.
class MediumRange extends Tower {
  constructor(x, y, radius) {
    super(x, y, radius);
    this.color = color(255, 0, 255);
    this.rangeColor = color(255, 0, 255, 50);
    this.damage = 4;
    this.range = 200;
    this.attackSpeed = 20;
    this.cooldown = 0;
  }

  display() {
    super.display();
  }

  attack() {
    super.attack();
  }
}

// Low damage Tower with fast attack speed and low range; light blue in colouring.
class CloseRange extends Tower {
  constructor(x, y, radius) {
    super(x, y, radius);
    this.color = color(0, 255, 255);
    this.rangeColor = color(0, 255, 255, 50);
    this.damage = 0.3;
    this.range = 100;
    this.attackSpeed = 5;
    this.cooldown = 0;
  }

  display() {
    super.display();
  }

  attack() {
    super.attack();
  }
}

// Parent Class for the enemies.
class Enemy {
  constructor() {
    this.x = 0;
    this.y = Math.floor(height/2);
    this.radius = 10;
    this.speed = 1;
  }

  display() {
    noStroke();
    circle(this.x, this.y, this.radius);
  }

  move() {
    if (this.x < Math.floor(width/10)) {
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
  constructor() {
    super();
    this.health = 10;
    this.speed = 1;
    this.damage = 1;
    this.color = color(255, 0, 0);
    this.reward = 15;
  }

  display() {
    fill(this.color);
    super.display();
  }
  
  move() {
    super.move();
  }
}

class SlowEnemy extends Enemy {
  constructor() {
    super();
    this.health = 25;
    this.speed = 0.5;
    this.damage = 1;
    this.color = color(255, 0, 45);
    this.reward = 30;
  }

  display() {
    fill(this.color);
    super.display();
  }
  
  move() {
    super.move();
  }
}

// The Class for the fast enemies; enemies with high damage, low health, and very fast speed.
class FastEnemy extends Enemy {
  constructor() {
    super();
    this.health = 5;
    this.speed = 1;
    this.damage = 10;
    this.color = color(229, 199, 50);
    this.reward = 5;
  }

  display() {
    fill(this.color);
    super.display();
  }
  
  move() {
    super.move();
    super.move();
  }
}

class BossEnemy extends Enemy {
  constructor() {
    super();
    this.health = 250;
    this.speed = 0.1;
    this.damage = 50;
    this.color = color(255, 165, 0);
    this.reward = 200;
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
let towerArray = [];
let money = 100;
let round = 0;
let directorCredits = 0;
let roundRunning = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  drawPath();
  normalEnemyAI();
  ui();
  towerAI();
  directorAI();
}

function ui() {
  fill('white');
  text('Health: ' + playerHealth, 10, 10);
  text('Money: ' + money, 10, 30);
}

function normalEnemyAI() {
  for (let enemy of enemyArray) {
    let enemyIndex = enemyArray.indexOf(enemy);
    enemy.move();
    enemy.move();
    enemy.display();
    if (enemy.x === width) {
      enemyArray.splice(enemyIndex, 1);
      playerHealth -= enemy.damage;
    }
    if (enemy.health <= 0) {
      enemyArray.splice(enemyIndex, 1);
      money += enemy.reward;
    }
  }
}

function drawPath() {
  stroke('white');
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
  if (key === 'f') {
    let someEnemy = new FastEnemy(Math.floor(height/2));
    enemyArray.push(someEnemy);
  }
  else if (key === 'm') {
    let someEnemy = new NormalEnemy(Math.floor(height/2));
    enemyArray.push(someEnemy);
  }
  else if (key === 'p') {
    let someEnemy = new SlowEnemy(Math.floor(height/2));
    enemyArray.push(someEnemy);
  }
  else if (key === 'b') {
    let someEnemy = new BossEnemy(Math.floor(height/2));
    enemyArray.push(someEnemy);
  }
  if(keyCode === 32 && roundRunning === false) {
    roundRunning = true;
    round++;
    if (directorCredits === 0) {
      directorCredits = round * 15;
    }
  }
}

function towerAI() {
  for (let tower of towerArray) {
    tower.display();
    tower.attack();
  }
}

function mousePressed() {
  if (keyIsDown(83) && money >= 100) {
    let someTower = new LongRange(mouseX, mouseY, 10);
    towerArray.push(someTower);
    money -= 100;
  }
  if (keyIsDown(78) && money >= 50) {
    let someTower = new MediumRange(mouseX, mouseY, 10);
    towerArray.push(someTower);
    money -= 50;
  }
  if (keyIsDown(67) && money >= 20) {
    let someTower = new CloseRange(mouseX, mouseY, 10);
    towerArray.push(someTower);
    money -= 20;
  }
}

function directorAI() {
  if (roundRunning === true) {
    let choice = random(3);
    if (choice <= 1 && directorCredits >= 0.5) {
      let someEnemy = new FastEnemy();
      enemyArray.push(someEnemy);
      directorCredits -= 0.5;
    }
    else if(choice <= 2 && directorCredits >= 2) {
      let someEnemy = new NormalEnemy();
      enemyArray.push(someEnemy);
      directorCredits -= 2;
    }
    else if (choice < 3 && directorCredits >= 3) {
      let someEnemy = new SlowEnemy();
      enemyArray.push(someEnemy);
      directorCredits -= 0.5;
    }
    else if (choice === 3){
      let someEnemy = new BossEnemy();
      enemyArray.push(someEnemy);
    }
  }
  if (enemyArray.length === 0) {
    roundRunning = false;
  }
}