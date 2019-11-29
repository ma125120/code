import { BaseCanvas } from "./canvas";

export interface AnimateChild {
  animate: (time?: number) => void;
  paint: (context?: CanvasRenderingContext2D) => void;
}

export class Animator extends BaseCanvas {
  width: number;
  height: number;
  children: AnimateChild[];

  constructor({
    width = 600,
    height = 600,
    children = [],
    context = null
  } = {}) {
    super(context);
    this.width = width;
    this.height = height;
    this.children = children;
  }

  start() {
    const _animate = (time = 0) => {
      this.children.map(child => {
        child.animate(time);
      });

      this.context.clearRect(0, 0, this.width, this.height);
      this.children.map(child => {
        child.paint();
      });

      requestAnimationFrame(_animate);
    };

    requestAnimationFrame(_animate);
  }
}
