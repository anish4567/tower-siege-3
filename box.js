class Box{
constructor(x,y,width,height){
    var options={
restitution:0.4,
friction:0
    }
this.width = width
this.height = height
this.visibility=255
    this.body=Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.body)
}
display(){
    if(this.body.speed<2){
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
    rectMode(CENTER); 
        rect(0,0,this.width,this.height)
    pop();



    }else{
World.remove(world,this.body)
push();
this.visibility=this.visibility-5

pop();



    }





}



}