import { Point } from "./point.js";
import { Polygon } from "./polygon.js";
import { Mathematics } from "./mathematics.js";
const canvas = document.querySelector("canvas");

if (!(canvas instanceof HTMLCanvasElement)) {
  throw new Error("not found canvas element");
}

const gl = canvas.getContext("2d")!;
if (!gl) {
  throw new Error("canvasの初期化に失敗しました。");
}

const init = () => {
  canvas.width = 800;
  canvas.height = 800;
}

class ButterFly {
  private width = 0;
  private height = 0;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  private setButterFly = (radius: number) => {
    let butterfly_data: Point[] = [];
    const e = 2.718281828459045;
    const Max = 12 * e;
    const init_radius = radius;
    let x = 0, y = 0;
    for (let theta = 0; theta < Max; theta += 0.01) {
      x = Math.sin(theta) * (Math.pow(e, Math.cos(theta)) - 2 * Math.cos(4 * theta) - Math.pow(Math.sin(theta / 12), 5)) * init_radius;
      y = Math.cos(theta) * (Math.pow(e, Math.cos(theta)) - 2 * Math.cos(4 * theta) - Math.pow(Math.sin(theta / 12), 5)) * init_radius;
      let tmp_data = new Point(x + this.width, y + this.height);
      butterfly_data.push(tmp_data);
    }

    return butterfly_data;
  }

  public drawButterFly = (xy1: Point, xy2: Point, radius: number) => {
    let data = this.setButterFly(radius);
    let butterfly = new Polygon(gl, data);

    let butterfly_fill_color: CanvasGradient = gl.createLinearGradient(
      xy1.location_x, xy1.location_y, xy2.location_x, xy2.location_y);
    butterfly_fill_color.addColorStop(0.0, "#d32d2d");
    butterfly_fill_color.addColorStop(0.5, "#d37d2d");
    butterfly_fill_color.addColorStop(1.0, "#d3c22d");

    butterfly.drawPolygon2(butterfly_fill_color); //線の色なし
  }

}

const background = (width: number, height: number) => {
  let width2 = width / 2.0;
  let back_color: CanvasGradient = gl.createLinearGradient(
    width2, 0, width2, height);
  back_color.addColorStop(0.0, "#d3c22d");
  back_color.addColorStop(0.5, "#6ad32d");
  back_color.addColorStop(1.0, "#2dd372");
  gl.fillStyle = back_color;
  gl.beginPath();
  gl.rect(0, 0, width, height);
  gl.closePath();
  gl.fill();
}

const renderButterFly = (width: number, height: number) => {
  const BUTTERFLY_MAX = 10;
  const RADIUS_MIN = 10;
  const RADIUS_MAX = 50;
  const SHIFT_X = RADIUS_MAX;
  const SHIFT_Y = RADIUS_MAX;
  const ORIGIN = 0 + SHIFT_X;
  const MAX_WIDTH = width - SHIFT_X;
  const MAX_HEIGHT = height - SHIFT_Y;
  for (let count = 0; count < BUTTERFLY_MAX; count++) {
    const RADIUS = Mathematics.random(RADIUS_MIN, RADIUS_MAX);
    const LOCATION_X = Mathematics.random(ORIGIN, MAX_WIDTH);
    const LOCATION_Y = Mathematics.random(ORIGIN, MAX_HEIGHT);
    let butterfly = new ButterFly(LOCATION_X, LOCATION_Y);
    let xy1 = new Point(LOCATION_X - RADIUS, LOCATION_Y - RADIUS);
    let xy2 = new Point(LOCATION_X + RADIUS, LOCATION_Y + RADIUS);
    butterfly.drawButterFly(xy1, xy2, RADIUS);
  }

}

const main = () => {
  init();

  const WIDTH = canvas.width;
  const HEIGHT = canvas.height;
  //const WIDTH2 = WIDTH / 2.0;
  //const HEIGHT2 = HEIGHT / 2.0;

  background(WIDTH, HEIGHT);
  
  renderButterFly(WIDTH, HEIGHT );
}

window.onload = main;