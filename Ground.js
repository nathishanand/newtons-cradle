class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      push()
      var pos =this.body.position;
      rectMode(CENTER);
      translate(pos.x,pos.y)
      fill("brown");
      rect(0,0, this.width, this.height);
      pop()
    }
  }