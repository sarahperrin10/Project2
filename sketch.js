
let sign;
let rect = [];
let rect_num = 20;
let r;
let xpos = 0;
let ypos = 0;

function preload(){
  sign = loadImage ('images/sign.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  frameRate(40);
  rectMode(CENTER);
  imageMode (CENTER);
} 

function draw (){
    background(0);
    for(let i=0; i<rect.length; i++){
      rect [i].display();
      rect [i].move();
  }
}

function keyReleased(){
  for(let i=0; i<rect.length; i++){
    rect[i].released ();
  }
}

function KeyPressed(){
  for(let i=0; i<rect.length; i++){
    rect[i].clicked ();
  }
}

class Rectangle {
  constructor(tempW, tempH){
      this.x = tempW / 2
      this.y = tempH / 2;
      this.w = tempW;
      this.h = tempH;
      this.xspeed = 3.8; 
      this.yspeed = 3.2;
      this.xdirection = 1;
      this.ydirection = 1;
      this.rad = 70;
      this.isclicked = false;
      this.letgo = false;
  }

  clicked (){
    if (this.xspeed == 3.8 && this.yspeed == 3.2){
        this.isclicked = true;
    }
    else{
        this.isclicked = false;
    }
  }

  released (){
    if (this.xspeed == 7.8 && this.yspeed == 7.2) {
      this.letgo = true;
  }
  else{
      this.letgo = false;
  }
}

  move(){
    this.x = this.x + this.xspeed * this.xdirection;
    this.y = this.y + this.yspeed * this.ydirection;
    
    if (this.x > this.w - this.rad || this.x < this.rad) {
      this.xdirection *= -1;
      xpos = xpos + 1
      ypos = ypos + 1
      r = new Rectangle ((this.x + xpos), (this.y + ypos), this.rad, this.rad);
      rect.push(r);
      fill (random(255),random(255),random(255));
      }
    
    if (this.y > this.h - rad || this.y < rad) {
      this.ydirection *= -1;
      xpos = xpos + 1
      ypos = ypos + 1
      r = new Rectangle ((this.x + xpos), (this.y + ypos), this.rad, this.rad);
      rect.push(r);
      fill (random(255),random(255),random(255));
    }
  }

display(){
    if (this.letgo){
      this.xspeed = 3.8;
      this.yspeed = 3.2;
      }
    else {
      this.xspeed = 7.8;
      this.yspeed = 7.2;
      }

    if (this.isclicked){
      this.xspeed = 7.8;
      this.yspeed = 7.2;
      image (sign, this.x, this.y, 70, 70);
    }
    else {
      this.xspeed = 3.8;
      this.yspeed = 3.2;
    }

    fill (0,255,0);
    rect(this.x, this.y, this.rad, this.rad);
  }
}
