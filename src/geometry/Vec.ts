export default class Vec {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(other: Vec): Vec {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  subtract(other: Vec): Vec {
    return new Vec(this.x - other.x, this.y - other.y);
  }
}
