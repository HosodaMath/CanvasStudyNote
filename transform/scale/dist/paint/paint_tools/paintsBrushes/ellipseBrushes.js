import { Vector2 } from "../../../mathematics/vector.js";
class BrushesEllipse {
    /**
     *
     * @param {CanvasRenderingContext2D} gl
     * @param {Vector2} init_position
     * @param {Vector2} init_ellipse_radius
     */
    constructor(gl, init_position, init_ellipse_radius, velocity) {
        this.position = new Vector2(0, 0);
        this.radius = new Vector2(0, 0);
        this.velocity = new Vector2(0, 0);
        this.gl = gl;
        this.position = init_position;
        this.radius = init_ellipse_radius;
        this.velocity = velocity;
    }
    paint_step(window_size) {
        this.position.add(this.velocity);
        if (this.position.x < 0 || this.position.x > window_size.x) {
            this.velocity.x *= -1;
        }
        if (this.position.y < 0 || this.position.y > window_size.y) {
            this.velocity.y *= -1;
        }
    }
    /**
     * fillのみ描画
     * @param {string} fill
     * @param {number} alpha
     */
    paints_draw(fill) {
        this.gl.fillStyle = fill;
        this.gl.beginPath();
        this.gl.ellipse(this.position.x, this.position.y, this.radius.x, this.radius.y, 0, 0, Math.PI * 2);
        this.gl.fill();
        this.gl.closePath();
    }
    /**
     *
     * @param {string} fill
     * @param {string} stroke
     * @param {number} stroke_weight
     */
    paints_all_draw(fill, stroke, stroke_weight = 1.0) {
        this.gl.fillStyle = fill;
        this.gl.strokeStyle = stroke;
        this.gl.lineWidth = stroke_weight;
        this.gl.beginPath();
        this.gl.ellipse(this.position.x, this.position.y, this.radius.x, this.radius.y, 0, 0, Math.PI * 2);
        this.gl.closePath();
        this.gl.fill();
        this.gl.stroke();
    }
    /**
     * strokeのみ描画
     * @param stroke
     * @param stroke_weight
     * @param alpha
     */
    paints_stroke_draw(stroke, stroke_weight = 1.0) {
        this.gl.strokeStyle = stroke;
        this.gl.lineWidth = stroke_weight;
        this.gl.beginPath();
        this.gl.ellipse(this.position.x, this.position.y, this.radius.x, this.radius.y, 0, 0, Math.PI * 2);
        this.gl.closePath();
        this.gl.stroke();
    }
}
export { BrushesEllipse };
