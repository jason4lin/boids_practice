const flock = [];

let img

let regenforce = true
let boidscount = 100
let alignvision = 100
let cohesionvision = 100
let separationvision = 50
let force = 0.3
let alignforce = 1
let cohesionforce = 1
let separationforce = 1
let maxspeed = 9


function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage('assete/fish_maguro.png')

  for (let i = 0; i<boidscount;i++){
    flock.push(new Boid());
  }

  addbutton();
}

function draw() {
  colorMode(RGB)
  background(0,0,30,256);

  // 如果滑塊的值改變了，動態調整 boids 數量
  if (boidscount !== flock.length) {
    if (boidscount > flock.length) {
      const diff = boidscount - flock.length;
      for (let i = 0; i < diff; i++) {
        flock.push(new Boid());
      }
    } else {
      const diff = flock.length - boidscount;
      flock.splice(flock.length - diff, diff);
    }
  }

  for(let boid of flock){
    boid.flock(flock);
    boid.edges();
    boid.update();
    boid.show(img);
  }
}

function updateMaxSpeed(maxspeed) {
  for (let boid of flock) {
    boid.setMaxSpeed(maxspeed);
  }
}

function updateForce(force) {
  for (let boid of flock) {
    boid.setMaxForce(force);
  }
}

