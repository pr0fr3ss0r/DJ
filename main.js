
song = "";

function preload()
{
    song = loadSound("music.mp3");
}


function setup() {
    canvas = createCanvas(601,501);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 601, 501);
}

function play()
{
    song.play();
}