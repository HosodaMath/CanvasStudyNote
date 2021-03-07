class Polygon {
    /**
     *
     * @param {CanvasRenderingContext2D} gl
     * @param {Vector2[]} data
     */
    constructor(gl, data) {
        this.data = [];
        /**
         * パスを閉じる
         * @param {string | CanvasGradient} fill - 塗りつぶしの色
         */
        this.drawPolygon2 = (fill, fill_alpha = 1.0) => {
            this.gl.fillStyle = fill;
            this.gl.globalAlpha = fill_alpha;
            this.gl.beginPath();
            this.gl.moveTo(this.data[0].x, this.data[0].y);
            for (let count = 1; count < this.data.length; count++) {
                this.gl.lineTo(this.data[count].x, this.data[count].y);
            }
            this.gl.closePath();
            this.gl.fill();
        };
        /**
         *
         * @param {string | CanvasGradient} fillColor
         * @param {string | CanvasGradient} strokeColor
         * @param {number} strokeWidth
         * @param {number} alpha
         */
        this.draw = (fillColor, strokeColor, strokeWidth = 1.0, alpha = 1.0) => {
            this.gl.fillStyle = fillColor;
            this.gl.strokeStyle = strokeColor;
            this.gl.lineWidth = strokeWidth;
            this.gl.globalAlpha = alpha;
            this.gl.beginPath();
            this.gl.moveTo(this.data[0].x, this.data[0].y);
            for (let count = 1; count < this.data.length; count++) {
                this.gl.lineTo(this.data[count].x, this.data[count].y);
            }
            this.gl.closePath();
            this.gl.fill();
            this.gl.stroke();
        };
        this.gl = gl;
        this.data = data;
    }
}
export { Polygon };
