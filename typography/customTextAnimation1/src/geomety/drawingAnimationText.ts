import { Vector2 } from "../mathematics/vector";
import { DrawingText } from "./drawingText";

/**
 * @class 
 * DrawingAnimationText
 * @description
 * テキストアニメーションのクラス
 * @author 
 * ShingoHosoda
 * @copyright 
 * Shingo Hosoda
 */
class DrawingAnimationText extends DrawingText {
  protected text_velocity: Vector2;
  constructor(
    gl: CanvasRenderingContext2D,
    text_location: Vector2,
    text_velocity: Vector2,
    text: string
  ) {
    super(gl, text_location, text);
    this.text_velocity = text_velocity;
  }

  /**
   * 
   * @param {Vector2} canvas_size 
   */
  public textStep = (canvas_size: Vector2) => {
      this.text_lcoation.add(this.text_velocity);
      if(this.text_velocity.x == 0){
        this.text_velocity.x = 1;
      }

      if(this.text_lcoation.x < 0){
        this.text_lcoation.x = canvas_size.x;
      }

      if(this.text_lcoation.x > canvas_size.x){
        this.text_lcoation.x = 0;
      }
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

export {DrawingAnimationText}
