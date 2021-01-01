//Create variables here
var db
var unoreversecard
var a,b
function preload()
{
  //load images here
  a=loadImage("images/dogImg.png")
  b=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  db=firebase.database()
  var nou=db.ref("food")
  nou.on("value",readop)
  dog=createSprite(400,595,40,40)
  dog.addImage("dogImg.png",a)
  dog.scale=.3
}


function draw() {
  background(random(0,255),random(0,255),random(0,255))
  text(unoreversecard,50,50)  
if (keyWentDown ("UP")){
writeop(unoreversecard)

}

  drawSprites();
  //add styles here
}
function readop(data){
unoreversecard=data.val()
}
function writeop(y){
  if (y<=0){
    y=0
  }
  else{y=y-1}
  db.ref("/").update({
    food:y
  })
}


