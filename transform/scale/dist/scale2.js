import { Vector2 } from "./mathematics/vector.js";
import { Line } from "./geomety/line.js";
import { Grid } from "./utility/grid.js";
import { Rectangle } from "./geomety/rectangle.js";
import { Polygon } from "./geomety/polygon.js";
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
let triangle_location1 = [];
let triangle_size1;
const init = () => {
    canvas.width = width = window.innerWidth;
    canvas.height = height = window.innerHeight;
    setTriangle();
};
let renderGrid = () => {
    let line_location1_1 = new Vector2(width / 4.0, 0.0);
    let line_location1_2 = new Vector2(width / 4.0, height);
    let line1 = new Line(gl, line_location1_1, line_location1_2);
    let line_location2_1 = new Vector2(0.0, height / 2.0);
    let line_location2_2 = new Vector2(width, height / 2.0);
    let line2 = new Line(gl, line_location2_1, line_location2_2);
    let line_location3_1 = new Vector2(width / 2.0, 0.0);
    let line_location3_2 = new Vector2(width / 2.0, height);
    let line3 = new Line(gl, line_location3_1, line_location3_2);
    let line_location4_1 = new Vector2(width - width / 4.0, 0.0);
    let line_location4_2 = new Vector2(width - width / 4.0, height);
    let line4 = new Line(gl, line_location4_1, line_location4_2);
    let line_data = [line2, line1, line3, line4];
    Grid.gridN(line_data, "#000000");
};
const setTriangle = () => {
    const TRIANGLE_MAX = 3;
    let x1 = [0, 0.5, 1];
    let y1 = [1, 0, 1];
    /// 三角形なので大きさは100(すべて同じ)
    triangle_size1 = 200;
    for (let count = 0; count < TRIANGLE_MAX; count++) {
        triangle_location1[count] = new Vector2(x1[count] * triangle_size1, y1[count] * triangle_size1);
        console.log(triangle_location1[count].x, triangle_location1[count].y);
    }
};
const background = (color) => {
    const CANVAS_LOCATION = new Vector2(0, 0);
    const CANVAS_SIZE = new Vector2(width, height);
    let setBackground = new Rectangle(gl, CANVAS_LOCATION, CANVAS_SIZE);
    setBackground.draw_fill(color);
};
const renderScale = () => {
    /// 三角形描画の準備
    let triangle = new Polygon(gl, triangle_location1);
    const SHIFT = triangle_size1 * 0.5;
    let base_locaiton_x = [
        width / 4.0 - SHIFT,
        width / 2.0 - SHIFT,
        width - width / 4.0 - SHIFT,
    ];
    let base_location_y = [
        height / 2.0 - SHIFT,
        height / 2.0 - SHIFT,
        height / 2.0 - SHIFT,
    ];
    /// べースとなる三角形を描画する。
    for (let count = 0; count < 3; count++) {
        gl.save();
        gl.translate(base_locaiton_x[count], base_location_y[count]);
        triangle.draw("rgba(200, 240, 100, 0.2)", "rgb(200, 240, 100)", 2.0);
        gl.restore();
    }
    /// スケール設定のある三角形を描画する。
    let scale_x = [1, 2, 0.5];
    let scale_y = [1, 2, 0.5];
    for (let count = 0; count < 3; count++) {
        gl.save();
        gl.translate(base_locaiton_x[count], base_location_y[count]);
        gl.translate(SHIFT, SHIFT);
        gl.scale(scale_x[count], scale_y[count]);
        gl.translate(-SHIFT, -SHIFT);
        triangle.drawPolygon2("rgba(200, 240, 100, 0.8)");
        gl.restore();
    }
};
const main = () => {
    background("rgb(190, 205, 215)");
    renderGrid();
    renderScale();
};
init();
window.onload = main;
