import { Vector2 } from "./mathematics/vector.js";
import { Mathematics } from "./mathematics/mathematics.js";
import { Rectangle } from "./geomety/rectangle.js";

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
let rect_location1: Vector2;
let rect_size1: Vector2;
let rect_location2: Vector2;
let rect_size2: Vector2;
let size: number;
let angle: number;
const init = () => {
  canvas.width = width = window.innerWidth;
  canvas.height = height = window.innerHeight;

  setRectangle();

  angle = 0;

}

const setRectangle = () => {
  size = width * 0.2;
  rect_location1 = new Vector2(0.0, 0.0);
  rect_size1 = new Vector2(size, size);
  rect_location2 = new Vector2(0.0, 0.0);
  rect_size2 = rect_size1;
}

const background = (color: string) => {
  const CANVAS_LOCATION: Vector2 = new Vector2(0, 0);
  const CANVAS_SIZE: Vector2 = new Vector2(width, height);

  let setBackground: Rectangle = new Rectangle(gl, CANVAS_LOCATION, CANVAS_SIZE);
  setBackground.draw_fill(color);
}

/// これは弧度法それとも度数法? -> 弧度法 
const renderTranslate = () => {
  
  angle += 1;

  // rectangleの左上を軸とした回転
  let rect1: Rectangle = new Rectangle(gl, rect_location1, rect_size1);
  /// 0°(元の位置)
  gl.save();
  gl.translate(width / 4.0 - size * 0.5, height / 2.0 - size * 0.5);
  rect1.draw_fill("rgba(240, 255, 240, 0.8)");
  gl.restore();

  /// 左上を軸とした回転アニメーション
  gl.save();
  gl.translate(width / 4.0 - size * 0.5, height / 2.0 - size * 0.5);
  gl.rotate(Mathematics.degTorad(angle));
  rect1.draw_fill("rgba(240, 255, 240, 0.8)");
  gl.restore();

  // rectangleの中心を軸とした回転
  let rect2: Rectangle = new Rectangle(gl, rect_location2, rect_size2);
  /// 0°(元の位置)
  gl.save();
  gl.translate(width - width / 4.0 - size * 0.5, height / 2.0 - size * 0.5);
  rect2.draw_fill("rgba(240, 240, 255, 0.8)");
  gl.restore();

  /// 中心を軸とした回転アニメーション
  gl.save();
  gl.translate(width - width / 4.0 - size * 0.5, height / 2.0 - size * 0.5);
  gl.translate(size * 0.5, size * 0.5);
  gl.rotate(Mathematics.degTorad(angle));
  gl.translate(-size * 0.5, -size * 0.5);
  rect2.draw_fill("rgba(240, 240, 255, 0.8)");
  gl.restore();
  
  
}

const main = () => {
  background("rgb(190, 205, 215)");
  // const WIDTH = canvas.width;
  // const HEIGHT = canvas.height;
  // const WIDTH2 = WIDTH / 2.0;
  // const HEIGHT2 = HEIGHT / 2.0;
  // const WINDOW_SIZE = new Vector2(WIDTH, HEIGHT);

  renderTranslate();

  requestAnimationFrame(main);

}
init();
window.onload = main;