import { ANGLE, pxPerMeter } from "./math";
import { BaseCanvas } from "./canvas";
import { AnimateChild } from "./animator";

export class Ball extends BaseCanvas implements AnimateChild {
  _x = 20;
  _y = 20;
  x = 20;
  y = 20;
  radius = 40;
  strokeStyle: any = "#000";

  speed: number = 100;
  vx = 0; // 100px/s
  vy = 9.88; // 9.88m/s2 * s
  pxPerMeter = pxPerMeter;
  maxDistance = 400;
  lastTime = 0;
  isPositive = true;

  constructor(
    ctx: CanvasRenderingContext2D,
    { speed = 100, vx = 0, vy = 9.88, x = 20, y = 20, radius = 40 } = {}
  ) {
    super(ctx);
    this.speed = speed;
    this.vx = vx;
    this.vy = vy;
    this.x = this._x = x;
    this.y = this._y = y;
    this.radius = radius;
  }

  paint(context?: CanvasRenderingContext2D) {
    context || (context = this.context);

    const { radius, x, y } = this;
    this.draw(() => {
      context.beginPath();
      context.translate(x + radius, y + radius);

      const gradient = context.createRadialGradient(
        radius / 10,
        radius * 0.4,
        radius * 0.4,
        0,
        0,
        radius
      );
      gradient.addColorStop(0, "hsl(45, 87%, 90%)");
      gradient.addColorStop(1, "hsl(45, 96%, 52%)");
      context.arc(0, 0, radius, 0, ANGLE, false);
      context.fillStyle = gradient;
      context.fill();
    });
  }

  animate(time: number = 0) {
    const { _x, _y, vx, vy, maxDistance, isPositive, lastTime } = this;

    const distanceX = lastTime > 0 ? (vx * (time - lastTime)) / 1000 : 0;
    this.x += distanceX * (isPositive ? 1 : -1);
    if (this.x > _x + maxDistance || this.x < _x) {
      this.isPositive = !isPositive;
    }

    const distanceY =
      lastTime > 0 ? (vy * this.pxPerMeter * (time - lastTime)) / 1000 : 0;
    this.y += distanceY * (isPositive ? 1 : -1);
    if (this.y > _y + maxDistance || this.y < _y) {
      this.isPositive = !isPositive;
    }
    this.lastTime = time;
  }
}
