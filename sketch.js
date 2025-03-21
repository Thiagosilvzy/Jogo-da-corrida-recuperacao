function setup() {
  createCanvas(900, 900);
}

let xJogador1 = 850;
let xJogador2 = 850;

function draw() {
  if (focused == true) {
    background("#e0ffff");
  } else {
    background("rgb(108,158,178)");
  }

  textSize(50);
  text("🐢", xJogador1, 300);
  text("🐰", xJogador2, 600);
  rect(100, 0, 15, 900);
  if (xJogador1 < 100) {
    text("player 1 venceu!", 50, 200);
    noLoop();
  }
  if (xJogador2 < 100) {
    text("player 2 venceu!", 50, 200);
    noLoop();
  }
}

function keyReleased() {
  if (key == "t") {
    xJogador1 -= random(50);
  }
  if (key == "c") {
    xJogador2 -= random(50);
  }
}
