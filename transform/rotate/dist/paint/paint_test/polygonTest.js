import { Vector2 } from "../../mathematics/vector.js";
import { Polygon } from "../../geomety/polygon.js";
const canvas = document.querySelector("canvas");
if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error("not found canvas element");
}
const gl = canvas.getContext("2d");
if (!gl) {
    throw new Error("canvasの初期化に失敗しました。");
}
let width = 0;
let height = 0;
let data = [];
const init = () => {
    canvas.width = width = window.innerWidth;
    canvas.height = height = window.innerHeight;
    set_data();
};
const set_data = () => {
    for (let count = 0; count < 360; count++) {
        let tmp = new Vector2(Math.cos(count) * 50 + width / 2.0, Math.sin(count) * 50 + height / 2.0);
        data.push(tmp);
    }
};
const paints = (canvas_size) => {
    let poly = new Polygon(gl, data);
    let velocity = new Vector2(2, 2);
    poly.drawStep(velocity, canvas_size);
    poly.drawPolygon2("rgba(240, 255, 240, 0.1)");
};
const main = () => {
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    //const WIDTH2 = WIDTH / 2.0;
    //const HEIGHT2 = HEIGHT / 2.0;
    const WINDOW_SIZE = new Vector2(WIDTH, HEIGHT);
    paints(WINDOW_SIZE);
    requestAnimationFrame(main);
};
init();
window.onload = main;
