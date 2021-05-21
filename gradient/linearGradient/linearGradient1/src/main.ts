/**
 * 背景1面に塗りつぶす
 */
import * as Draw from "./draw/draw";
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
  const startSize = new Draw.Vector2(0, 0);
  const windowSize = new Draw.Vector2(canvas.width, canvas.height);
  const rect = new Draw.Rectangle(gl, startSize, windowSize);
  rect.draw_fill(color);
};

const drawGradient1 = (canvas_size: Draw.Vector2) => {
  const colorGradient1 = gl.createLinearGradient(
    canvas_size.x / 2.0,
    0,
    canvas_size.x / 2.0,
    canvas_size.y
  );

  colorGradient1.addColorStop(0.0, "rgba(250, 250, 200, 1.0)");
  colorGradient1.addColorStop(0.5, "rgba(200, 200, 100, 1.0)");
  colorGradient1.addColorStop(1.0, "rgba(150, 150, 50, 1.0)");

  const position = new Draw.Vector2(0, 0);
  const size = new Draw.Vector2(canvas_size.x, canvas_size.y);

  const rect = new Draw.Rectangle(gl, position, size);
  rect.draw_fill(colorGradient1);
};

const draw = () => {
  const canvasSize = new Draw.Vector2(width, height);
  background();
  drawGradient1(canvasSize);
};

const render = () => {
  init();
  draw();
};

window.onload = render;
