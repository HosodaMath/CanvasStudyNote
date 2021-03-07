import { Vector2 } from "./mathematics/vector.js";
import { Mathematics } from "./mathematics/mathematics.js";
import { Line } from "./geomety/line.js";
import { Grid } from "./utility/grid.js";
import { Rectangle } from "./geomety/rectangle.js";
import { Polygon } from "./geomety/polygon.js";

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
let angle: number;
/// ここでは簡単な正三角形を扱う。
let triangle_location1: Vector2[] = [];
let triangle_size1: number;
const init = () => {
  canvas.width = width = window.innerWidth;
  canvas.height = height = window.innerHeight;
  angle = 0;
  //set_triangle_test();
  set_triangle();
};

let renderGrid = () => {
  let line_location1_1 = new Vector2(width / 4.0, 0.0);
  let line_location1_2 = new Vector2(width / 4.0, height);
  let line1 = new Line(gl, line_location1_1, line_location1_2);

  let line_location2_1 = new Vector2(0.0, height / 2.0);
  let line_location2_2 = new Vector2(width, height / 2.0);
  let line2 = new Line(gl, line_location2_1, line_location2_2);

  let line_location3_1 = new Vector2(width / 2.0, 0.0);
  let line_location3_2 = new Vector2(width / 2.0, height);
  let line3 = new Line(gl, line_location3_1, line_location3_2);

  let line_location4_1 = new Vector2(width - width / 4.0, 0.0);
  let line_location4_2 = new Vector2(width - width / 4.0, height);
  let line4 = new Line(gl, line_location4_1, line_location4_2);

  let line_data:Line[] = [line2, line1, line3, line4];
  Grid.gridN(line_data, "#000000");

};

/// 中心を軸としないとわからないかもしれない
let render_rotate_line = () => {
  let line_size = 200;
  let line_location1_1 = new Vector2(0, height / 2);
  let line_location1_2 = new Vector2(line_size, height / 2.0);
  let line1 = new Line(gl,line_location1_1, line_location1_2);
  gl.save();
  gl.translate(width / 4.0 - line_size * 0.5, 0.0);
  gl.rotate(Mathematics.degTorad(45));
  line1.draw("#ffff00");
  gl.restore();
}

/*
Polygonライブラリーが使えるかどうかのテスト(画面いっぱいに三角形を描く)
const set_triangle_test = () => {
  const TRIANGLE_MAX = 3;
  let x1: number[] = [0, width / 2, width];
  let y1: number[] = [height, 0, height];
  triangle_size1 = 100;

  for (let count = 0; count < TRIANGLE_MAX; count++) {
    triangle_location1[count] = new Vector2(
      x1[count],
      y1[count]
    );
    console.log(triangle_location1[count].x, triangle_location1[count].y);
  }
}*/

/// 0 ~ 1のみを基準にする
const set_triangle = () => {
  const TRIANGLE_MAX = 3;
  let x1: number[] = [0, 0.5, 1];
  let y1: number[] = [1, 0, 1];
  /// 三角形なので大きさは100(すべて同じ)
  triangle_size1 = 200;

  for (let count = 0; count < TRIANGLE_MAX; count++) {
    triangle_location1[count] = new Vector2(
      x1[count] * triangle_size1,
      y1[count] * triangle_size1
    );
    console.log(triangle_location1[count].x, triangle_location1[count].y);
  }
};

const background = (color: string) => {
  const CANVAS_LOCATION: Vector2 = new Vector2(0, 0);
  const CANVAS_SIZE: Vector2 = new Vector2(width, height);

  let setBackground: Rectangle = new Rectangle(
    gl,
    CANVAS_LOCATION,
    CANVAS_SIZE
  );
  setBackground.draw_fill(color);
};

/// これは弧度法それとも度数法? -> 弧度法
const renderRotate = () => {
  
  /// 三角形の描画準備
  let triangle: Polygon = new Polygon(gl, triangle_location1);
  const SHIFT = triangle_size1 * 0.5;

  /// 45°の回転
  let angle1 = 45;
  // 多角形(三角形)の?を軸とした回転
  gl.save();
  gl.translate(width / 4.0 - SHIFT, height / 2.0 - SHIFT);
  triangle.drawPolygon2("rgba(240, 255, 240, 0.1)");
  gl.restore();

  /// ?軸とした回転
  gl.save();
  gl.translate(width / 4.0 - SHIFT, height / 2.0 - SHIFT);
  gl.rotate(Mathematics.degTorad(angle1));
  triangle.drawPolygon2("rgba(240, 255, 240, 0.8)");
  gl.restore();

  /// 90°の回転
  let angle2 = 90;
  // 多角形(三角形)の?を軸とした回転
  gl.save();
  gl.translate(width / 2.0 - SHIFT, height / 2.0 - SHIFT);
  triangle.drawPolygon2("rgba(240, 255, 240, 0.1)");
  gl.restore();

  /// ?軸とした回転
  gl.save();
  gl.translate(width / 2.0 - SHIFT, height / 2.0 - SHIFT);
  gl.rotate(Mathematics.degTorad(angle2));
  triangle.drawPolygon2("rgba(240, 255, 240, 0.8)");
  gl.restore();

  /// 135°の回転
  let angle3 = 135;
  // 多角形(三角形)の?を軸とした回転
  gl.save();
  gl.translate(width - width / 4.0 - SHIFT, height / 2.0 - SHIFT);
  triangle.drawPolygon2("rgba(240, 255, 240, 0.1)");
  gl.restore();

  /// ?軸とした回転
  gl.save();
  gl.translate(width - width / 4.0 - SHIFT, height / 2.0 - SHIFT);
  gl.rotate(Mathematics.degTorad(angle3));
  triangle.drawPolygon2("rgba(240, 255, 240, 0.8)");
  gl.restore();
};

const main = () => {
  background("rgb(190, 205, 215)");
  // const WIDTH = canvas.width;
  // const HEIGHT = canvas.height;
  // const WIDTH2 = WIDTH / 2.0;
  // const HEIGHT2 = HEIGHT / 2.0;
  // const WINDOW_SIZE = new Vector2(WIDTH, HEIGHT);

  /// 基準となるグリッドを描く
  gl.save();
  renderGrid();
  gl.restore();

  render_rotate_line();
  renderRotate();

  //requestAnimationFrame(main);
};
init();
window.onload = main;
