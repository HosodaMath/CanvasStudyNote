import { Vector2 } from "../mathematics/vector.js";
/**
 *
 */
class Line {
    /**
     *
     * @param {Vector2} start_point
     * @param {Vector2} end_point
     */
    constructor(gl, start_point, end_point) {
        this.start_point = new Vector2(0, 0);
        this.end_point = new Vector2(0, 0);
        /**
         *
         * @param {number} stroke_color
         * @param {number} stroke_width
         * @param {number} alpha
         */
        this.draw = (stroke_color, stroke_width = 1.0, alpha = 1.0) => {
            this.gl.strokeStyle = stroke_color;
            this.gl.lineWidth = stroke_width;
            this.gl.globalAlpha = alpha;
            this.gl.beginPath();
            this.gl.moveTo(this.start_point.x, this.start_point.y);
            this.gl.lineTo(this.end_point.x, this.end_point.y);
            this.gl.stroke();
        };
        this.gl = gl;
        this.start_point = start_point;
        this.end_point = end_point;
    }
}
export { Line };
