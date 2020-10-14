var bg, bg_img, player, player_running, ground, ground_img, obstacle, obstacle_img, obstacle_grp, banana, banana_img, banana_grp
var score

function preload()
{
	bg_img= loadImage("img/jungle.jpg")
	player_running= loadAnimation("img/Monkey_01.png","img/Monkey_02.png","img/Monkey_03.png","img/Monkey_04.png","img/Monkey_05.png","img/Monkey_06.png","img/Monkey_07.png","img/Monkey_08.png","img/Monkey_09.png","img/Monkey_10.png")
banana_img=loadImage("img/banana.png")
obstacle_img= loadImage("img/stone.png")


}

function setup() {
	createCanvas(800, 400);
score=0 
	bg = createSprite (0,0,800,400)
bg.addImage(bg_img)
bg.scale=1.8
bg.x= bg.width/2
player = createSprite (100,340,20,50)
player.addAnimation("running", player_running)
player.scale=0.2
ground = createSprite (400,350,800,10)
 ground.x= ground.width/2
 ground.visible= false;

 banana_grp= new Group ()
obstacle_grp= new Group()

	
  
}


function draw() {
   background(0);
  
   bg.velocityX= -6

   if(bg.x<0){
	   bg.x=bg.width/2
   }
if(keyDown("space")&& player.y>=280){
	player.velocityY= -12
}
player.velocityY= player.velocityY+0.5

player.collide(ground)

if(banana_grp.isTouching(player)){
	banana_grp.destroyEach()
	score++
}
if(obstacle_grp.isTouching(player)){
	player.scale=0.1
	score--
}
switch(score){
case 10 : player.scale= 0.12;
break;
case 20 : player.scale= 0.13;
break;
case 30 : player.scale= 0.17;
break;
case 40 : player.scale= 0.19;
break;
default: break;
}

console.log(player.y)

spawnBanana();
spawnObstacles();

  drawSprites();
  stroke("white")
  textSize(20)
 fill ("white")
text("score:" +score,500,50)
}
function spawnObstacles() {
	//write code here to spawn the clouds
	if (frameCount % 150 === 0) {
	  obstacle = createSprite(800,350,10,40);

	  obstacle.addImage(  obstacle_img);
	  obstacle.scale = 0.2;
	  obstacle.velocityX = -6;
	  
	   //assign lifetime to the variable
	  obstacle.lifetime = 300;
	  
	   
	  obstacle_grp.add(obstacle)
	}
	
  }

  function spawnBanana() {
	//write code here to spawn the clouds
	if (frameCount % 80 === 0) {
	  banana = createSprite(800,250,10,40);
banana.y= random(120,200)
	 banana.addImage( banana_img);
	  banana.scale = 0.05;
	  banana.velocityX = -6;
	  
	   //assign lifetime to the variable
	 banana.lifetime = 300;
	  
	   player.depth= banana.depth+1
	  banana_grp.add(banana)
	}
	
  }


