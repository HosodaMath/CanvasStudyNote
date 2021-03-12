import { Vector2 } from "./mathematics/vector";
import { Rectangle } from "./geomety/rectangle";

const canvas = document.querySelector("canvas");

if (!(canvas instanceof HTMLCanvasElement)) {
  throw new Error("not found canvas element");
}

const gl = canvas.getContext("2d")!;
if (!gl) {
  throw new Error("canvasの初期化に失敗しました。");
}

let width = 0;
let height = 0;

let text_location1: Vector2;
let text_velocity1: Vector2;

let text_location2: Vector2;
let text_velocity2: Vector2;

let text_location3: Vector2;
let text_velocity3: Vector2;

const init = () => {
  canvas.width = width = window.innerWidth;
  canvas.height = height = window.innerHeight;

  setText();
};

const setText = () => {
  text_location1 = new Vector2(width * 0.5, height * 0.25);
  text_velocity1 = new Vector2(0.5, 0.0);

  text_location2 = new Vector2(width * 0.5, height * 0.5);
  text_velocity2 = new Vector2(0.5, 0.0);

  text_location3 = new Vector2(width * 0.5, height * 0.75);
  text_velocity3 = new Vector2(0.5, 0.0);
};

const background = (canvas_size: Vector2) => {
  const CANVAS_SIZE = canvas_size;
  const START = new Vector2(0, 0);
  let rect = new Rectangle(gl, START, CANVAS_SIZE);
  rect.draw_fill("#BECDD7");
};

const renderText = () => {
  /// text1
  text_location1.add(text_velocity1);

  if(text_location1.x < 0 || text_location1.x > width){
    text_location1.x = 0;
  }

  if(text_location1.y < 0 || text_location1.y > height){
    text_location1.y = 0;
  }

  gl.fillStyle = "#FFFFFF";
  gl.font = "60px fantasy";
  gl.textAlign = "left";
  gl.fillText("Hello World", text_location1.x, text_location1.y);

  /// text2
  text_location2.add(text_velocity2);

  if(text_location2.x < 0 || text_location2.x > width){
    text_location2.x = 0;
  }

  if(text_location2.y < 0 || text_location2.y > height){
    text_location2.y = 0;
  }

  gl.fillStyle = "#FFFFFF";
  gl.font = "60px fantasy";
  gl.textAlign = "center";
  gl.fillText("Hello World", text_location2.x, text_location2.y);

  /// text3
  text_location3.add(text_velocity3);

  if(text_location3.x < 0 || text_location3.x > width){
    text_location3.x = 0;
  }

  if(text_location3.y < 0 || text_location3.y > height){
    text_location3.y = 0;
  }

  gl.fillStyle = "#FFFFFF";
  gl.font = "60px fantasy";
  gl.textAlign = "right";
  gl.fillText("Hello World", text_location3.x, text_location3.y);
};

const main = () => {
  const WIDTH = canvas.width;
  const HEIGHT = canvas.height;
  //const WIDTH2 = WIDTH / 2.0;
  //const HEIGHT2 = HEIGHT / 2.0;
  const CANVAS_SIZE = new Vector2(WIDTH, HEIGHT);

  background(CANVAS_SIZE);

  renderText();

  requestAnimationFrame(main);
};
init();

window.onload = main;
