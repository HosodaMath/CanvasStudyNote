import { Mathematics } from "./mathematics.js";
import { Vector2 } from "./vector.js";

const canvas = document.querySelector("canvas");

if (!(canvas instanceof HTMLCanvasElement)) {
  throw new Error("not found canvas element");
}

const gl = canvas.getContext("2d")!;
if (!gl) {
  throw new Error("canvasの初期化に失敗しました。");
}

let location1: Vector2[] = [];
let velocity1: Vector2[] = [];
let width = 0;
let height = 0;
let rect_color_data: string[] = [];

const setup = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  width = canvas.width;
  height = canvas.height;
  let width2 = canvas.width / 2;
  let height2 = canvas.height / 2;
  for(let count = 0; count < 10; count++){
    location1[count] = new Vector2(width2, height2);
    velocity1[count] = new Vector2(
      Mathematics.random(-3, 3), 
      Mathematics.random(-3, 3)
    );
    let color1 = Mathematics.random(100, 255);
    let color2 = Mathematics.random(100, 255);
    let color3 = Mathematics.random(100, 255);
    rect_color_data.push(`rgba(${color1}, ${color2}, ${color3}, 1.0)`);
  }

}

const background = () => {
  gl.beginPath();
  gl.fillStyle = "rgba(10, 10, 10, 0.3)";
  gl.rect(0, 0, canvas.width, canvas.height);
  gl.closePath();
  gl.fill();
}


class Rectangle {
  private location1 = new Vector2(0, 0);
  private velocity1 = new Vector2(0, 0);
  constructor(location1: Vector2, velocity1: Vector2) {
    this.location1 = location1;
    this.velocity1 = velocity1;
  }

  public stepRect = () => {
    this.location1.add(this.velocity1);
    
    if(this.location1.coord_x < 0 || this.location1.coord_x > width ){
      this.velocity1.x *= -1;
    }

    if(this.location1.coord_y < 0 || this.location1.coord_y > height ){
      this.velocity1.y *= -1;
    }
  }

  public renderRect = (fill_color: string) => {
    gl.beginPath();
    gl.fillStyle = fill_color;
    
    gl.rect(this.location1.coord_x, this.location1.coord_y, 50, 50);
    gl.closePath();
    gl.fill();
  }

}

const main = () => {
  background();
  
  for(let count = 0; count < location1.length; count++){
    let rect = new Rectangle(location1[count], velocity1[count]);
    rect.stepRect();
    rect.renderRect(rect_color_data[count]);
  }

 
  
  requestAnimationFrame(main);

}
setup();

window.onload = main;