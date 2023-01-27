let r;
let posX;
let posY;

function setup() {
    createCanvas(400, 400);
    r = 100;
    posX = 200;
    posY = 200;
}

function draw() {
    background(0, 0, 0);
    noStroke();
    quad(-r+posX, 0+posY, -(r*0.5)+posX, -r+posY, (r*0.5)+posX, -r+posY, r+posX, 0+posY);
    quad(-r+posX, 0+posY, -(r*0.5)+posX, r+posY, (r*0.5)+posX, r+posY, r+posX, 0+posY);
}