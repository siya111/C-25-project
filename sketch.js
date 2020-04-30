var drops = [];

function setup() {
 createCanvas(800,400);
 frameRate(10);
 for(var i=0; i<100; i++){
   drops.push(new Drop());
 }
}

function draw() {
  background("black");
  for(var i=0; i<drops.length; i++){
    drops[i].draw();
    drops[i].update();
  }
}