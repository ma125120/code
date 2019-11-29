export class BaseCanvas {
  context: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.context = ctx;
  }

  draw(cb: Function) {
    this.context.save();
    cb();
    this.context.restore();
  }
}
