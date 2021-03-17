import { Vector2 } from "../../mathematics/vector";
import { Polygon } from "../polygon";

/**
 * @class
 * TriangleTree
 * @description
 * 三角形型木を描くクラス
 * @author
 * ShingoHosoda
 * @copyright
 * Shingo Hosoda
 */

class TriangleTree {
  private gl: CanvasRenderingContext2D;
  private size: Vector2;
  /**
   *
   * @param {CanvasRenderingContext2D} gl
   * @param {Vector2} size
   */
  constructor(gl: CanvasRenderingContext2D, size: Vector2) {
    this.gl = gl;
    this.size = size;
  }

  /**
   * 塗りつぶしのみのTree
   * @param {string | CanvasGradient} fill - 塗りつぶしの色
   */
  drawTree = (fill: string | CanvasGradient, fill_alpha: number = 1.0) => {
    let data: Vector2[] = [];
    let x: number[] = [-1.0, -0.5, -0.5, 0.5, 0.5, 1.0,  0.0];
    let y: number[] = [ 1.0,  1.0,  2.0, 2.0, 1.0, 1.0, -1.0];

    [...Array(x.length).keys()].forEach((count) => {
      data[count] = new Vector2(x[count], y[count]);
    });

    this.gl.save();
    this.gl.scale(this.size.x, this.size.y);
    let poly = new Polygon(this.gl, data);
    poly.drawPolygon2(fill, fill_alpha);
    this.gl.restore();
  };
}

export {TriangleTree};
