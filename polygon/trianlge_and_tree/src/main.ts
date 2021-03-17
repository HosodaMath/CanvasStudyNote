import { Vector2 } from "./mathematics/vector";
import { Mathematics } from "./mathematics/mathematics";
import { Rectangle } from "./geomety/rectangle";
import { Triangle } from "./geomety/triangle";
import { TriangleTree } from "./geomety/custom/triangle_tree";

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

/*
let triangle_location: Vector2[] = [];
let triangle_size: Vector2[] = [];
*/

let triangle_tree_location: Vector2[] = [];
let triangle_tree_size: Vector2[] = [];

const init = () => {
  canvas.width = width = window.innerWidth;
  canvas.height = height = window.innerHeight;

  setTriangle();
};

const setTriangle = () => {
  const MAX = 10;

  /*
    triangle_location[count] = new Vector2(
      Mathematics.random(0 + 100, width - 100),
      Mathematics.random(0 + 100, height - 100)
    );
    triangle_size[count] = new Vector2(50, 50);
    */

  [...Array(MAX).keys()].forEach((count) => {
    triangle_tree_location[count] = new Vector2(
      Mathematics.random(0 + 100, width - 100),
      Mathematics.random(0 + 100, height - 100)
    );
    triangle_tree_size[count] = new Vector2(50, 80);
  });
};

const background = (canvas_size: Vector2) => {
  const CANVAS_SIZE = canvas_size;
  const START = new Vector2(0, 0);
  let rect = new Rectangle(gl, START, CANVAS_SIZE);
  rect.draw_fill("#BECDD7");
};

const renderTree = (canvas_size: Vector2) => {
  [...Array(triangle_tree_size.length).keys()].forEach((count) => {
    let triangle_tree = new TriangleTree(gl, triangle_tree_size[count]);
    gl.save();
    gl.translate(
      triangle_tree_location[count].x,
      triangle_tree_location[count].y
    );
    triangle_tree.drawTree("#ffffff");
    gl.restore();
  });
  /* 三角形型木を中心に１つ配置
  let triangle_tree = new TriangleTree(gl, triangle_tree_size);
  gl.save();
  gl.translate(triangle_tree_location.x, triangle_tree_location.y);
  triangle_tree.drawTree("#ffffff");
  gl.restore();
  */
  /*
   // 三角形を複数描く
    let triangle = new Triangle(gl, triangle_size[count]);
    gl.save();
    gl.translate(triangle_location[count].x, triangle_location[count].y);
    triangle.triangle("#ffffff");
    gl.restore();
  */
  /*
  // 中心に１つ配置
  let triangle = new Triangle(gl, triangle_size);
  gl.save();
  gl.translate(triangle_location.x, triangle_location.y);
  triangle.triangle("#ffffff");
  gl.restore();
  */
};

const main = () => {
  const WIDTH = canvas.width;
  const HEIGHT = canvas.height;
  //const WIDTH2 = WIDTH / 2.0;
  //const HEIGHT2 = HEIGHT / 2.0;
  const CANVAS_SIZE = new Vector2(WIDTH, HEIGHT);

  background(CANVAS_SIZE);

  renderTree(CANVAS_SIZE);

  //requestAnimationFrame(main);
};
init();

window.onload = main;
