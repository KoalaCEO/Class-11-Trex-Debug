var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload() {

    //create trex animation
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");

    //create ground image
    groundImage = loadImage("ground2.png")

}

function setup() {

    createCanvas(600, 200);

    //create a trex sprite
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;

    //create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;

    invisibleGround = createSprite(200,190,400,20);
    invisibleGround.visible = false;

    console.log("My highscore is 4000");
    console.warn("don't do that");
    console.error("game is bugged");
    console.info("i am right handed");
}

function draw() {

    background(220);

    //console.log(trex.y);

    //jump when the space button is pressed
    if (keyDown("space") && trex.y >= 150) {
    trex.velocityY = -10;
    }

    //add gravity
    trex.velocityY = trex.velocityY + 0.8

    //give ground scrolling effect
    if (ground.x < 0) {
    ground.x = ground.width / 2;
    }

    //make trex run on the ground
    trex.collide(invisibleGround);
      


    //draw sprites
    drawSprites();
}
