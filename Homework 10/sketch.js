var redColor = 100;
var greenColor = 100;
var blueColor = 100;

var x = 245;

var xx = 235;

var y = 560;
var y1 = 480;
var y2 = 545;

var yy = 590;
var yy1 = 525;
var yy2 = 610;

var xxx = 420;
var yyy = 110;

var movement;
var movement1;
var movement2;
var movement3;
var movement4;

var size = 55;
var count = 0;
var sizeDirection = 2;

function setup()
{
    createCanvas(600, 700);
    movement = floor(random() * 10) + 1;
    movement1 = floor(random() * 10) + 1;
    movement2 = floor(random() * 10) + 1;
    movement3 = floor(random() * 10) + 1;
    movement4 = floor(random() * 10) + 1;
}
function draw()
{
    background(redColor, greenColor, blueColor);
    fill(50);
    circle(300, 150, 120);
    fill(200);
    circle(300, 150, 100);
    fill(53, 197, 249);
    ellipse(270, 165, 50, 30);
    ellipse(330, 165, 50, 30);
    fill(50);
    rect(250, 120, 100, 25);
    fill(0);
    line(350, 155, 375, 150);
    line(355, 160, 380, 155);
    line(250, 155, 225, 150);
    line(245, 160, 220, 155);
    fill(200);
    rect(320, 205, 75, 150);
    fill(50);
    rect(200, 250, 75, 175);
    fill(200);
    square(300, 370, 50);
    rect(240, 460, 30, 120);


    fill(230, 255, 0);
    triangle(325, y, 375, y1, 450, y2);
    fill(0, 255, 26);
    triangle(150, yy, 245, yy1, 290, yy2);

    if(y <= 700)
        {
            movement2*=-1;
        }
            
        if(y >= 0)
        {
            movement2*=-1;
        }
    y += movement2;
    if(y1 <= 700)
        {
            movement2*=-1;
        }
            
        if(y1 >= 0)
        {
            movement2*=-1;
        }
    y1 += movement2;
    if(y2 <= 700)
        {
            movement2*=-1;
        }
            
        if(y2 >= 0)
        {
            movement2*=-1;
        }
    y2 += movement2;
    if(yy <= 700)
        {
            movement3*=-1;
        }
            
        if(yy >= 0)
        {
            movement3*=-1;
        }
    yy += movement3;
    if(yy1 <= 700)
        {
            movement3*=-1;
        }
            
        if(yy1 >= 0)
        {
            movement3*=-1;
        }
    yy1 += movement3;
    if(yy2 <= 700)
        {
            movement3*=-1;
        }
            
        if(yy2 >= 0)
        {
            movement3*=-1;
        }
    yy2 += movement3;

    fill(200);
    point(300, 175);
    point(305, 180);
    point(298, 183);
    point(295, 179);
    point(288, 180);
    point(280, 184);
    point(310, 184);
    point(314, 181);
    point(286, 184);
    fill(51, 0, 255);
    rect(xxx, yyy, 50, 120);

    if(xxx <= 600)
        {
            movement4*=-1;
        }
            
        if(xxx >= 0)
        {
            movement4*=-1;
        }
    xxx += movement4;
    if(yyy <= 600)
        {
            movement4*=-1;
        }
            
        if(yyy >= 0)
        {
            movement4*=-1;
        }
    yyy += movement4;

    fill(255, 0, 239);
    rect(x, 330, 50, 70);
    fill(213, 0, 255);
    rect(xx, 265, 150, 40);

    if(x <= 600)
    {
        movement*=-1;
    }
        
    if(x >= 0)
    {
        movement*=-1;
    }
x += movement;
    if(xx <= 600)
    {
        movement1*=-1;
    }
        
    if(xx >= 0)
    {
        movement1*=-1;
    }
xx += movement1;

    fill(200);
    rect(445, 69, 20, 112);

    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text('DISASSEMBLED', 50, 75);
    
    textSize(15);
    text('Shelby', 525, 675);



}