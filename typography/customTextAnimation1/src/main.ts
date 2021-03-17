import { Vector2 } from "./mathematics/vector";
import { Mathematics } from "./mathematics/mathematics";
import { Rectangle } from "./geomety/rectangle";
//import { DrawingText } from "./geomety/drawingText";
//import { DrawingAnimationText } from "./geomety/drawingAnimationText";
import { CustomTextAnimation } from "./geomety/customTextAnimation";

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
let text_data: string[] = [];
let angle: Vector2[] = [];
let angleSpeed: Vector2[] = [];
const init = () => {
  canvas.width = width = window.innerWidth;
  canvas.height = height = window.innerHeight;

  setText();
};

const setText = () => {
  /// set text data
  const TEXT_DATA = [
    "Hello World",
    "1",
    "CG",
    "Space++",
    "(-v-)",
    "Programming",
  ];
  const TEXT_SIZE = TEXT_DATA.length;
  [...Array(TEXT_SIZE).keys()].forEach((count) => {
    text_location[count] = new Vector2(
      Mathematics.random(0 + 100, width - 100),
      Mathematics.random(0 + 100, height - 100)
    );
    text_velocity[count] = new Vector2(Mathematics.random(-2, 2), 0);
    text_data[count] = TEXT_DATA[count];

    angle[count] = new Vector2(0, 0);
    let init_angle_speed = Mathematics.random(0.01, 0.03);
    angleSpeed[count] = new Vector2(init_angle_speed, init_angle_speed);
  });
};

const background = (canvas_size: Vector2) => {
  const CANVAS_SIZE = canvas_size;
  const START = new Vector2(0, 0);
  let rect = new Rectangle(gl, START, CANVAS_SIZE);
  rect.draw_fill("#BECDD7");
};

const renderText = (canvas_size: Vector2) => {
  [...Array(text_data.length).keys()].forEach((count) => {
    /*
    let text = new DrawingText(gl, text_location[count], text_data[count]);
    text.draw("#FFFFFF", "40px fantasy", "center");
    */

    let text = new CustomTextAnimation(
      gl,
      text_location[count],
      text_velocity[count],
      text_data[count],
      angle[count],
      angleSpeed[count]
    );

    text.textStep(canvas_size);
    text.draw("#FFFFFF", "40px fantasy", "center");
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
