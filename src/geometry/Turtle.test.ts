import Angle from './Angle';
import Vec from './Vec';
import Turtle from './Turtle';

describe('cardinal directions', () => {
  test('east', () => {
    const mertle = new Turtle(Angle.fromDegrees(0), new Vec(0, 0));
    const position = mertle.moveForward(10);
    expect(position.x).toBeCloseTo(10, 3);
    expect(position.y).toBeCloseTo(0, 3);
  });

  test('north', () => {
    const mertle = new Turtle(Angle.fromDegrees(90), new Vec(0, 0));
    const position = mertle.moveForward(10);
    expect(position.x).toBeCloseTo(0, 3);
    expect(position.y).toBeCloseTo(10, 3);
  });

  test('west', () => {
    const mertle = new Turtle(Angle.fromDegrees(180), new Vec(0, 0));
    const position = mertle.moveForward(10);
    expect(position.x).toBeCloseTo(-10, 3);
    expect(position.y).toBeCloseTo(0, 3);
  });

  test('south', () => {
    const mertle = new Turtle(Angle.fromDegrees(270), new Vec(0, 0));
    const position = mertle.moveForward(10);
    expect(position.x).toBeCloseTo(0, 3);
    expect(position.y).toBeCloseTo(-10, 3);
  });
});

describe('45 degree angles', () => {
  test('north east', () => {
    const mertle = new Turtle(Angle.fromDegrees(45), new Vec(0, 0));
    const position = mertle.moveForward(10);
    expect(position.x).toBeCloseTo(7.071, 3);
    expect(position.y).toBeCloseTo(7.071, 3);
  });

  test('north west', () => {
    const mertle = new Turtle(Angle.fromDegrees(135), new Vec(0, 0));
    const position = mertle.moveForward(10);
    expect(position.x).toBeCloseTo(-7.071, 3);
    expect(position.y).toBeCloseTo(7.071, 3);
  });

  test('south west', () => {
    const mertle = new Turtle(Angle.fromDegrees(225), new Vec(0, 0));
    const position = mertle.moveForward(10);
    expect(position.x).toBeCloseTo(-7.071, 3);
    expect(position.y).toBeCloseTo(-7.071, 3);
  });

  test('south east', () => {
    const mertle = new Turtle(Angle.fromDegrees(315), new Vec(0, 0));
    const position = mertle.moveForward(10);
    expect(position.x).toBeCloseTo(7.071, 3);
    expect(position.y).toBeCloseTo(-7.071, 3);
  });
});

describe('multiple operations', () => {
  test('turn, move', () => {
    const mertle = new Turtle(Angle.fromDegrees(90), new Vec(0, 0));

    const position1 = mertle.turnRight(Angle.fromDegrees(30));
    expect(position1.x).toBeCloseTo(0, 3);
    expect(position1.y).toBeCloseTo(0, 3);

    const position2 = mertle.moveForward(12);
    expect(position2.x).toBeCloseTo(6, 3);
    expect(position2.y).toBeCloseTo(10.392, 3);
  });

  test('move, turn, move, turn, move', () => {
    const mertle = new Turtle(Angle.fromDegrees(90), new Vec(0, 0));

    const position1 = mertle.moveForward(10);
    expect(position1.x).toBeCloseTo(0, 3);
    expect(position1.y).toBeCloseTo(10, 3);

    const position2 = mertle.turnLeft(Angle.fromDegrees(30));
    expect(position2.x).toBeCloseTo(0, 3);
    expect(position2.y).toBeCloseTo(10, 3);

    const position3 = mertle.moveForward(10);
    expect(position3.x).toBeCloseTo(-5, 3);
    expect(position3.y).toBeCloseTo(18.66, 3);

    const position4 = mertle.turnRight(Angle.fromDegrees(30));
    expect(position4.x).toBeCloseTo(-5, 3);
    expect(position4.y).toBeCloseTo(18.66, 3);
  });
});
