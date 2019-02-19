
let sign;
let circle;
let sq = [];
let s;
let ci = [];
let c;
let rad = 70;
let xpos, ypos;
let thisnew = false;
let newColor;
let x = 1;
let y = 1;

let xspeed1 = 4.8; 
let yspeed1 = 4.2; 

let xdirection1 = 1; 
let ydirection1 = 1; 

function preload(){
  sign = loadImage ('images/sign.jpg');
  circle = loadImage ('images/circle.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2);
  frameRate(40);
  rectMode(CENTER);
  imageMode (CENTER);
  newColor = color (0, 255, 0)
  fill (newColor);
  xpos = width / 2;
  ypos = height / 2;
}

function draw (){
  background(211);
  xpos = xpos + xspeed1 * xdirection1;
  ypos = ypos + yspeed1 * ydirection1;

  if (xpos > width - rad || xpos < rad) {
    xdirection1 *= -1;
    newColor = color(random(255),random(255),random(255));
    fill (newColor);
    s = new Square ((width / 2), (height / 2), 70, 70);
    sq.push(s); 
    c = new Circle ((random(width)), (random(height)), (circle.width/5), (circle.height/5)); 
    ci.push(c);
  }

  if (ypos > height - rad || ypos < rad) {
    ydirection1 *= -1;
    newColor = color(random(255),random(255),random(255));
    fill (newColor);
    s = new Square ((width / 2), (height / 2), 70, 70);
    sq.push(s); 
    c = new Circle ((random(width)), (random(height)), (circle.width/6.5), (circle.height/6.5)); 
    ci.push(c);
  }

  rect (xpos, ypos, rad, rad);
  
  for(let i=0; i<sq.length; i++){
    sq[i].display();
    sq[i].move();
  }

  for(let i=0; i<ci.length; i++){
    ci[i].display();
    ci[i].move();
  }

  if (mouseIsPressed){
    xspeed1 = 7.8;
    yspeed1 = 7.2;
    image (sign, xpos, ypos, 80, 80);
  }  
}


function mouseReleased(){
  if (xspeed1 == 7.8 && yspeed1 == 7.2)
    xspeed1 = 4.8;
    yspeed1 = 4.2;
  for(let i=0; i<sq.length; i++){
    sq[i].released();
}
}

class Square {
  constructor(tempX, tempY, tempW, tempH){
      this.x = tempX;
      this.y = tempY;
      this.w = tempW;
      this.h = tempH;
      this.xspeed = 4.8; 
      this.yspeed = 4.2;
      this.xdirection = 1;
      this.ydirection = 1;
  }

  move(){
    this.x = this.x + this.xspeed * this.xdirection;
    this.y = this.y + this.yspeed * this.ydirection;
    
    if (this.x > width - this.w || this.x < this.w) {
      this.xdirection *= -1;
      }
    
    if (this.y > height - this.h || this.y < this.h) {
      this.ydirection *= -1;
    }
  

  if (mouseIsPressed){
    this.xspeed = 7.8;
    this.yspeed = 7.2;
    image (sign, this.x, this.y, 80, 80);
  }
}

display(){
    rect (this.x, this.y, this.w, this.h);
  }

released(){
  if (this.xspeed == 7.8 && this.yspeed == 7.2)
    this.xspeed = 4.8;
    this.yspeed = 4.2;
}
}

class Circle {
  constructor(tempX, tempY, tempW, tempH){
    this.x = tempX;
    this.y = tempY;
    this.w = tempW;
    this.h = tempH;
    this.speed = 1.5;
  }

  move(){
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display(){
    image (circle, this.x, this.y, this.w, this.h)
  } 
  }