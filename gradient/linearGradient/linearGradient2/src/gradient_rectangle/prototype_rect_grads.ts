import * as Draw from "../draw/draw";
/**
 * @description 試作グラデーションクラス
 */
export class PrototypeGradsRect {
  private gl: CanvasRenderingContext2D;
  /**
   *
   * @param gl
   */
  constructor(gl: CanvasRenderingContext2D) {
    this.gl = gl;
  }

  drawGradient = () => {
    this.gl.save();
    this.gl.beginPath();
    const size = new Draw.Vector2(256, 256);
    const basePosition = new Draw.Vector2(100, 100);
    const position = new Draw.Vector2(basePosition.x, basePosition.y);

    const colorGradient1 = this.gl.createLinearGradient(
      position.x,
      position.y,
      position.x + size.x,
      position.y + size.y
    );

    colorGradient1.addColorStop(0.0, "rgba(50, 250, 250, 1.0)");
    colorGradient1.addColorStop(0.5, "rgba(50, 100, 250, 1.0)");
    colorGradient1.addColorStop(1.0, "rgba(50, 250, 100, 1.0)");

    const rectPosition = new Draw.Vector2(0, 0);
    // gl.translate(position.x, position.y);
    const rect = new Draw.Rectangle(this.gl, position, size);
    rect.draw_fill(colorGradient1);
    this.gl.closePath();
    this.gl.restore();
  };

  drawGradients = (canvas_size: Draw.Vector2) => {
    this.gl.save();
    [...Array(10).keys()].forEach((_count) => {
      this.gl.beginPath();
      const init_size = Draw.Random.random(100, 256);
      const size = new Draw.Vector2(init_size, init_size);
      const basePosition = new Draw.Vector2(
        Draw.Random.random(0, canvas_size.x),
        Draw.Random.random(0, canvas_size.y)
      );
      const position = new Draw.Vector2(basePosition.x, basePosition.y);

      const colorGradient1 = this.gl.createLinearGradient(
        position.x,
        position.y,
        position.x + size.x,
        position.y + size.y
      );

      colorGradient1.addColorStop(0.0, "rgba(50, 250, 250, 1.0)");
      colorGradient1.addColorStop(0.5, "rgba(50, 100, 250, 1.0)");
      colorGradient1.addColorStop(1.0, "rgba(50, 250, 100, 1.0)");

      const rectPosition = new Draw.Vector2(0, 0);
      // gl.translate(position.x, position.y);
      const rect = new Draw.Rectangle(this.gl, position, size);
      rect.draw_fill(colorGradient1);
      this.gl.closePath();
    });
    this.gl.restore();
  };
}
