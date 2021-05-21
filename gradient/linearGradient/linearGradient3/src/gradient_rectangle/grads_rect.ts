import * as Draw from "../draw/draw";
/**
 * グラデションの間隔を細かく指定できるようになった
 */
export class GradsRect {
  private gl: CanvasRenderingContext2D;
  private rectMax: number;
  private position: Array<Draw.Vector2>;
  private size: Array<number>;
  private gradationStep: Array<number>;
  private gradationColorData: Array<string>;
  /**
   *
   * @param gl
   */
  constructor(gl: CanvasRenderingContext2D) {
    this.gl = gl;
    this.rectMax = 100;
    this.position = [];
    this.size = [];
    
    
    this.gradationStep = [0.0, 0.25, 0.5, 0.75, 1.0];
    this.gradationColorData = [
      "rgba(10, 50, 50, 1.0)",
      "rgba(10, 150, 150, 1.0)",
      "rgba(10, 250, 250, 1.0)",
      "rgba(10, 150, 150, 1.0)",
      "rgba(10, 50, 50, 1.0)",
    ];
  }

  setupGradation = (canvasSize: Draw.Vector2) => {
    [...Array(this.rectMax).keys()].forEach((count) => {
      const initPosition = new Draw.Vector2(
        Draw.Random.random(0, canvasSize.x),
        Draw.Random.random(0, canvasSize.y)
      );
      const initSize = Draw.Random.random(100, 256);
      this.position.push(initPosition);
      this.size.push(initSize);
    });
  };

  drawGradation = () => {
    if (this.gradationColorData.length !== this.gradationStep.length) {
      throw new Error(
        "グラデーションステップ数と色データの個数が一致しません😖"
      );
    }
    this.gl.save();
    this.gl.filter = "blur(4px)";
    [...Array(this.rectMax).keys()].forEach((count) => {
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

      [...Array(this.gradationStep.length).keys()].forEach((color_count) => {
        colorGradient1.addColorStop(
          this.gradationStep[color_count],
          this.gradationColorData[color_count]
        );
      });

      const rect = new Draw.Rectangle(this.gl, draw_position, draw_size);
      rect.draw_fill(colorGradient1);
      this.gl.closePath();
    });
    this.gl.restore();
  };
}
