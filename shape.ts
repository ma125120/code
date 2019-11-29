import Vector from "./vector";
import { Projection, Point } from "./vector";

class Shape {
  x: number;
  y: number;
  fillStyle = "#000";
  strokeStyle = "#000";

  constructor(x?, y?) {
    this.x = x;
    this.y = y;
  }

  collidesWith(otherShape: Shape) {
    const axes = this.getAxes().concat(otherShape.getAxes());
    return !this.separationOnAxes(axes, otherShape);
  }
  separationOnAxes(axes, otherShape: Shape) {
    for (let i = 0; i < axes.length; ++i) {
      let axis = axes[i];
      let projection1 = otherShape.project(axis);
      let projection2 = this.project(axis);
      if (!projection1.overlaps(projection2)) {
        return true;
      }
    }

    return false;
  }
  getAxes() {
    return [];
  }
  project(axis): Projection {
    return null;
  }
  move(dx: number, dy: number): void {
    throw new Error("未实现move方法");
  }
  createPath(context: CanvasRenderingContext2D) {
    throw new Error("未实现 createPath 方法");
  }
  fill(context: CanvasRenderingContext2D) {
    context.save();
    context.fillStyle = this.fillStyle;
    this.createPath(context);
    context.fill();
    context.restore();
  }
  stroke(context: CanvasRenderingContext2D) {
    context.save();
    context.strokeStyle = this.strokeStyle;
    this.createPath(context);
    context.stroke();
    context.restore();
  }

  isPointInPath(context: CanvasRenderingContext2D, x: number, y: number) {
    this.createPath(context);
    return context.isPointInPath(x, y);
  }
}

class Polygon extends Shape {
  points: Point[] = [];
  constructor(points = []) {
    super();
    this.points = points;
  }

  project(axis) {
    let scalars = [],
      v = new Vector();

    this.points.forEach(point => {
      v.x = point.x;
      v.y = point.y;
      scalars.push(v.dotProduct(axis));
    });

    return new Projection(Math.min(...scalars), Math.max(...scalars));
  }

  getAxes(): Vector[] {
    let v1 = new Vector(),
      v2 = new Vector(),
      axes = [];

    for (let i = 0; i < this.points.length - 1; i++) {
      v1.x = this.points[i].x;
      v1.y = this.points[i].y;

      v2.x = this.points[i + 1].x;
      v2.y = this.points[i + 1].y;

      axes.push(v1.edge(v2).normal());
    }

    return axes;
  }

  addPoint(x, y) {
    this.points.push(new Point(x, y));
  }

  createPath(context: CanvasRenderingContext2D) {
    if (this.points.length === 0) {
      return;
    }

    context.beginPath();
    context.moveTo(this.points[0].x, this.points[0].y);

    for (let i = 0; i < this.points.length; ++i) {
      context.lineTo(this.points[i].x, this.points[i].y);
    }

    context.closePath();
  }

  move(dx: number, dy: number): void {
    for (let i = 0; i < this.points.length; ++i) {
      let point = this.points[i];
      point.x += dx;
      point.y += dy;
    }
  }
}

class Circle extends Shape {
  x: number;
  y: number;
  radius: number;
  constructor(x?, y?, radius?) {
    super();
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  collidesWith(shape: Polygon & Circle) {
    let distance,
      axes = shape.getAxes();

    if (axes === undefined) {
      // Circle
      distance = Math.sqrt(
        Math.pow(shape.x - this.x, 2) + Math.pow(shape.y - this.y, 2)
      );

      return distance < Math.abs(this.radius + shape.radius);
    } else {
      // Polygon
      return polygonCollidesWithCircle(shape, this);
    }
  }

  getAxes() {
    return undefined;
  }

  project(axis) {
    let scalars = [],
      point = new Point(this.x, this.y),
      dotProduct = new Vector(point).dotProduct(axis);

    scalars.push(dotProduct);
    scalars.push(dotProduct + this.radius);
    scalars.push(dotProduct - this.radius);

    return new Projection(Math.min(...scalars), Math.max(...scalars));
  }

  move(dx?, dy?) {
    this.x += dx;
    this.y += dy;
  }

  createPath(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  }
}

function getPolygonPointClosestToCircle(
  polygon: Polygon,
  circle: Circle
): Vector {
  let min = 10000,
    length,
    testPoint,
    closestPoint;

  for (let i = 0; i < polygon.points.length; ++i) {
    testPoint = polygon.points[i];

    length = Math.sqrt(
      Math.pow(testPoint.x - circle.x, 2) + Math.pow(testPoint.y - circle.y, 2)
    );

    if (length < min) {
      min = length;
      closestPoint = testPoint;
    }
  }

  return closestPoint;
}

function polygonCollidesWithCircle(polygon: Polygon, circle: Circle) {
  let min = 10000,
    v1: Vector,
    v2: Vector,
    axes = polygon.getAxes(),
    closestPoint = getPolygonPointClosestToCircle(polygon, circle);

  v1 = new Vector(new Point(circle.x, circle.y));
  v2 = new Vector(new Point(closestPoint.x, closestPoint.y));

  axes.push(v1.subtract(v2).normalize());

  return !polygon.separationOnAxes(axes, circle);
}
