class Stand{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true
        }
        this.stand = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.stand);
      }
      display(){
        var angle = this.stand.angle;
        push();
        translate(this.stand.position.x, this.stand.position.y);
        rotate(angle);
        rectMode(CENTER);
        noStroke();
        rect(0,0,this.width, this.height);
        pop();
      }
}