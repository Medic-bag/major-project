// Swagalicous Major Project 2: Electric Boogaloo
// Riley Sane and Chase Buniak
// January whenever, 2024
//
// Extra for Experts:
// - 

// Classes
// Parent class for the towers.
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
    this.cost = 100;
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
    this.cost = 50;
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
    this.cost = 20;
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

// The Class for the slow enemies; enemies with high health, the highest damage, and lower speed.
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
let pathArray = [[0, 2, 0.1, 2], [0.1, 2, 0.1, 1.5], [0.1, 1.5, 0.2, 1.5], [0.2, 1.5, 0.2, 3], [0.2, 3, 0.3, 3], [0.3, 3, 0.3, 1.25], [0.3, 1.25, 0.4, 1.25], [0.4, 1.25, 0.4, 4], [0.4, 4, 0.6, 4], [0.6, 4, 0.6, 1.25], [0.6, 1.25, 0.7, 1.25], [0.7, 1.25, 0.7, 3], [0.7, 3, 0.8, 3], [0.8, 3, 0.8, 1.5], [0.8, 1.5, 0.9, 1.5], [0.9, 1.5, 0.9, 2], [0.9, 2, 1, 2]];
let bossCounter = 0;
let hit = false;
let collide = false;
let touching = false;
let controlsShowing = true;
let song1;
let song2;
let song3;
let song1Playing = false;
let song2Playing = false;
let song3Playing = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  song1 = createAudio('blueshift.mp3');
  song2 = createAudio('electriclandscape.mp3');
  song3 = createAudio('newtouch.mp3');

  song1.play();
  song1.onended(song2.play());
  song2.onended(song3.play());
  song3.onended(song1.play());


  // playSongs();
  // song1.onended(playSongs());
  // song2.onended(playSongs());
  // song3.onended(playSongs());
}

function draw() {
  background(0);
  runGame();
}

// Displays the UI for when the game is running.
function ui() {
  fill('white');
  text('Health: ' + playerHealth, 10, 10);
  text('Money: $' + money, 10, 30);
  text('Round: ' + round, 10, 50);

  text("Press 'esc' to show / hide controls", width - 250, 10);
  if (controlsShowing) {
    text("Press '3' for Close Range tower: $20", width - 250, 30);
    text("Press '2' for Basic tower: $50", width - 250, 50);
    text("Press '1' for Long Range tower: $100", width - 250, 70);
    text("Press 'Spacebar' to start a new round", width - 250, 90);
    text("Click on a tower to sell it for half it's price",width - 250, 110);
  }
  
  fill(255, 255, 255, 70);
  circle(mouseX, mouseY, 20);
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
  for (let i = 0; i < 17; i++) {
    line(Math.floor(width * pathArray[i][0]), Math.floor(height/pathArray[i][1]), Math.floor(width * pathArray[i][2]), Math.floor(height/pathArray[i][3]));
  }
}

// Runs a for loop to find if a tower would be colliding with the path when place.
function pathCollision() {
  for (let i = 0; i < 17; i++) {
    touching = collideLineCircle(Math.floor(width * pathArray[i][0]), Math.floor(height/pathArray[i][1]), Math.floor(width * pathArray[i][2]), Math.floor(height/pathArray[i][3]), mouseX, mouseY, 20);
    if(touching === true) {
      break;
    }
  }
}

// Starts a round when the space bar is pressed, as long as there isn't a round already running, and places a tower when 1, 2 or 3 is pressed. 
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
  
  if (keyCode === 49 && money >= 100 && towerIsPlaceable && !touching) {
    let someTower = new LongRange(mouseX, mouseY, 10);
    towerArray.push(someTower);
    money -= someTower.cost;
  }
  
  if (keyCode === 50 && money >= 50 && towerIsPlaceable && !touching) {
    let someTower = new MediumRange(mouseX, mouseY, 10);
    towerArray.push(someTower);
    money -= someTower.cost;
  }
  
  if (keyCode === 51 && money >= 20 && towerIsPlaceable && !touching) {
    let someTower = new CloseRange(mouseX, mouseY, 10);
    towerArray.push(someTower);
    money -= someTower.cost;
  }
  
  if (keyCode === 27) {
    controlsShowing = !controlsShowing;
  }
}

// Sells a tower when you click on it.
function mousePressed() {
  for (let tower of towerArray) {
    let index = towerArray.indexOf(tower);
    if (dist(mouseX, mouseY, tower.x, tower.y) <= tower.radius) {
      money += tower.cost / 2;
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
    // money += 5;
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
    pathCollision();
    
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

// Plays background music.
// function playSongs() {
//   if (song1Playing === true) {
//     song1Playing = false;
//     song2Playing = true;
//     song2.play();
//   }

//   else if (song2Playing === true) {
//     song2Playing = false;
//     song3Playing = true;
//     song3.play();
//   }

//   else {
//     song3Playing = false;
//     song1Playing = true;
//     song1.play();
//   } 
// }