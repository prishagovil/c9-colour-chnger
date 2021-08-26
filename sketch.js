var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
  background("black")
  var box = createSprite (200,200,10,10)
/*
  btn_red= createButton ("RED");
  btn_red.position(100,50);
  btn_red.mousePressed(red_bg);

  btn_green= createButton ("GREEN");
  btn_green.position(100,50);
  btn_green.mousePressed(green_bg);
*/
}
/*
function red_bg(){
  r=255;
  g=0;
  b=0;
}
function green_bg(){
  r=0;
  g=255;
  b=0;
}
*/
function draw() {
  //background(r,g,b);
  //red_bg();
  if (keyIsDown(RIGHT_ARROW)){
    background ("red")
    }
    if (keyIsDown(LEFT_ARROW)){
      background ("blue")
      }
      if (keyIsDown(UP_ARROW)){
        background ("pink")
        }
        if (keyIsDown(DOWN_ARROW)){
          background ("orange")
          }
  drawSprites()
  
}






