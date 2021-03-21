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

const BACKGROUND_COLOR: string[] = [
  "rgba(255, 255, 255, 1.0)",
  "rgba(232, 232, 232, 1.0)",
  "rgba(194, 194, 194, 1.0)",
  "rgba(148, 148, 148 ,1.0)",
  "rgba(110, 110, 110 ,1.0)",
];

const PALETTE_COLOR: string[] = [
  "rgba(2, 250, 141, 0.1)",
  "rgba(2, 217, 250, 0.1)",
  "rgba(122, 2, 250, 0.1)",
  "rgba(179, 255, 100 ,0.1)",
];
const BACKGROUND_COLOR_COUNT = BACKGROUND_COLOR.length;
const BACKGROUND_MAX = 5;
const BRUSHES_MAX = 10;

let width = 0;
let height = 0;

// set background
//let rect_location: Vector2[] = [];
//let rect_size: Vector2[] = [];

// set paints
let paints_location: Vector2[] = [];
let paints_velocity: Vector2[] = [];
let paints_size: Vector2[] = [];
let paints_color: string[] = [];

const init = () => {
  canvas.width = width = window.innerWidth;
  canvas.height = height = window.innerHeight;

  setPaints();
};

//const setBackgorund = () => {};

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
  [...Array(BACKGROUND_MAX).keys()].forEach((count1) => {
    [...Array(BACKGROUND_COLOR_COUNT).keys()].forEach((count2) => {
      let rect_location: Vector2 = new Vector2(count1 * 100, count1 * 100);

      let rect_size: Vector2 = new Vector2(100, 100);

      let render_rect = new Rectangle(gl, rect_location, rect_size);
      render_rect.draw_fill(BACKGROUND_COLOR[count2]);
    });
  });
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
