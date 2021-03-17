import { Vector2 } from "../mathematics/vector";
import { Mathematics } from "../mathematics/mathematics";
import { DrawingAnimationText } from "./drawingAnimationText";

/**
 * @class
 * DrawingAnimationText
 * @description
 * 拡張テキストアニメーションのクラス(transform)
 * @author
 * ShingoHosoda
 * @copyright
 * Shingo Hosoda
 */

class CustomTextAnimation extends DrawingAnimationText {
  private angle: Vector2;
  private angleSpeed: Vector2;
  constructor(
    gl: CanvasRenderingContext2D,
    text_location: Vector2,
    text_velocity: Vector2,
    text: string,
    angle: Vector2,
    angleSpeed: Vector2
  ) {
    super(gl, text_location, text_velocity, text);
    this.angle = angle;
    this.angleSpeed = angleSpeed;
  }

  /**
   *
   * @param {Vector2} canvas_size
   */
  public textStep = (canvas_size: Vector2) => {
    this.text_lcoation.add(this.text_velocity);
    this.angle.add(this.angleSpeed);
    if (this.text_velocity.x == 0) {
      this.text_velocity.x = 1;
    }

    if (this.text_lcoation.x < 0) {
      this.text_lcoation.x = canvas_size.x;
    }

    if (this.text_lcoation.x > canvas_size.x) {
      this.text_lcoation.x = 0;
    }
  };

  /**
   *
   * @param {string} fillColor
   * @param {string} setFont fontSize and font
   * @param {CanvasTextAlign} setTextAlign - "center" | "end" | "left" | "right" | "start"
   */
  public draw = (
    fillColor: string,
    setFont: string,
    setTextAlign: CanvasTextAlign
  ) => {
    this.gl.save();
    this.gl.translate(this.text_lcoation.x, this.text_lcoation.y);
    //this.gl.rotate(Mathematics.degTorad(this.text_lcoation.x) * 0.05);
    this.gl.scale(Math.cos(this.angle.x), Math.sin(this.angle.y));
    this.gl.fillStyle = fillColor;
    this.gl.font = setFont;
    this.gl.textAlign = setTextAlign;
    this.gl.fillText(this.text, 0, 0);
    this.gl.restore();
  };

  /**
   *
   * @param {string} strokeColor
   * @param {string} setFont
   * @param {CanvasTextAlign} setTextAlign - "center" | "end" | "left" | "right" | "start"
   */
  public drawStroke = (
    strokeColor: string,
    setFont: string,
    setTextAlign: CanvasTextAlign
  ) => {
    this.gl.save();
    this.gl.translate(this.text_lcoation.x, this.text_lcoation.y);
    //this.gl.rotate(Mathematics.degTorad(this.text_lcoation.x));
    this.gl.scale(Math.cos(this.text_lcoation.x) * 100, Math.sin(this.text_lcoation.y) * 100);
    this.gl.strokeStyle = strokeColor;
    this.gl.font = setFont;
    this.gl.textAlign = setTextAlign;
    this.gl.strokeText(this.text, 0, 0);
    this.gl.restore();
  };
}

export { CustomTextAnimation };
