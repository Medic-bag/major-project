// Swagalicous Major Project 2: Electric Boogaloo
// Riley Sane and Chase Buniak
// January whenever, 2024
//
// Extra for Experts:
// - Chase sucks at this game also.

// to do list
// collisoin with path

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
    this.damage = 0.7;
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
    this.reward = 1;
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
    this.damage = 5;
    this.color = color(255, 0, 45);
    this.reward = 7;
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
    this.health = 3;
    this.speed = 1;
    this.damage = 100;
    this.color = color(229, 199, 50);
    this.reward = 3;
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

// The Class for our Boss enemy; Has lots of health, damage, but extremely slow. (also fat)
class BossEnemy extends Enemy {
  constructor(radius) {
    super(radius);
    this.health = 250;
    this.speed = 0.25;
    this.damage = 50;
    this.color = color(255, 165, 0);
    this.reward = 200;
    this.radius = this.radius * 5;
  }

  display() {
    fill(this.color);
    
    super.display();
  }
  
  move() {
    super.move();
    console.log(this.x);
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
let towerIsPlaceable = true;
let gameOver = false;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  runGame();
}

// Displays the UI for when the game is running.
function ui() {
  fill('white');
  text('Health: ' + playerHealth, 10, 10);
  text('Money: ' + money, 10, 30);
  text('Round: ' + round, 10, 50);
}

// Runs the basic ai for the enemies, displaying and moving them as well as making them deal and take damage.
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

// Draws the path that enemies follow.
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

// Starts a round when the space bar is pressed, as long as there isn't a round already running.
function keyPressed() {
  if(keyCode === 32 && roundRunning === false && gameOver === false) {
    roundRunning = true;
    round++;

    if (directorCredits === 0) {
      directorCredits = round * 15;
    }
  }
}

// Runs the basic ai for the towers allowing all of the towers to attack and be displayed.
function towerAI() {
  for (let tower of towerArray) {
    tower.display();
    tower.attack();
  }
}

// Spawns a tower at the mouse position if you are holding down a key that is designated to a tower.
function mousePressed() {
  if (gameOver === false) {
    if (towerArray.length === 0) {
      towerIsPlaceable = true;
    }
    
    else {
      for (let tower of towerArray) {
        if (dist(mouseX, mouseY, tower.x, tower.y) > 20) {
          towerIsPlaceable = true;
        }
        else {
          towerIsPlaceable = false;
        }
      }
    }
    
    if (keyIsDown(83) && money >= 100 && towerIsPlaceable) {
      let someTower = new LongRange(mouseX, mouseY, 10);
      towerArray.push(someTower);
      money -= 100;
    }
    
    if (keyIsDown(78) && money >= 50 && towerIsPlaceable) {
      let someTower = new MediumRange(mouseX, mouseY, 10);
      towerArray.push(someTower);
      money -= 50;
    }
    
    if (keyIsDown(67) && money >= 20 && towerIsPlaceable) {
      let someTower = new CloseRange(mouseX, mouseY, 10);
      towerArray.push(someTower);
      money -= 20;
    }
  }
  else {
    resetGame();
  }
}

// Uses up credits, which are given at the start of each round, to choose a random selection of enemies for each round.
function directorAI() {
  if (roundRunning === true) {
    let choice = random(10);
    if (choice <= 2 && directorCredits >= 0.5) {
      let someEnemy = new FastEnemy();
      enemyArray.push(someEnemy);
      directorCredits -= 0.5;
    }
    
    else if(choice <= 7 && directorCredits >= 2) {
      let someEnemy = new NormalEnemy();
      enemyArray.push(someEnemy);
      directorCredits -= 2;
    }
    
    else if (choice < 10 && directorCredits >= 3) {
      let someEnemy = new SlowEnemy();
      enemyArray.push(someEnemy);
      directorCredits -= 0.5;
    }
    
    else if (choice === 10){
      let someEnemy = new BossEnemy();
      enemyArray.push(someEnemy);
    }
    
  }
  if (enemyArray.length === 0) {
    roundRunning = false;
  }
}

// 
function resetGame() {
  enemyArray = [];
  playerHealth = 100;
  towerArray = [];
  money = 100;
  round = 0;
  directorCredits = 0;
  roundRunning = false;
  towerIsPlaceable = true;
  gameOver = false;
}

// Runs all of the necessary functions for the game as long as the gameOver variable is false, otherwise runs the endGameUI function. 
function runGame() {
  if (gameOver === false) {
    drawPath();
    noStroke();
    normalEnemyAI();
    ui();
    towerAI();
    directorAI();
    if (playerHealth <= 0) {
      gameOver = true;
    }
  }
  else {
    endGameUI();
  }
}

// Shows the game over screen.
function endGameUI() {
  noStroke();
  fill('white');
  text('GAME OVER', width/2 - 10, height/2);
  text('LEFT CLICK TO RESTART', width/2 - 45, height/2 + 20);
}

