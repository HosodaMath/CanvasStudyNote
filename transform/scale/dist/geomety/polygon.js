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
        this.gl = gl;
        this.data = data;
    }
}
export { Polygon };
