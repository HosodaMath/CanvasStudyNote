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

/**
 * @description fキーを押したら全画面表示
 */
const keyEvent = (element: HTMLElement) => {
  window.addEventListener("keydown", (event) => {
    // console.log(event.key, event.code);
    if (event.code == "KeyF") {
      alert("fをクリックしましたね");
      /*
        if (element.requestFullscreen()) {
          element.requestFullscreen();
        } else {
          console.log("Hello");
        }*/
    }
  });
};

const init = () => {
  initResize();
  window.addEventListener("resize", initResize);
  const element = document.body;
  keyEvent(element);
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
  const grad = new Grads.BaseGradsRect(gl);
  grad.setupGradsRect(canvasSize);
  // grad.drawGradsRect1();
  // grad.drawGradsRect2();
  grad.drawGradsRect3();
  gl.restore();
};

const render = () => {
  init();
  draw();
};

window.onload = render;
