function preload () {
}

function setup () {

canvas = createCanvas(640, 480);

canvas.position(110, 250);

video = createCapture(VIDEO);

video.hide();

tint_color = "";

}

function draw(){

  image(video, 230, 150, 200, 200);
  tint(tint_color);
  fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(50, 50, 70 );
  circle(50, 430, 70 );
  circle(590, 50, 70 );
  circle(590, 430, 70 );
  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(90, 40, 465, 20);
  rect(90, 420, 465, 20);
  rect(40, 90, 20, 300);
  rect(580, 90, 20, 300);

  

}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint() 
{
    
    tint_color = document.getElementById("color_name").value;

}
