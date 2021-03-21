import { Vector2 } from "../mathematics/vector";
import { Polygon } from "../geomety/polygon";
class ButterFly {
  private gl: CanvasRenderingContext2D;
  constructor(gl: CanvasRenderingContext2D) {
    this.gl = gl;
  }

  private setButterFly = (radius: number) => {
    let butterfly_data: Vector2[] = [];
    const e = 2.718281828459045;
    const Max = 12 * e;
    const init_radius = radius;
    let x = 0,
      y = 0;
    for (let theta = 0; theta < Max; theta += 0.01) {
      x =
        Math.sin(theta) *
        (Math.pow(e, Math.cos(theta)) -
          2 * Math.cos(4 * theta) -
          Math.pow(Math.sin(theta / 12), 5)) *
        init_radius;
      y =
        Math.cos(theta) *
        (Math.pow(e, Math.cos(theta)) -
          2 * Math.cos(4 * theta) -
          Math.pow(Math.sin(theta / 12), 5)) *
        init_radius;
      let tmp_data = new Vector2(x, y);
      butterfly_data.push(tmp_data);
    }

    return butterfly_data;
  };

  public drawButterFly = (radius: number, fillColor: string | CanvasGradient = "#DEFF7E") => {
    let data = this.setButterFly(radius);
    let butterfly = new Polygon(this.gl, data);


    butterfly.drawPolygon2(fillColor); //線の色なし
  };
}

export {ButterFly}