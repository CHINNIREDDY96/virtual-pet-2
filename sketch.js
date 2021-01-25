//Create variables here
var dog,dogimg,happyimg1,database,position;
var food, fedTime, lastFed;

function preload()
{
  //load images here
  dogimg = loadImage("images/dogImg.png");
  happyimg1 = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
	createCanvas(800, 700);
  dog = createSprite(400,400,10,10);
  dog.addImage(dogimg);
  dog.scale  = 0.5;
  food = new Food(200,100);

  var foodstock = database.ref('food');
  foodstock.on("value",readstock,showError);
  
  feed = createButton("Feed The Dog");
  feed.position(700,95);
  feed.mousePressed(feedTheDog);

  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
 //Text = createSprite(400,100)
}


function draw() {  
  background("green");

  //textSize(20);
  //fill("black");
  //text("Press up arrow ",400,100);
  
  fedTime = database.ref('FeedTime');
  fedTime.on("value", function(data){
    lastFed = data.val();
  });
  
 fill(255,255,254);
 textSize(15);
 if(lastFed>=12){
   text("Last Feed : "+ lastFed%12 + " PM", 350,30);

 } else if(lastFed == 0){
   text("Last Feed : 12 AM", 350,30);

 } else{
   text("Last Feed : "+ lastFed + "AM", 350,30);
 }
 

  

  drawSprites();
  //add styles here

 // var Text = "press up arrow";

  food.display();

  
 

  
}

function writestock(writingstock){
  database.ref('/').set({
    food : writingstock
   } )
}

function readstock(data){
  foodstock = data.val();
  

}

function showError(){
  console.log("Error in database");
}

function addFoods(){
foodS++;
database.ref('/').update({
  Food : foodS
})
}

function feedTheDog(){
dog.addImage(happyimg1);

food.update(food. getfoodstock() -1);
database.ref('/').update({
  Food:food.getFoodStock(),
  feedtime:hour()

})
}
