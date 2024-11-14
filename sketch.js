// variáveis da bolinha
 let xBolinha = 300;
let yBolinha = 200;
let diametro = 24;
let raio = diametro/2;

let velocidadexBolinha = 5;
let velocidadeyBolinha = 4;

// variáveis da raquete
let larguraRaquete = 10;
let alturaRaquete = 70;

let xRaquete = 5
let yRaquete = 170;

let xRaqueteOponente = 585;
let yRaqueteOponente = 170;

let meusPontos = 0;
let pontosOponente = 0;

// variáveis do som
let ponto;
let raquetada;
let trilha;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
  
}

function draw() {
  background(0);
  desenhaBolinha();
  movimentaBolinha();
  verificaBorda();
  desenhaRaquete(xRaquete, yRaquete);
  desenhaRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaquete();
  verificaRaquete();
  desenhaPlacar();
  contabilizaPlacar();
}

function desenhaBolinha(){
   // fill('red')
  noStroke()
  circle(xBolinha, yBolinha, diametro);
  
}

function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
 yBolinha += velocidadeyBolinha;
}

function verificaBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadexBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeyBolinha *= -1;
  }
}

function desenhaRaquete(x, y){
  rect(x, y, larguraRaquete, alturaRaquete);
}

function movimentaRaquete(){
  if (keyIsDown(87)){
    yRaquete -= 10;
  }
  if (keyIsDown(83)){
    yRaquete += 10;
  }
  // movimento do oponenete
  if (keyIsDown(UP_ARROW)){
    yRaqueteOponente -=10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaqueteOponente +=10;
  }
}

function verificaRaquete (){
  if (xBolinha - raio <= xRaquete + larguraRaquete &&
     yBolinha + raio >= yRaquete &&
     yBolinha - raio <= yRaquete + alturaRaquete){
    velocidadexBolinha *= -1;
  }
  if (xBolinha + raio >= xRaqueteOponente &&
     yBolinha + raio >= yRaqueteOponente &&
     yBolinha - raio <= yRaqueteOponente + alturaRaquete){
    velocidadexBolinha *= -1;
  }
}

function desenhaPlacar(){
  fill('purple')
  rect(130, 5, 45, 25);
  rect(430, 5, 45, 25);
  fill(255);
  textAlign(CENTER);
  textSize(20);
  text(meusPontos, 150, 25);
  text(pontosOponente, 450,20);
}

function contabilizaPlacar(){
  if(xBolinha - raio <=0){
    pontosOponente += 1;
    ponto.play();
  }
  
  if(xBolinha + raio >= width){
    meusPontos += 1;
    ponto.play();
  }
}

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}
