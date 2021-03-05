import { Vector2 } from "../../mathematics/vector.js";
import { BrushesEllipse } from "../paint_tools/paintsBrushes/ellipseBrushes.js";
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
let location1;
let size1;
let velocity1;
const init = () => {
    canvas.width = width = window.innerWidth;
    canvas.height = height = window.innerHeight;
    setRectBrushes();
};
const setRectBrushes = () => {
    location1 = new Vector2(0.0, height / 2.0);
    size1 = new Vector2(20, 20);
    velocity1 = new Vector2(1, 0);
};
const paints = (canvas_size) => {
    let colors = gl.createRadialGradient(location1.x, location1.y, 5, location1.x, location1.y, 20);
    colors.addColorStop(0.0, "rgba(255, 255, 100, 0.1)");
    colors.addColorStop(0.5, "rgba(240, 155, 100, 0.1)");
    colors.addColorStop(1.0, "rgba(255, 125, 172, 0.1)");
    let rect_brushes1 = new BrushesEllipse(gl, location1, size1, velocity1);
    rect_brushes1.paint_step(canvas_size);
    rect_brushes1.paints_draw(colors);
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
