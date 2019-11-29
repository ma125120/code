import { ANGLE, ANGLE1, sin, cos, angle } from "./math";
import { BaseCanvas } from "./canvas";

type AngleItem = {
  angle: number;
  text: number | string;
  level: number;
  isReverse: boolean;
  sin: number;
  cos: number;
};

const secondScales: AngleItem[] = new Array(60).fill(0).map((v, i) => {
  const num = i + 1;
  const angleNum = (i + 1) * (360 / 60);

  const obj = {
    isReverse: num >= 15,
    angle: angle(angleNum),
    sin: sin(angleNum),
    cos: cos(angleNum),
    level: 1
  };
  if (num % 5 === 0) {
    let text = num / 5;
    if (text % 3 === 0) {
      return { ...obj, level: 3, text };
    }
    return { ...obj, level: 2, text };
  }
  return { ...obj, text: "" };
});

export class Clock extends BaseCanvas {
  x = 20;
  y = 20;
  radius = 100;
  strokeStyle: any = "#000";
  constructor(ctx: CanvasRenderingContext2D) {
    super(ctx);
  }

  paint() {
    const { radius, x, y, context } = this;
    this.draw(() => {
      context.beginPath();

      context.translate(x + radius, y + radius);
      context.arc(0, 0, radius, 0, ANGLE, false);
      context.strokeStyle = this.strokeStyle;
      context.stroke();
    });
    this.draw(() => {
      context.beginPath();

      context.translate(x + radius, y + radius);
      context.arc(0, 0, 6, 0, ANGLE, false);
      context.fillStyle = this.strokeStyle;
      context.fill();
    });

    this.drawSeconds();
  }

  drawSeconds() {
    const { radius, x, y, context } = this;
    secondScales.map((v: AngleItem) => {
      this.draw(() => {
        context.beginPath();

        context.translate(
          x + radius + radius * v.sin,
          y + radius + radius * v.cos
        );

        context.rotate(v.angle);
        context.fillStyle = this.strokeStyle;
        context.fillRect(-1, 0, 2, 4 * v.level);
      });

      this.draw(() => {
        context.beginPath();

        context.translate(
          x + radius + (radius - 4 * v.level - 10) * v.sin,
          y + radius + (radius - 4 * v.level - 10) * v.cos
        );

        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(v.text + "", 0, 0);
      });
    });
  }
}
