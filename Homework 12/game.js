var characterx = 50;
var charactery = 50;
var diameter = 25;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var shapex = 30;
var shapey = 50;
var shapexspeed;
var shapeyspeed;

var shapexx = 50;
var shapeyy = 80;
var shapexxspeed;
var shapeyyspeed;

var mouseshapex;
var mouseshapey;

function setup()
{
    createCanvas(800,600);
    shapexspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeyspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapexxspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeyyspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createCharacter(200,200);
}

function draw()
{
    background(254,113,242);
    exit();
    createBorders(10);
    drawCharacter();
    characterMovement();
    object();
    win();
}

function characterMovement()
{
    if(keyIsDown(w))
    {
        charactery-=10;
    }
    if(keyIsDown(s))
    {
        charactery+=10;
    }
    if(keyIsDown(a))
    {
        characterx-=10;
    }
    if(keyIsDown(d))
    {
        characterx+=10;
    }
}

function createCharacter(x,y)
{
    characterx=x;
    charactery=y;
}

function drawCharacter()
{
    fill(37,48,254);
    circle(characterx,charactery,25);
}

function createBorders(thickness)
{
    rect(0,0,width,thickness);
    rect(0,0,thickness,height);
    rect(0, height-thickness,width, thickness);
    rect(width-thickness,0,thickness,height-50);
}

function mouseClicked()
{
    mouseshapex = mouseX;
    mouseshapey = mouseY;
}

function object()
{
    fill(250,0,0);
    circle(shapex,shapey,30);
    shapex += shapexspeed;
    shapey += shapeyspeed;
    if(shapex > width)
        {
            shapex = 0;
        }
    if(shapex < 0)
        {
            shapex = width;
        }
    if(shapey > height)
        {
            shapey = 0;
        }
    if(shapey < 0)
        {
            shapey = height;
        }

    fill(0,250,0);
    circle(shapexx,shapeyy,50);
    shapexx += shapexxspeed;
    shapeyy += shapeyyspeed;

    if(shapexx > width)
        {
            shapexx = 0;
        }
    if(shapexx < 0)
        {
            shapexx = width;
        }
    if(shapeyy > height)
        {
            shapeyy = 0;
        }
    if(shapeyy < 0)
        {
            shapeyy = height;
        }
}

function exit()
{
    stroke(0);
    fill(0);
    textSize(21);
    text("EXIT", width-60,height-60)
}

function win()
{
    if(characterx > width && charactery > width-260)
        {
            fill(0);
            stroke(5);
            textSize(26);
            text("You Win!", width/2-50, height/2-50);
        }

        fill(243,254,35);
        circle(mouseshapex, mouseshapey, 10);
}