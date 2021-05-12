import * as Draw from "./draw/draw";

window.addEventListener("DOMContentLoaded", () => {
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

  const main = () => {
    const canvasSize = new Draw.Vector2(width, height);
    background();
    [...Array(100).keys()].forEach((count) => {
      gl.save();
      const position = new Draw.Vector2(
        Draw.Random.random(0 + 100, width - 100),
        Draw.Random.random(0 + 100, height - 100)
      );
      const size = Draw.Random.random(10, 50);
      let gradient1 = gl.createRadialGradient(
        position.x,
        position.y,
        0,
        position.x,
        position.y,
        size
      );

      gradient1.addColorStop(0.0, "rgba(250, 250, 200, 1.0)");
      gradient1.addColorStop(0.5, "rgba(200, 200, 100, 1.0)");
      gradient1.addColorStop(1.0, "rgba(100, 100, 0, 1.0)");

      const circle = new Draw.Circle(gl, position, size);
      circle.draw_fill(gradient1);
      gl.restore();
    });
  };

  init();
  main();
});
