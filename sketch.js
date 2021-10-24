class Zeiger {
  constructor(laenge, schrittweite){
    this.laenge = laenge
    this.winkel = 0
    this.schrittweite = schrittweite
  }
  weiter(){
    this.winkel += this.schrittweite
  }

  zeichnen(){
    let fakewinkel = this.winkel / 60.
    //fakewinkel = 0.5 * (Math.cos(fakewinkel) + 1)
    let y = 200 - this.laenge * Math.cos(fakewinkel)
    let x = 200 + this.laenge * Math.sin(fakewinkel)
    line(200, 200, x, y)    
  }
}

class Uhr {
  constructor(lenGross, lenKlein) {
    this.gross = new Zeiger(lenGross, 1)
    this.klein = new Zeiger(lenKlein, 1./60)
  }
  weiter_und_zeichnen() {
    this.gross.weiter()
    this.gross.zeichnen()
    this.klein.weiter()
    this.klein.zeichnen()
  }
  setUhrzeit(stunden, minuten) {
    //TODO
  }
}

let gross = new Zeiger(150, 1)
let klein = new Zeiger(80, 1./60)

let uhr = new Uhr(150, 80)

function setup() {
  createCanvas(400, 400);
  frameRate(60)
  stroke(0)
  strokeWeight(5)

}

function draw() {
  background(220);
//  gross.weiter()
//  klein.weiter()
//  gross.zeichnen()
//  klein.zeichnen()
  uhr.weiter_und_zeichnen()
  uhr.setUhrzeit(16, 1)
}
