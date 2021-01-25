class Food{
      
      constructor(){
          var foodStock, lastFed;
      }

  getfoodstock(){
     
    var foodStockRef = database.ref('foodStock');
    foodStockRef.on("value", function(data){
      foodStock = data.val();
    })
  }
   
    update(foodstock){
     database.ref('/').update({
         FoodStock : foodstock
     });

    }

    deduct(food){

    }

   display(){
    this.food = loadImage("images/Milk.png");
    if(keyDown(UP_ARROW)){
       
        if(this.foodstock != 0 ){
         for(var i=0; i<this.foodStock;i++){
           if(i%10 == 0){
             x = 80;
             y= y+50;
           }
           image(this.image, x, y, 50,50);
           x = x+30;
         }
          
      
        } 
        else{
          foodstock = foodstock -1
        } 
        dog.addImage(dogimg1);
        dog.scale = 0.5;

   }








   }
}