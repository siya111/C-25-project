class Drop{
    constructer(){
        this.x = rand(0,width);
        this.y = rand(0,height);
        this.update();
    }
     draw(){
         if(Math.random()>0.1)
              fill(102,255,178);
         
         else
             fill(102,255,255);
         
         rect(this.x,this.y,5,8);
    }
    update(){
        this.y += 10;
        if(this.y > height+50){
            this.x = rand(0,width);
            this.y = rand(0,10);
        }
        this.draw();
    }
}

function rand(min,max){
    return floor(random(min,max));
}