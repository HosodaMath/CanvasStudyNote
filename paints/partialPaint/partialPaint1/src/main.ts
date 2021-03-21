/**
 * 部分的に塗る
 */
import { Vector2 } from "./mathematics/vector";
import { Mathematics } from "./mathematics/mathematics";
import { Rectangle } from "./geomety/rectangle";
import { BrushesEllipse } from "./paint/paint_tools/paintsBrushes/ellipseBrushes";

const canvas = document.querySelector("canvas");

if (!(canvas instanceof HTMLCanvasElement)) {
  throw new Error("not found canvas element");
}

const gl = canvas.getContext("2d")!;
if (!gl) {
  throw new Error("canvasの初期化に失敗しました。");
}

const PALETTE_COLOR: string[] = [
  "rgba(2, 250, 141, 0.1)",
  "rgba(2, 217, 250, 0.1)",
  "rgba(122, 2, 250, 0.1)",
  "rgba(179, 255, 100 ,0.1)",
];
const BRUSHES_MAX = 10;

let width = 0;
let height = 0;

let paints_location: Vector2[] = [];
let paints_velocity: Vector2[] = [];
let paints_size: Vector2[] = [];
let paints_color: string[] = [];

const init = () => {
  canvas.width = width = window.innerWidth;
  canvas.height = height = window.innerHeight;

  setPaints();
};

const setPaints = () => {
  [...Array(BRUSHES_MAX).keys()].forEach((count) => {
    paints_location[count] = new Vector2(
      Mathematics.random(0, width),
      Mathematics.random(0, height)
    );

    paints_velocity[count] = new Vector2(
      Mathematics.random(1, 2),
      Mathematics.random(1, 2)
    );

    let tmp = Mathematics.floor(Mathematics.random(0, PALETTE_COLOR.length));
    paints_color[count] = PALETTE_COLOR[tmp];
  });
};

/// 背景を描く
const background = () => {
  let start1 = new Vector2(width * 0.25, height * 0.25);
  let canvas_size1 = new Vector2(300, 300);
  let rect1 = new Rectangle(gl, start1, canvas_size1);
  let rect_color1: CanvasGradient = gl.createLinearGradient(
    width * 0.25,
    height * 0.25,
    width * 0.25 + 300,
    height * 0.25 + 300
  );
  
  rect_color1.addColorStop(0.0, "rgba(255, 241, 82, 1.0)");
  rect_color1.addColorStop(0.5, "rgba(255, 215, 82, 1.0)");
  rect_color1.addColorStop(1.0, "rgba(255, 158, 972, 1.0)");

  rect1.draw_fill(rect_color1);

  let start2 = new Vector2(width - width * 0.25, height * 0.25);
  let canvas_size2 = new Vector2(300, 300);
  let rect2 = new Rectangle(gl, start2, canvas_size2);
  let rect_color2: CanvasGradient = gl.createLinearGradient(
    width - width * 0.25,
    height * 0.25,
    width - width * 0.25 + 300,
    height * 0.25 + 300
  );
  
  rect_color2.addColorStop(0.0, "rgba(255, 241, 82, 1.0)");
  rect_color2.addColorStop(0.5, "rgba(255, 215, 82, 1.0)");
  rect_color2.addColorStop(1.0, "rgba(255, 158, 972, 1.0)");

  rect2.draw_fill(rect_color2);
};

const drawPaints = (canvas_size: Vector2) => {
  [...Array(paints_color.length).keys()].forEach((count) => {
    paints_size[count] = new Vector2(
      Mathematics.random(10, 20),
      Mathematics.random(10, 20)
    );

    let paints = new BrushesEllipse(
      gl,
      paints_location[count],
      paints_size[count],
      paints_velocity[count]
    );

    paints.paint_step(canvas_size);
    paints.paints_draw(paints_color[count]);
  });
};

const main = () => {
  const WIDTH = canvas.width;
  const HEIGHT = canvas.height;
  //const WIDTH2 = WIDTH / 2.0;
  //const HEIGHT2 = HEIGHT / 2.0;
  const CANVAS_SIZE = new Vector2(WIDTH, HEIGHT);

  background();

  drawPaints(CANVAS_SIZE);

  requestAnimationFrame(main);
};
init();

window.onload = main;
