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
    size = width * 0.2;
    rect_location1 = new Vector2(width / 4.0 - size / 2, height / 2.0 - size / 2.0);
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
const renderTranslate = () => {
    let rect1 = new Rectangle(gl, rect_location1, rect_size1);
    // console.log(width, height);
    // console.log(rect_location1.x, rect_location1.y);
    // console.log(rect_size2.x, rect_size2.y);
    gl.save();
    rect1.draw_fill("rgba(240, 255, 240, 0.8)");
    gl.rotate((Math.PI / 180) * 25);
    rect1.draw_fill("rgba(240, 255, 240, 0.8)");
    gl.restore();
    /// 元の座標を中心に回転させるにはtranslateが必要
    let rect2 = new Rectangle(gl, rect_location2, rect_size2);
    gl.save();
    gl.translate(width - width / 4.0 - size / 2.0, height / 2.0 - size / 2.0);
    rect2.draw_fill("rgba(240, 255, 255, 0.8)");
    gl.restore();
    gl.translate(width - width / 4.0 - size / 2.0, height / 2.0 - size / 2.0);
    gl.rotate((Math.PI / 180) * 25);
    //gl.translate(-width - width / 4.0 - size / 2.0, -height / 2.0 - size / 2.0);
    rect2.draw_fill("rgba(240, 255, 255, 0.8)");
};
const main = () => {
    background("rgb(190, 205, 215)");
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    // const WIDTH2 = WIDTH / 2.0;
    // const HEIGHT2 = HEIGHT / 2.0;
    // const WINDOW_SIZE = new Vector2(WIDTH, HEIGHT);
    renderTranslate();
};
init();
window.onload = main;
