import { Vector2 } from "../../mathematics/vector.js";
import { Mathematics } from "../../mathematics/mathematics.js";
import { BrushesPolygon } from "../paint_tools/paintsBrushes/polygonBrushes.js";

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
let brushesData: Vector2[] = [];
let velocity: Vector2;
const init = () => {
  canvas.width = width = window.innerWidth;
  canvas.height = height = window.innerHeight;

  setPolygonBrushes();
}

const setPolygonBrushes = () => {
  for(let count = 0; count < 360; count++){
    let tmp = new Vector2(
      Math.cos(count) * 50 + width / 2.0, 
    Math.sin(count) * 50 + height / 2.0);
    brushesData.push(tmp);
  }

  velocity = new Vector2(2, 2)
}



const paints = (canvas_size: Vector2) => {
  
  let brushes = new BrushesPolygon(gl , brushesData, velocity);
  brushes.paint_step(canvas_size);
  brushes.paints_draw("rgb(240, 255, 240)");
}

const main = () => {
  
  const WIDTH = canvas.width;
  const HEIGHT = canvas.height;
  //const WIDTH2 = WIDTH / 2.0;
  //const HEIGHT2 = HEIGHT / 2.0;
  const WINDOW_SIZE = new Vector2(WIDTH, HEIGHT);

  paints(WINDOW_SIZE);

  requestAnimationFrame(main);
}
init();

window.onload = main;