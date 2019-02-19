
let packman;
let ghost;
let circle;
let sq = []; // square array
let s;
let ci = []; // circle array
let c;
let rad = 70;
let xpos, ypos; // position of original rectangle
let newColor; // fill color

let xspeed1 = 4.8; // Speed of original rectangle 
let yspeed1 = 4.2; // Speed of original rectangle 

let xdirection1 = 1; // Left or Right
let ydirection1 = 1; // Top to Bottom

function preload(){
  packman = loadImage ('images/packman.png');
  ghost= loadImage ('images/ghost.png');
  circle = loadImage ('images/circle.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2); // border around rectangle
  frameRate(40);
  rectMode(CENTER);
  imageMode (CENTER);

  //sets starting color of rectangle
  newColor = color (0, 255, 0)
  fill (newColor);

  //sets starting position of original rectangle
  xpos = width / 2;
  ypos = height / 2;
}

function draw (){
  background(211);

  //updates position of original rectangle
  xpos = xpos + xspeed1 * xdirection1;
  ypos = ypos + yspeed1 * ydirection1;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  // Then adds new rectangle, change colors randomly, and another black dot
  if (xpos > width - rad || xpos < rad) {
    xdirection1 *= -1;
    newColor = color(random(255),random(255),random(255));
    fill (newColor);
    s = new Square ((width/2), (height/2), 70, 70);
    sq.push(s); 
    c = new Circle ((random(width)), (random(height)), (circle.width/5), (circle.height/5)); 
    ci.push(c);
  }

  if (ypos > height - rad || ypos < rad) {
    ydirection1 *= -1;
    newColor = color(random(255),random(255),random(255));
    fill (newColor);
    s = new Square ((width/2), (height/2), 70, 70);
    sq.push(s); 
    c = new Circle ((random(width)), (random(height)), (circle.width/6.5), (circle.height/6.5)); 
    ci.push(c);
  }

  // draws original rectangle 
  rect (xpos, ypos, rad, rad);
  

  //calls array functions for other rectangles
  for(let i=0; i<sq.length; i++){
    sq[i].display();
    sq[i].move();
  }


  //calls array functions for black dots
  for(let i=0; i<ci.length; i++){
    ci[i].display();
    ci[i].move();
  }


  //if mouse is pressed, increases speed and original rectangle replaced by Pac Man
  if (mouseIsPressed){
    xspeed1 = 7.8;
    yspeed1 = 7.2;
    image (packman, xpos, ypos, packman.width/7, packman.height/7);
  }  
}

// function to slow all rectangles down again if mouse is released
function mouseReleased(){
  if (xspeed1 == 7.8 && yspeed1 == 7.2)
    xspeed1 = 4.8;
    yspeed1 = 4.2;
  //calls released function in rectangle array
  for(let i=0; i<sq.length; i++){
    sq[i].released();
}
}
//makes array of rectangles
class Square {
  constructor(tempX, tempY, tempW, tempH){
      this.x = tempX;
      this.y = tempY;
      this.w = tempW;
      this.h = tempH;
      this.xspeed = 4.8; // Speed of rectangles
      this.yspeed = 4.2; // Speed of rectangles
      this.xdirection = 1; // Left or Right
      this.ydirection = 1; // Top to Bottom
  }

  move(){

    //updates position of rectangles
    this.x = this.x + this.xspeed * this.xdirection;
    this.y = this.y + this.yspeed * this.ydirection;
    
    // Test to see if the shape exceeds the boundaries of the screen
    // If it does, reverse its direction by multiplying by -1
    if (this.x > width - this.w || this.x < this.w) {
      this.xdirection *= -1;
      }
    
    if (this.y > height - this.h || this.y < this.h) {
      this.ydirection *= -1;
    }
  
  //if mouse is pressed, increases speed and rectangles all replaced by ghost
  if (mouseIsPressed){
    this.xspeed = 7.8;
    this.yspeed = 7.2;
    image (ghost, this.x, this.y, ghost.width/3, ghost.height/3);
  }
}

//draws the rectangles
display(){
    rect (this.x, this.y, this.w, this.h);
  }

// function to slow all rectangles down again if mouse is released
released(){
  if (this.xspeed == 7.8 && this.yspeed == 7.2)
    this.xspeed = 4.8;
    this.yspeed = 4.2;
}
}

//makes array of black dots
class Circle {
  constructor(tempX, tempY, tempW, tempH){
    this.x = tempX;
    this.y = tempY;
    this.w = tempW;
    this.h = tempH;
    this.speed = 1.5; //speed at which the dots jitter
  }

  //moves the dots in jitter 
  move(){
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  //displays the dot image
  display(){
    image (circle, this.x, this.y, this.w, this.h)
  } 
  }