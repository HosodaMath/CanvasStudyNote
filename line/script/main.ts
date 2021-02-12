const main = () => {
  const canvas = document.querySelector("canvas");

  if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error("not found canvas element");
  }

  const gl = canvas.getContext("2d");

  if (!gl) {
    throw new Error("canvasの初期化に失敗しました。");
  }

  canvas.width = 800;
  canvas.height = 800;

  const width = canvas.width;
  const height = canvas.height;

  gl.strokeStyle = "#000000";
  gl.lineWidth = 1.0;
  gl.beginPath();
  gl.moveTo(0, height / 2.0);
  gl.lineTo(width, height / 2.0);
  gl.closePath();
  gl.stroke();

}

window.onload = main;