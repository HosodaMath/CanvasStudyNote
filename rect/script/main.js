"use strict";
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
const main = () => {
    init();
    const width = canvas.width;
    const height = canvas.height;
    drawRect(width, height);
    drawLine(width, height);
    drawCircle(width, height);
};
window.onload = main;
