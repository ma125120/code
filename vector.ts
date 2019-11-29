export default class Vector {
  x: number;
  y: number;

  constructor(x?, y?) {
    this.x = x;
    this.y = y;
  }

  // 获取向量大小
  getMagnitude() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
  // 加法
  add(vector) {
    let v = new Vector();
    v.x = this.x + vector.x;
    v.y = this.y + vector.y;
    return v;
  }
  // 减法
  subtract(vector) {
    let v = new Vector();
    v.x = this.x - vector.x;
    v.y = this.y - vector.y;
    return v;
  }
  // 点乘积
  dotProduct(vector) {
    return this.x * vector.x + this.y * vector.y;
  }
  // 边缘
  edge(vector) {
    return this.subtract(vector);
  }
  // 垂直变量，与该点垂直的变量
  perpendicular() {
    let v = new Vector();
    v.x = this.y;
    v.y = 0 - this.x;
    return v;
  }
  // 正规化
  normalize() {
    let v = new Vector(0, 0),
      m = this.getMagnitude();

    if (m !== 0) {
      v.x = this.x / m;
      v.y = this.y / m;
    }

    return v;
  }
  // 正规化之后的垂直变量
  normal() {
    return this.perpendicular().normalize();
  }
}
// 投影
export class Projection {
  min: number;
  max: number;

  constructor(min?, max?) {
    this.min = min;
    this.max = max;
  }
  // 是否重叠
  overlaps(projection) {
    return this.max > projection.min && projection.max > this.min;
  }
}

export class Point {
  x: number;
  y: number;

  constructor(x?, y?) {
    this.x = x;
    this.y = y;
  }
}
