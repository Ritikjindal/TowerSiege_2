class Box {
    constructor(x, y,w,h){
      var options={
        restitution:0.4,
        friction:0.2
        
      }
      this.x=x;
      this.y=y;
      this.w=w;
      this.h=h;
      this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options);
      World.add(world,this.body);
    }

    display(){
      var angle=this.body.angle;
      var pos=this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.w,this.h);
      pop();
   }

}
