/**
 * Rectangleを複数出力する
 * グラデーションの色をRectangleに割り当てる
 */
import * as Draw from "./draw/draw";
import * as Grads from "./gradient_rectangle/gradients";
const canvas = document.querySelector("#canvas");
// canvasのサポートがない場合
if (!(canvas instanceof HTMLCanvasElement)) {
  throw new Error("not found canvas element");
}

const gl = canvas.getContext("2d");
if (!gl) {
  throw new Error("canvasの初期化に失敗しました");
}

let width = 0;
let height = 0;
const initResize = () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
};

const init = () => {
  initResize();
  window.addEventListener("resize", initResize);
};

const background = (color = "#000000") => {
  gl.save();
  gl.beginPath();
  const startSize = new Draw.Vector2(0, 0);
  const windowSize = new Draw.Vector2(canvas.width, canvas.height);
  const rect = new Draw.Rectangle(gl, startSize, windowSize);
  rect.draw_fill(color);
  gl.closePath();
};

const draw = () => {
  const canvasSize = new Draw.Vector2(width, height);
  background();

  gl.save();
  const grad = new Grads.GradsRect(gl);
  grad.setupGradation(canvasSize);
  grad.drawGradation();
  gl.restore();
};

const render = () => {
  init();
  draw();
};

window.onload = render;
