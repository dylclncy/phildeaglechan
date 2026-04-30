function mousePressed() {
  if (!getAudioContext().running) {
    getAudioContext().resume();
  }
  let audio = document.getElementById('bgMusic');
  audio.play(); // Ensures it plays after user clicks
}

let song;
let currentTime = 0;

function preload() {
  song = loadSound('10. Elliott Smith - No Name #1.mp3');
}

function setup() {
  createCanvas(400, 400);
  
  // Get saved time
  if (localStorage.getItem('songTime')) {
    currentTime = parseFloat(localStorage.getItem('songTime'));
  }
  
  song.loop();
  song.jump(currentTime); // Jump to last time
}

function draw() {
  background(220);
  // Continuously save current time (performance heavy, consider updating less often)
  localStorage.setItem('songTime', song.currentTime());
}
