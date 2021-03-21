/**
 * 部分的に塗る
 */
import { Vector2 } from "./mathematics/vector";
import { Mathematics } from "./mathematics/mathematics";
/// import { Rectangle } from "./geomety/rectangle";
import { Circle } from "./geomety/circle";
import { ButterFly } from "./utility/butterFly";
import { BrushesEllipse } from "./paint/paint_tools/paintsBrushes/ellipseBrushes";

const canvas = document.querySelector("canvas");

if (!(canvas instanceof HTMLCanvasElement)) {
  throw new Error("not found canvas element");
}

const gl = canvas.getContext("2d")!;
if (!gl) {
  throw new Error("canvasの初期化に失敗しました。");
}

/// set butterfly
const BUTTRERFLY_MAX = 20;
const BUTTRERFLY_COLOR: string[] = ["#ff9626", "#fcd01e", "#1efcf5"];

/// set paints
const PALETTE_COLOR: string[] = [
  "rgba(2, 250, 141, 0.1)",
  "rgba(220, 250, 200, 0.1)",
  "rgba(12, 100, 25, 0.1)",
  "rgba(10, 150, 10 ,0.1)",
];
const BRUSHES_MAX = 10;

let width = 0;
let height = 0;

let butterfly_location: Vector2[] = [];
let butterFly_size: number[] = [];
let butterFly_color: string[] = [];

let paints_location: Vector2[] = [];
let paints_velocity: Vector2[] = [];
let paints_size: Vector2[] = [];
let paints_color: string[] = [];

const init = () => {
  canvas.width = width = window.innerWidth;
  canvas.height = height = window.innerHeight;
  setButterFly();
  setPaints();
};

const setButterFly = () => {
  [...Array(BUTTRERFLY_MAX).keys()].forEach((count) => {

    butterfly_location[count] = new Vector2(
      Mathematics.random(0, width),
      Mathematics.random(0, height)
    );

    butterFly_size[count] = Mathematics.random(5, 25);

    let tmp = Mathematics.floor(Mathematics.random(0, BUTTRERFLY_COLOR.length));
    butterFly_color[count] = BUTTRERFLY_COLOR[tmp];
  });
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
  const TIME = Date.now() / 1000.0;
  [...Array(BUTTRERFLY_MAX).keys()].forEach((count) => {
    /*
    let new_color = gl.createRadialGradient(
      butterfly_location[count].x -  butterFly_size[count]/ 2,
      butterfly_location[count].y -  butterFly_size[count] / 2,
      0,
      butterfly_location[count].x -  butterFly_size[count] / 2,
      butterfly_location[count].y -  butterFly_size[count] / 2,
      butterFly_size[count]
    );

    new_color.addColorStop(0.0, BUTTRERFLY_COLOR[0]);
    new_color.addColorStop(0.5, BUTTRERFLY_COLOR[1]);
    new_color.addColorStop(1.0, BUTTRERFLY_COLOR[2]);
    */
    
    let base_circle = new Circle(gl, butterfly_location[count], butterFly_size[count] * 3.5);
    base_circle.draw_fill("rgba(240, 255, 240, 0.5)");

    gl.save();
    gl.translate(butterfly_location[count].x, butterfly_location[count].y);
    gl.scale(Math.cos(TIME), Math.sin(TIME));
    let butterFly = new ButterFly(gl);
    butterFly.drawButterFly(butterFly_size[count], butterFly_color[count]);
    gl.restore();
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
