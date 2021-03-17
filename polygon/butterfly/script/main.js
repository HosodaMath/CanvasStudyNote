import { Point } from "./point.js";
const canvas = document.querySelector("canvas");
if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error("not found canvas element");
}
const gl = canvas.getContext("2d");
if (!gl) {
    throw new Error("canvasの初期化に失敗しました。");
}
const init = () => {
    canvas.width = 800;
    canvas.height = 800;
};
const drawLine = (width, height) => {
    gl.strokeStyle = "#ff0000";
    gl.lineWidth = 5.0;
    gl.beginPath();
    gl.moveTo(0, height / 2.0);
    gl.lineTo(width, height / 2.0);
    gl.closePath();
    gl.stroke();
};
const drawCircle = (width, height) => {
    gl.fillStyle = "#ffff00";
    gl.beginPath();
    gl.arc(width / 2.0, height / 2.0, 200, 0, 2 * Math.PI);
    gl.closePath();
    gl.fill();
};
const drawRect = (width, height) => {
    gl.fillStyle = "#000000";
    gl.beginPath();
    gl.rect(0, 0, width, height);
    gl.closePath();
    gl.fill();
};
const drawPolygon = (_width, height) => {
    let data = [];
    for (let count = 0; count < 100; count += 0.01) {
        let tmp = new Point(count * 10, Math.sin(count) * 100 + height / 2.0);
        data.push(tmp);
    }
    gl.strokeStyle = "#00ff00";
    gl.lineWidth = 5.0;
    gl.beginPath();
    gl.moveTo(data[0].location_x, data[0].location_y);
    for (let count = 1; count < data.length; count++) {
        gl.lineTo(data[count].location_x, data[count].location_y);
    }
    //gl.closePath();
    gl.stroke();
};
const main = () => {
    init();
    const width = canvas.width;
    const height = canvas.height;
    drawRect(width, height);
    drawLine(width, height);
    drawCircle(width, height);
    drawPolygon(width, height);
};
window.onload = main;
