  //creating variables
  var bow , arrow,  _background, redB, pinkB, greenB ,blueB ,arrowGroup;
  var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

  function preload(){
    //loading Images in p5 Editor
    backgroundImage = loadImage("background0.png");
    arrowImage = loadImage("arrow0.png");
    bowImage = loadImage("bow0.png");
    red_balloonImage = loadImage("red_balloon0.png");
    green_balloonImage = loadImage("green_balloon0.png");
    pink_balloonImage = loadImage("pink_balloon0.png");
    blue_balloonImage = loadImage("blue_balloon0.png");
  }

  function setup() {
    //creating canvas
    createCanvas(600, 600);

    //creating background
    _background = createSprite(0,0,600,600);
    _background.addImage(backgroundImage);
    _background.scale = 2.5

    // creating bow to shoot arrow
    bow = createSprite(480,220,20,50);
    bow.addImage(bowImage); 
    bow.scale = 1;

    //when game is starting the score will be 0 i.e default when game       starts the will be at 0
    score = 0;

    //creating new groups for balloons and Arrow
    redB = new Group();
    greenB = new Group();
    blueB = new Group();
    pinkB = new Group();
    arrowGroup = new Group();
  }

  function draw() {

    // moving ground
      _background.velocityX = -3; 

    if (_background.x < 0){
        _background.x = _background.width/2;
    }

    //moving bow
    bow.y = mouseY;

    // release arrow when space key is pressed
    if (keyDown("left" || touches[[]])) {
      createArrow();
    }

    //creating continous enemies
    var select_balloon = Math.round(random(1,4));

    //if and else if condition to select a random balloon each time and     frameCount means according to the frame the balloons will come out
    if (frameCount % 60 == 0) {
      if (select_balloon == 1) {
        redBalloon();
      } else if (select_balloon == 2) {
        greenBalloon();
      } else if (select_balloon == 3) {
        blueBalloon();
      } else {
        pinkBalloon();
      }
    }

    //if conditions for arrow to destroy redB, greenB, blueB and pinkB 
    if(arrowGroup.isTouching(redB)) {
       redB.destroyEach();
       arrowGroup.destroyEach();
       score = score +1;
    }

    if(arrowGroup.isTouching(pinkB)) {
       pinkB.destroyEach();
       arrowGroup.destroyEach();
       score = score +2;
    }

    if(arrowGroup.isTouching(greenB)) {
       greenB.destroyEach();
       arrowGroup.destroyEach();
       score = score +5;
    }

    if(arrowGroup.isTouching(blueB)) {
       blueB.destroyEach();
       arrowGroup.destroyEach();
       score = score +200;
    }

    //create drawSprites for designing game
    drawSprites();

    //text for score displaying
    text("Score: "+ score, 500,50);
  }

  //creating red balloon
  function redBalloon() {
    var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
    red.addImage(red_balloonImage);
    red.velocityX = 3;
    red.lifetime = 150;
    red.scale = 0.1;
    redB.add(red);
  }

  //creating blue balloon
  function blueBalloon() {
    var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
    blue.addImage(blue_balloonImage);
    blue.velocityX = 3;
    blue.lifetime = 150;
    blue.scale = 0.1;
    blueB.add(blue);
  }

  //creating green balloons
  function greenBalloon() {
    var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
    green.addImage(green_balloonImage);
    green.velocityX = 3;
    green.lifetime = 150;
    green.scale = 0.1;
    greenB.add(green);
  }

  //creating pink balloons
  function pinkBalloon() {
    var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
    pink.addImage(pink_balloonImage);
    pink.velocityX = 3;
    pink.lifetime = 150;
    pink.scale = 1
    pinkB.add(pink);
  }

  // Creating  arrows for bow
   function createArrow() {
    var arrow= createSprite(100, 100, 60, 10);
    arrow.addImage(arrowImage);
    arrow.x = 360;
    arrow.y=bow.y;
    arrow.velocityX = -4;
    arrow.lifetime = 100;
    arrow.scale = 0.3;
    arrowGroup.add(arrow);
  }