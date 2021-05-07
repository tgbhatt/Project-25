class Paper {
    constructor(x, y, r) {
      var options = {
        isStatic:false,
        density:1.2,
        friction: 0,
        restitution:0.3
      };
      this.r = r;
      this.body = Bodies.circle(x, y, this.r/2, options);
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER)
      image(this.image, 0, 0,this.r);
      pop();
    };
  };
  