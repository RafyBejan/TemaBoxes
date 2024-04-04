const linii = 7;
const coloane = 4;
const dimensiuneCutie = 50;
const xStart = 40;
const yStart = 40;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < linii; i++) {
    for (let j = 0; j < coloane; j++) {
      let numar = floor(random(10));
      let culoare = color(random(255), random(255), random(255));
      let x = xStart + j * (dimensiuneCutie + 10);
      let y = yStart + i * (dimensiuneCutie + 10);
      fill(culoare);
      rect(x, y, dimensiuneCutie, dimensiuneCutie);
      fill(255);
      textAlign(CENTER, CENTER);
      textSize(20);
      text(numar, x + dimensiuneCutie / 2, y + dimensiuneCutie / 2);
    }
  }
}
