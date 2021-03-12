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

const init = () => {
  canvas.width = width = window.innerWidth;
  canvas.height = height = window.innerHeight;


};


const background = (canvas_size: Vector2) => {
  const CANVAS_SIZE = canvas_size;
  const START = new Vector2(0, 0);
  let rect = new Rectangle(gl, START, CANVAS_SIZE);
  rect.draw_fill("#BECDD7");
};

const renderText1 = () => {
  gl.fillStyle = "#FFFFFF";
  gl.font = "60px fantasy";
  gl.textAlign = "left";
  gl.fillText("Hello World", width * 0.5, height  * 0.25);

  gl.fillStyle = "#FFFFFF";
  gl.font = "60px fantasy";
  gl.textAlign = "center";
  gl.fillText("Hello World", width * 0.5, height * 0.5);

  gl.fillStyle = "#FFFFFF";
  gl.font = "60px fantasy";
  gl.textAlign = "right";
  gl.fillText("Hello World", width * 0.5, height * 0.75);
}

const renderText2 = () => {
  gl.strokeStyle = "#FFFFFF";
  gl.font = "60px fantasy";
  gl.textAlign = "left";
  gl.strokeText("Hello World", width * 0.25, height  * 0.25);

  gl.strokeStyle = "#FFFFFF";
  gl.font = "60px fantasy";
  gl.textAlign = "center";
  gl.strokeText("Hello World", width * 0.25, height * 0.5);

  gl.strokeStyle = "#FFFFFF";
  gl.font = "60px fantasy";
  gl.textAlign = "right";
  gl.strokeText("Hello World", width * 0.25, height * 0.75);
}

const main = () => {
  const WIDTH = canvas.width;
  const HEIGHT = canvas.height;
  //const WIDTH2 = WIDTH / 2.0;
  //const HEIGHT2 = HEIGHT / 2.0;
  const CANVAS_SIZE = new Vector2(WIDTH, HEIGHT);

  background(CANVAS_SIZE);

  renderText1();
  renderText2();

  //requestAnimationFrame(main);
};
init();

window.onload = main;
