class Dustbin {
    constructor(x, y, width, height) {
      var options = {
         isStatic:true
      }
      scale=1;
      this.image=loadImage("dustbingreen.png");
      this.bottomBody = Bodies.rectangle(1100, 540, 200, 20, options);
      this.leftBody=Bodies.rectangle(900,550,20,100,options);
      this.rightBody=Bodies.rectangle(1100,550,20,100,options);
     
      
      World.add(world, this.bottomBody);
      World.add(world, this.leftBody);
      World.add(world, this.rightBody);
    }
    display(){
    
     
      push();
      translate(this.bottomBody.position.x, this.bottomBody.position.y);
     
      rectMode(CENTER);
      //strokeWeight(4);
      //stroke("green");
      fill(0);
      angleMode(RADIANS);
      imageMode(CENTER);
      image(this.image,0, 0, 200, 200);
      pop();

      push();
      translate(this.leftBody.position.x, this.leftBody.position.y);
      
      rectMode(CENTER);
      //strokeWeight(4);
      //stroke("green");
      fill(0);
      //image(this.image,0, 0, 20,100);
      pop();

      push();
      translate(this.rightBody.position.x, this.rightBody.position.y);
    
      rectMode(CENTER);
      //strokeWeight(4);
      //stroke("green");
      fill(0);
      //image(this.image, 0,0, 20,100);
      pop()
    }
  };
  