class Box {

constructor (x,y,width,height) {

var options = {

    restitution:0.4,
    friction:0,
    //isStatic:true
    
}
this.visibility = 255;
this.x = x;
this.y = y;
this.height = height;
this.width = width;
this.block = Bodies.rectangle(x, y, width, height, options);
World.add(world, this.block);

}

score(){
if(this.visibility < 0 && this.visibility > -105){
   score++;
}
}

display() {

var angle = this.block.angle;
var pos = this.block.position;

if(this.block.speed < 3){
 
push();
translate(pos.x, pos.y);
rotate(angle);
rectMode(CENTER);
rect(0,0, this.width, this.height)
pop();

}else{

World.remove(world, this.block);
push();
this.visibility = this.visibility - 5;
pop();

}



}


}