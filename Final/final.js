var characterx = 200
var charactery = 250

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var shapeXs = [];
var shapeYs = [];
var diameters = [];
var shapeXSpeeds = [];

var gameOver = false;

function setup() {
    createCanvas(1000, 500);
    initializeMeteors();
}

function draw() {
    background(0);
    if (!gameOver) {
    charactermovement();
    drawcharacter();
    drawobjects();
    moveobjects();
    checkCollision();
    }   else {
    displayGameOver();
    }
}

function drawcharacter() {
    fill(254);
    circle(characterx, charactery, 40);
    fill(200);
    circle(characterx, charactery, 25);
    fill(158, 228, 254);
    circle(characterx, charactery, 10);
}

function charactermovement() {
    if (keyIsDown(w)) {
        charactery -= 10;
    }
    if (keyIsDown(s)) {
        charactery += 10;
    }
    if (charactery < 0) {
        charactery = height;
    }
    if (charactery > height) {
        charactery = 0;
    }
}

function drawobjects() {
        for (var i = 0; i < shapeXs.length; i++) {
            fill(160);
            circle(shapeXs[i], shapeYs[i], diameters[i]);
        }
}

function moveobjects() {
    for (var i = 0; i < shapeXs.length; i++) {
        shapeXs[i] -= shapeXSpeeds[i];
        if (shapeXs[i] < 0) {
            shapeXs[i] =  width + Math.random() * 1000;
            shapeYs[i] = Math.random() * height;
        }
    }
}

function checkCollision() {
    for (var i = 0; i < shapeXs.length; i++) {
        var distance = dist(characterx, charactery, shapeXs[i], shapeYs[i]);
        if (distance < 20 + diameters[i] / 2) {
            gameOver = true;
        }
    }
}

function displayGameOver() {
    textSize(60);
    fill(251, 3, 3);
    textAlign(CENTER, CENTER);
    text("You Died", width / 2, height / 2);
    textSize(30);
    text("Press R to Restart", width / 2, height / 2 + 80);
}

function keyPressed() {
    if (gameOver && key === 'r') {
        resetGame();
    }
}

function resetGame() {
    gameOver = false;
    characterx = 200;
    charactery = 250;
    for (var i = 0; i < 5; i++) {
        shapeXs[i] = width + Math.random() * 1000;
        shapeYs[i] = Math.random() * height;
    }
}

function resetGame() {
    gameOver = false;
    characterx = 200;
    charactery = 250;
    initializeMeteors();
}

function initializeMeteors() {
    for (var i = 0; i < 10; i++) {
        shapeXSpeeds[i] = 10 + Math.random() * 5;
        shapeXs[i] = width + Math.random() * 1000;
        shapeYs[i] = Math.random() * height;
        diameters[i] = Math.random() * 50 + 10;
    }
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}