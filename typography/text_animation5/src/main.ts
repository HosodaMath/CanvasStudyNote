import { Vector2 } from "./mathematics/vector";
import { Rectangle } from "./geomety/rectangle";

const canvas = document.querySelector("canvas");

if (!(canvas instanceof HTMLCanvasElement)) {
  throw new Error("not found canvas element");
}

const gl = canvas.getContext("2d")!;
if (!gl) {
  throw new Error("canvasの初期化に失敗しました。");
}

let width = 0;
let height = 0;

//basic set text

let text_location: Vector2[] = [];
let text_velocity: Vector2[] = [];
let text: string;

let time = 0;

const init = () => {
  canvas.width = width = window.innerWidth;
  canvas.height = height = window.innerHeight;

  setText();
};

const setText = () => {
  /// set text data
  text = "Hello World";
  const TEXT_SIZE = text.length;
  const TEXT_FONT_SIZE = 40;
  [...Array(TEXT_SIZE).keys()].forEach((count) => {
    let init_height = height * 0.25;
    text_location[count] = new Vector2(width * 0.5, init_height + TEXT_FONT_SIZE * count);
    text_velocity[count] = new Vector2(0.0, 0.5);
  });
};

const background = (canvas_size: Vector2) => {
  const CANVAS_SIZE = canvas_size;
  const START = new Vector2(0, 0);
  let rect = new Rectangle(gl, START, CANVAS_SIZE);
  rect.draw_fill("#BECDD7");
};

const renderText = (canvas_size: Vector2) => {
  [...Array(text_location.length).keys()].forEach((count) => {
    text_location[count].add(text_velocity[count]);

  if(text_location[count].y < 0 || text_location[count].y > canvas_size.y){
    text_location[count].y = 0;
  }

    gl.fillStyle = "#FFFFFF";
    gl.font = "40px fantasy";
    gl.textAlign = "center";
    gl.fillText(text[count], text_location[count].x, text_location[count].y);
    console.log(text[count], text_location[count].x, text_location[count].y);
  });
};

const main = () => {
  const WIDTH = canvas.width;
  const HEIGHT = canvas.height;
  //const WIDTH2 = WIDTH / 2.0;
  //const HEIGHT2 = HEIGHT / 2.0;
  const CANVAS_SIZE = new Vector2(WIDTH, HEIGHT);

  background(CANVAS_SIZE);

  renderText(CANVAS_SIZE);

  requestAnimationFrame(main);
};
init();

window.onload = main;
