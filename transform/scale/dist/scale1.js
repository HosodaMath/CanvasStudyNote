import { Vector2 } from "./mathematics/vector.js";
import { Rectangle } from "./geomety/rectangle.js";
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
let rect_location1;
let rect_size1;
let rect_location2;
let rect_size2;
let size;
const init = () => {
    canvas.width = width = window.innerWidth;
    canvas.height = height = window.innerHeight;
    setRectangle();
};
const setRectangle = () => {
    size = width * 0.1;
    rect_location1 = new Vector2(0.0, 0.0);
    rect_size1 = new Vector2(size, size);
    rect_location2 = new Vector2(0.0, 0.0);
    rect_size2 = rect_size1;
};
const background = (color) => {
    const CANVAS_LOCATION = new Vector2(0, 0);
    const CANVAS_SIZE = new Vector2(width, height);
    let setBackground = new Rectangle(gl, CANVAS_LOCATION, CANVAS_SIZE);
    setBackground.draw_fill(color);
};
const renderScale = () => {
    const SHIFT = size * 0.5;
    let base_rect = new Rectangle(gl, rect_location1, rect_size1);
    // const 通常の大きさ(width * 0.1)
    /// Base Rectangle
    let base_locaiton_x = [
        width / 4.0 - SHIFT, width / 2.0 - SHIFT, width - width / 4.0 - SHIFT
    ];
    let base_location_y = [
        height / 2.0 - SHIFT, height / 2.0 - SHIFT, height / 2.0 - SHIFT
    ];
    for (let count = 0; count < 3; count++) {
        gl.save();
        gl.translate(base_locaiton_x[count], base_location_y[count]);
        base_rect.draw("rgba(200, 240, 100, 0.2)", "rgb(200, 240, 100)", 2.0);
        gl.restore();
    }
    /// Scale(1, 1)つまり通常の大きさのRectangle
    gl.save();
    gl.translate(width / 4.0 - SHIFT, height / 2.0 - SHIFT);
    gl.scale(1, 1);
    base_rect.draw_fill("rgba(240, 240, 100, 0.8)");
    gl.restore();
    /// Scale(2, 2)つまり2倍の大きさのRectangle
    gl.save();
    gl.translate(width / 2.0 - SHIFT, height / 2.0 - SHIFT);
    gl.scale(2, 2);
    base_rect.draw_fill("rgba(240, 240, 100, 0.8)");
    gl.restore();
    /// Scale(0.5, 0.5)つまり1/2の大きさのRectangle
    gl.save();
    gl.translate(width - width / 4.0 - SHIFT, height / 2.0 - SHIFT);
    gl.scale(0.5, 0.5);
    base_rect.draw_fill("rgba(240, 240, 100, 0.8)");
    gl.restore();
};
const main = () => {
    background("rgb(190, 205, 215)");
    // const WINDOW_SIZE = new Vector2(WIDTH, HEIGHT);
    renderScale();
};
init();
window.onload = main;
