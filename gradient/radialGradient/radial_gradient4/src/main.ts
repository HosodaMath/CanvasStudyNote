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
  const gradColor = gl.createLinearGradient(
    windowSize.x / 2.0,
    0,
    windowSize.x / 2.0,
    windowSize.y
  );
  gradColor.addColorStop(0.0, "rgb(0, 250, 250)");
  gradColor.addColorStop(0.5, "rgb(0, 150, 200)");
  gradColor.addColorStop(1.0, "rgb(0, 50, 100)");

  const rect = new Draw.Rectangle(gl, startSize, windowSize);
  rect.draw_fill(gradColor);
};

const main = () => {
  const canvasSize = new Draw.Vector2(width, height);
  background();
  [...Array(100).keys()].forEach((_count) => {
    gl.save();
    const buble_position = new Draw.Vector2(
      Draw.Random.random(0 + 100, width - 100),
      Draw.Random.random(0 + 100, height - 100)
    );
    const buble_size = Draw.Random.random(5, 20);
    let gradient1 = gl.createRadialGradient(
      buble_position.x,
      buble_position.y,
      0,
      buble_position.x,
      buble_position.y,
      buble_size
    );

    gradient1.addColorStop(0.0, "rgba(250, 250, 250, 0.1)");
    gradient1.addColorStop(0.8, "rgba(250, 250, 250, 0.2)");
    gradient1.addColorStop(1.0, "rgba(250, 250, 250, 0.3)");

    const circle = new Draw.Circle(gl, buble_position, buble_size);
    circle.draw_fill(gradient1);
    gl.restore();
  });
};

const render = () => {
  init();
  main();
};

window.onload = render;
