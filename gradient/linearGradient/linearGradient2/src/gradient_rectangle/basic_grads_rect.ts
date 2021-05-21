import * as Draw from "../draw/draw";
/**
 * グラデーションを回転させる
 */
export class BaseGradsRect {
  /**
   *
   * @param gl
   */
  private gl: CanvasRenderingContext2D;
  private max: number;
  private position: Array<Draw.Vector2>;
  private size: Array<number>;
  constructor(gl: CanvasRenderingContext2D) {
    this.gl = gl;
    this.max = 10;
    this.position = [];
    this.size = [];
  }

  setupGradsRect = (canvas_size: Draw.Vector2) => {
    [...Array(this.max).keys()].forEach((_count) => {
      const initPosition = new Draw.Vector2(
        Draw.Random.random(0, canvas_size.x),
        Draw.Random.random(0, canvas_size.y)
      );
      const initSize = Draw.Random.random(100, 256);

      this.position.push(initPosition);
      this.size.push(initSize);
    });
  };

  drawGradsRect1 = () => {
    this.gl.save();
    [...Array(this.size.length).keys()].forEach((count) => {
      this.gl.beginPath();
      const init_size = this.size[count];
      const draw_size = new Draw.Vector2(init_size, init_size);
      const basePosition = this.position[count];
      const draw_position = new Draw.Vector2(basePosition.x, basePosition.y);

      const colorGradient1 = this.gl.createLinearGradient(
        draw_position.x,
        draw_position.y,
        draw_position.x + draw_size.x,
        draw_position.y + draw_size.y
      );

      colorGradient1.addColorStop(0.0, "rgba(50, 250, 250, 1.0)");
      colorGradient1.addColorStop(0.5, "rgba(50, 100, 250, 1.0)");
      colorGradient1.addColorStop(1.0, "rgba(50, 250, 100, 1.0)");

      const rect = new Draw.Rectangle(this.gl, draw_position, draw_size);
      rect.draw_fill(colorGradient1);
      this.gl.closePath();
    });
    this.gl.restore();
  };

  drawGradsRect2 = () => {
    this.gl.save();
    [...Array(this.size.length).keys()].forEach((count) => {
      this.gl.beginPath();
      const init_size = this.size[count];
      const draw_size = new Draw.Vector2(init_size, init_size);
      const basePosition = this.position[count];
      const draw_position = new Draw.Vector2(basePosition.x, basePosition.y);

      const colorGradient1 = this.gl.createLinearGradient(
        draw_position.x + draw_size.x / 2.0,
        draw_position.y,
        draw_position.x + draw_size.x / 2.0,
        draw_position.y + draw_size.y
      );

      colorGradient1.addColorStop(0.0, "rgba(50, 250, 250, 1.0)");
      colorGradient1.addColorStop(0.5, "rgba(50, 100, 250, 1.0)");
      colorGradient1.addColorStop(1.0, "rgba(50, 250, 100, 1.0)");

      const rect = new Draw.Rectangle(this.gl, draw_position, draw_size);
      rect.draw_fill(colorGradient1);
      this.gl.closePath();
    });
    this.gl.restore();
  };

  drawGradsRect3 = () => {
    this.gl.save();
    [...Array(this.size.length).keys()].forEach((count) => {
      this.gl.beginPath();
      const init_size = this.size[count];
      const draw_size = new Draw.Vector2(init_size, init_size);
      const basePosition = this.position[count];
      const draw_position = new Draw.Vector2(basePosition.x, basePosition.y);

      const colorGradient1 = this.gl.createLinearGradient(
        draw_position.x + draw_size.x,
        draw_position.y,
        draw_position.x,
        draw_position.y + draw_size.y
      );

      colorGradient1.addColorStop(0.0, "rgba(50, 250, 250, 1.0)");
      colorGradient1.addColorStop(0.5, "rgba(50, 100, 250, 1.0)");
      colorGradient1.addColorStop(1.0, "rgba(50, 250, 100, 1.0)");

      const rect = new Draw.Rectangle(this.gl, draw_position, draw_size);
      rect.draw_fill(colorGradient1);
      this.gl.closePath();
    });
    this.gl.restore();
  };
}
