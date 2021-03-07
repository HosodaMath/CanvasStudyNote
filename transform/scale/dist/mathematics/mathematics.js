/**
 *
 */
class Mathematics {
    /**
     * random
     * @param {number} min
     * @param {number} max
     */
    static random(min, max) {
        return Math.random() * (max - min) + min;
    }
    /**
     * PI
     */
    static PI() {
        const PI = 3.141592653589793;
        return PI;
    }
    /**
     * PI * 2
     */
    static PI2() {
        return this.PI() * 2;
    }
    /**
     * 角度からラジアンを求める
     * @param {number} degree - degree
     */
    static degTorad(degree) {
        return (this.PI() / 180) * degree;
    }
}
export { Mathematics };
