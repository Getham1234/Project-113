function preload(){

}

function setup(){
    canvas = createCanvas(1000, 600);
    canvas.position(110, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 330, 160, 350, 300);

    fill(0, 0, 0)
    stroke(255, 255, 255)
    rect(50, 25, 900, 50)
    rect(50, 525, 900, 50)
    rect(25, 25, 50, 550)
    rect(925, 25, 50, 550)

    fill(255,0,0);
    stroke(0,0,255);
    circle(50, 50, 80);

    fill(0,0,255);
    stroke(255,0,0);
    circle(950, 50, 80);

    fill(255, 255, 0);
    stroke(0, 255, 0);
    circle(950, 550, 80);

    fill(0, 255, 0);
    stroke(255, 255, 0);
    circle(50, 550, 80);

}

function take_snapshot(){
    save("picture.png");
}