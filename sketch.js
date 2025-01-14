// Swagalicous Major Project 2: Electric Boogaloo
// Riley Sane and Chase Buniak
// January whenever, 2024
//
// Extra for Experts:
// - 

// to do list
// collisoin with path

// Classes
// 
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
    let farthestEnemyIndex = -1;
    let maxTraveled = -1;
  
    // Find the farthest enemy
    for (let i = 0; i < enemyArray.length; i++) {
      if (enemyArray[i].traveled > maxTraveled && dist(enemyArray[i].x, enemyArray[i].y, this.x, this.y) <= this.range) {
        maxTraveled = enemyArray[i].traveled;
        farthestEnemyIndex = i;
      }
    }
    
    // Attack the farthest enemy if within range and cooldown is complete
    if (farthestEnemyIndex !== -1 && this.cooldown >= this.attackSpeed) {
      let farthestEnemy = enemyArray[farthestEnemyIndex];
      if (dist(farthestEnemy.x, farthestEnemy.y, this.x, this.y) <= this.range) {
        stroke(this.color);
        line(farthestEnemy.x, farthestEnemy.y, this.x, this.y);
        farthestEnemy.health -= this.damage;
        this.cooldown = 0;
      }
    }
    
    else {
      this.cooldown++;
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
    this.range = width/3.5;
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
    this.damage = 5;
    this.range = width/6;
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
    this.range = width/12;
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
    this.health = 10 + round;
    this.speed = 1;
    this.damage = 1;
    this.color = color(255, 0, 0);
    this.reward = 1;
    this.traveled = 0;
  }

  display() {
    fill(this.color);
    super.display();
  }
  
  move() {
    super.move();
    this.traveled += 500;
  }
}

//
class SlowEnemy extends Enemy {
  constructor() {
    super();
    this.health = 25 + round;
    this.speed = 0.5;
    this.damage = 5;
    this.color = color(255, 0, 45);
    this.reward = 7;
    this.traveled = 0;
  }

  display() {
    fill(this.color);
    super.display();
  }
  
  move() {
    super.move();
    this.traveled += 1;
  }
}

// The Class for the fast enemies; enemies with high damage, low health, and very fast speed.
class FastEnemy extends Enemy {
  constructor() {
    super();
    this.health = 3 + round;
    this.speed = 1;
    this.damage = 3;
    this.color = color(229, 199, 50);
    this.reward = 3;
    this.traveled = 0;
  }

  display() {
    fill(this.color);
    super.display();
  }
  
  move() {
    super.move();
    super.move();
    this.traveled += 5000;
  }
}

// The Class for our Boss enemy; Has lots of health, damage, but extremely slow.
class BossEnemy extends Enemy {
  constructor(radius) {
    super(radius);
    this.health = 1000;
    this.speed = 0.25;
    this.damage = 50;
    this.color = color(255, 165, 0);
    this.reward = 200;
    this.radius = this.radius * 5;
    this.traveled = 0;
  }

  display() {
    fill(this.color);
    super.display();
  }
  
  move() {
    super.move();
    this.traveled += 0.1;
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
let firstPathXArray = [0.1, 0.1, 0.2, 0.2, 0.3, 0.3, 0.4, 0.4, 0.6, 0.6, 0.7, 0.7, 0.8, 0.8, 0.9];
let firstPathYArray = [2, 1.5, 1.5, 3, 3, 1.25, 1.25, 4, 4, 1.25, 1.25, 3, 3, 1.5, 1.5];
let secondPathXArray = [0.1, 0.2, 0.2, 0.3, 0.3, 0.4, 0.4, 0.6, 0.6, 0.7, 0.7, 0.8, 0.8, 0.9, 0.9];
let secondPathYArray = [1.5, 1.5, 3, 3, 1.25, 1.25, 4, 4, 1.25, 1.25, 3, 3, 1.5, 1.5, 2];
let bossCounter = 0;

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
  for (let i = 0; i < 15; i++) {
    line(Math.floor(width * firstPathXArray[i]), Math.floor(height/firstPathYArray[i]), Math.floor(width * secondPathXArray[i]), Math.floor(height/secondPathYArray[i]));
  }
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

  if (gameOver === false) {
    if (towerArray.length === 0) {
      towerIsPlaceable = true;
    }
    
    else {
      let towerCounter = 0;
      for (let tower of towerArray) {
        if (dist(mouseX, mouseY, tower.x, tower.y) > 20) {
          towerCounter++;
        }
      }
      if (towerCounter === towerArray.length) {
        towerIsPlaceable = true;
      }
      else {
        towerIsPlaceable = false;
      }
    }
  }

  else {
    resetGame();
  }
  
  if (keyCode === 49 && money >= 100 && towerIsPlaceable) {
    let someTower = new LongRange(mouseX, mouseY, 10);
    towerArray.push(someTower);
    money -= 100;
  }
  
  if (keyCode === 50 && money >= 50 && towerIsPlaceable) {
    let someTower = new MediumRange(mouseX, mouseY, 10);
    towerArray.push(someTower);
    money -= 50;
  }
  
  if (keyCode === 51 && money >= 20 && towerIsPlaceable) {
    let someTower = new CloseRange(mouseX, mouseY, 10);
    towerArray.push(someTower);
    money -= 20;
  }
  
  if (keyCode === 72) {
    round += 19;
    money = 10000;
  }
}

// Sells a tower when you click on it.
function mousePressed() {
  for (let tower of towerArray) {
    let index = towerArray.indexOf(tower);
    if (dist(mouseX, mouseY, tower.x, tower.y) <= tower.radius) {
      towerArray.splice(index, 1);
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
    
    else if (choice === 10 || round % 20 === 0 && bossCounter < round/20){
      let someEnemy = new BossEnemy();
      enemyArray.push(someEnemy);
      bossCounter++;
    }
    
  }
  if (enemyArray.length === 0) {
    roundRunning = false;
    bossCounter = 0;
  }

}

// Restarts the game when you click on the game over screen. 
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
    towerAI();
    normalEnemyAI();
    ui();
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
