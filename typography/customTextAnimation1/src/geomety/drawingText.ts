import { Vector2 } from "../mathematics/vector";

/**
 * @class 
 * DrawingText
 * @description
 * テキスト配置のクラス
 * @author 
 * ShingoHosoda
 * @copyright 
 * Shingo Hosoda
 */
class DrawingText {
  protected gl: CanvasRenderingContext2D;
  protected text_lcoation: Vector2;
  protected text: string;
  /**
   *
   * @param {CanvasRenderingContext2D} gl
   * @param {Vector2} text_location
   * @param {string} text
   */
  constructor(
    gl: CanvasRenderingContext2D,
    text_location: Vector2,
    text: string
  ) {
    this.gl = gl;
    this.text_lcoation = text_location;
    this.text = text;
  }
  /**
   *
   * @param {string} fillColor
   * @param {string} setFont fontSize and font
   * @param {CanvasTextAlign} setTextAlign - "center" | "end" | "left" | "right" | "start"
   */
  public draw = (fillColor: string, setFont: string ,setTextAlign: CanvasTextAlign) => {
    this.gl.fillStyle = fillColor;
    this.gl.font = setFont;
    this.gl.textAlign = setTextAlign;
    this.gl.fillText(this.text, this.text_lcoation.x, this.text_lcoation.y);
  };

  /**
   *
   * @param {string} strokeColor
   * @param {string} setFont
   * @param {CanvasTextAlign} setTextAlign - "center" | "end" | "left" | "right" | "start"
   */
  public drawStroke = (strokeColor: string, setFont: string ,setTextAlign: CanvasTextAlign) => {
    this.gl.strokeStyle = strokeColor;
    this.gl.font = setFont;
    this.gl.textAlign = setTextAlign;
    this.gl.strokeText(this.text, this.text_lcoation.x, this.text_lcoation.y);
  };
}


export { DrawingText};
