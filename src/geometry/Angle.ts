export default class Angle {
  radians: number;

  static fromDegrees(degrees: number) {
    return new Angle(degrees * Math.PI / 180);
  }

  constructor(radians: number) {
    this.radians = radians;
  }

  get degrees() {
    return this.radians * 180 / Math.PI;
  }

  subtract(other: Angle) {
    return new Angle(this.radians - other.radians);
  }

  add(other: Angle) {
    return new Angle(this.radians + other.radians);
  }
}
