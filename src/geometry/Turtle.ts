import Angle from './Angle';
import Vec from './Vec';

/**
 * This "turtle" keeps track of its position on an infinite plane through a series of rotations and
 * movements.
 *
 * Unlike the HTML canvas element's coordinate system, the coordinate system here is more
 * "standarcd". The x axis increases to the right, and the y axis increases going up.
 *
 *   x
 *   ┃
 *   ┃
 * ↑ ┃
 *   ┃
 * 0 ┗━━━━━━━━━━━ y
 *   0    →
 *
 * As far as angles go, 0 degrees points straight to the right, and 90 degrees straight up.
 */
export default class Turtle {
  angle: Angle;
  position: Vec;

  constructor(angle: Angle, position: Vec) {
    this.angle = angle;
    this.position = position;
  }

  gotoAngle(angle: Angle): Vec {
    this.angle = angle;
    return this.position;
  }

  gotoPosition(position: Vec): Vec {
    this.position = position;
    return position;
  }

  turnRight(angle: Angle): Vec {
    this.angle = this.angle.subtract(angle);
    return this.position;
  }

  turnLeft(angle: Angle): Vec {
    this.angle = this.angle.add(angle);
    return this.position;
  }

  moveForward(distance: number): Vec {
    const positionChange = new Vec(
      Math.cos(this.angle.radians) * distance,
      Math.sin(this.angle.radians) * distance,
    );
    this.position = this.position.add(positionChange);
    return this.position;
  }
}
