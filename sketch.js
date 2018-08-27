var player;
var enemy;
var enemy2;
var enemy3;
var enemy4;
var isGameOver;
var backgroundImage;

function preload() {
    backgroundImage = loadImage("https://i.imgur.com/OEvL6WN.jpg")
}
function setup() {
    isGameOver = false;
    createCanvas(700, 700);
    player = createSprite(width / 2, height - 25, 50, 50);//sets height, width, coordinates
    enemy = createSprite(width / 2, 0, 20, 60);
    enemy.rotationSpeed = 4.0
    enemy2 = createSprite(width / 2, 0, 60, 20);
    enemy2.rotationSpeed = 2.0
    enemy3 = createSprite(width / 2, 0, 40, 20);
    enemy3.rotationSpeed = 6.0
    enemy4 = createSprite(width / 2, 0, 10, 30);
}
function draw() {
    if (isGameOver) {
        gameOver()
    } else {
        if (enemy.overlap(player)) {
            isGameOver = true;
        }
        if (enemy2.overlap(player)) {
            isGameOver = true;
        }
        if (enemy3.overlap(player)) {
            isGameOver = true;
        }
        if (enemy4.overlap(player)) {
            isGameOver = true;
        }
        //the collision detection overlap provdies this
        if (enemy.overlap(player)) {
            gameOver();
        }
        if (enemy2.overlap(player)) {
            gameOver();
        }
        if (enemy3.overlap(player)) {
            gameOver();
        }
        if (enemy4.overlap(player)) {
            gameOver();
        }
        // background(0, 0, 100)//RGB attributes for the color of the background
        background(backgroundImage)
        //adding ability to move the sprite, will go back and add up down as well
        if (keyDown(RIGHT_ARROW) && player.position.x < (width - 25)) {
            player.position.x = player.position.x + 5;
        }
        if (keyDown(LEFT_ARROW) && player.position.x > 25) {
            player.position.x = player.position.x - 5;
        }
        enemy.position.y = enemy.position.y + 10;
        if (enemy.position.y > height) {
            enemy.position.y = 0;
            enemy.position.x = random(5, width - 5)
        }
        enemy2.position.y = enemy2.position.y + 8;
        if (enemy2.position.y > height) {
            enemy2.position.y = 0;
            enemy2.position.x = random(30, width - 2)
        }
        enemy3.position.y = enemy3.position.y + 12;
        if (enemy3.position.y > height) {
            enemy3.position.y = 0;
            enemy3.position.x = random(11, width - 2)
        }
        enemy4.position.y = enemy4.position.y + 15;
        if (enemy4.position.y > height) {
            enemy4.position.y = 0;
            enemy4.position.x = random(20, width - 2)
        }
        drawSprites()
    }
}
function gameOver() {
    background(0);
    textAlign(CENTER)
    fill("white")
    text("Game Over", width / 2, height / 2)
    text("Click anywhere to try again", width / 2, 3 * height / 4)
}
function mouseClicked() {
    if (isGameOver) {
        isGameOver = false;
        player.position.x = width / 2
        player.position.y = height - 25
        enemy.position.x = width / 2
        enemy.position.y = 0
        enemy2.position.x = width / 4
        enemy2.position.y = -20
        enemy3.position.x = width / 6
        enemy3.position.y = 10
        enemy4.position.x = width / 8
        enemy4.position.y = -45
    }
}
