
var balloon,balloonImage1,balloonImage2,balloonImage3;

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadImage("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon2.png","hotairballoon3.png");
   
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(450,450,200,200);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.7;



  textSize(20);
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.x = balloon.x-5;
    //write code to move air balloon in left direction
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage1);
    balloon.x = balloon.x+5;
    //write code to move air balloon in right direction
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.y = balloon.y-5;
    //write code to move air balloon in up direction
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.y = balloon.y+5;
    //write code to move air balloon in down direction
  }
 
  drawSprites();
  keyPreessed();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}
function keyPreessed(){
  if(keyDown(UP_ARROW)){
    updateHeight(0,-10);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale=balloon.scale -0.01;
  }
  }

function updateHeight(x,y){
  database.ref("balloon/height").set({
   'x' : height.x + x,
   'y' : height.y + y
  })
} 
function readHeight(data){
  height=data.val();
  balloon.x =height.x;
  balloon.y =height.y;
}

function showError(){
  console.log("error in writing to the database");
}

