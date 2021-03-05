import { Vector2 } from "../../mathematics/vector.js";
import { BrushesRectangle } from "../paint_tools/paintsBrushes/rectBrushes.js";
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
    location1 = new Vector2(0.0, 0.0);
    size1 = new Vector2(10, height);
    velocity1 = new Vector2(1, 0);
};
const paints = (canvas_size) => {
    let colors = gl.createLinearGradient(location1.x + size1.x / 2.0, location1.y, location1.x + size1.x / 2.0, location1.y + size1.y);
    colors.addColorStop(0.0, "rgba(255, 255, 100, 0.1)");
    colors.addColorStop(0.5, "rgba(240, 155, 100, 0.1)");
    colors.addColorStop(1.0, "rgba(255, 255, 100, 0.1)");
    let rect_brushes1 = new BrushesRectangle(gl, location1, size1, velocity1);
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
