import Angle from './geometry/Angle';
import Vec from './geometry/Vec';
import { Instruction } from './system/instructions';
import interpret from './interpreter';

test('converting instructions to lines', () => {
  const instructions = [
    Instruction.DrawLine,
    Instruction.TurnLeft,
    Instruction.DrawLine,
  ];

  const lines = interpret(instructions, {
    segmentLength: 25,
    startAngle: Angle.fromDegrees(90),
    startPosition: new Vec(0, 0),
    turnAngle: Angle.fromDegrees(45),
  });

  expect(lines.length).toEqual(2);

  expect(lines[0].from.x).toBeCloseTo(0, 3);
  expect(lines[0].from.y).toBeCloseTo(0, 3);
  expect(lines[0].to.x).toBeCloseTo(0, 3);
  expect(lines[0].to.y).toBeCloseTo(25, 3);

  expect(lines[1].from.x).toBeCloseTo(0, 3);
  expect(lines[1].from.y).toBeCloseTo(25, 3);
  expect(lines[1].to.x).toBeCloseTo(-17.678, 3);
  expect(lines[1].to.y).toBeCloseTo(42.678, 3);
});

test('pushing and popping positions', () => {
  const instructions = [
    Instruction.PushPosition,
    Instruction.DrawLine,
    Instruction.PopPosition,
    Instruction.TurnRight,
    Instruction.DrawLine,
  ];

  const lines = interpret(instructions, {
    segmentLength: 25,
    startAngle: Angle.fromDegrees(90),
    startPosition: new Vec(0, 0),
    turnAngle: Angle.fromDegrees(90),
  });

  expect(lines.length).toEqual(2);

  expect(lines[0].from.x).toBeCloseTo(0, 3);
  expect(lines[0].from.y).toBeCloseTo(0, 3);
  expect(lines[0].to.x).toBeCloseTo(0, 3);
  expect(lines[0].to.y).toBeCloseTo(25, 3);

  expect(lines[1].from.x).toBeCloseTo(0, 3);
  expect(lines[1].from.y).toBeCloseTo(0, 3);
  expect(lines[1].to.x).toBeCloseTo(25, 3);
  expect(lines[1].to.y).toBeCloseTo(0, 3);
});

test('drawing leafs', () => {
  const instructions = [
    Instruction.DrawLeaf,
  ];

  const lines = interpret(instructions, {
    segmentLength: 20,
    startAngle: Angle.fromDegrees(90),
    startPosition: new Vec(0, 0),
    turnAngle: Angle.fromDegrees(45),
  });

  expect(lines.length).toEqual(3);

  expect(lines[0].from.x).toBeCloseTo(0, 3);
  expect(lines[0].from.y).toBeCloseTo(0, 3);
  expect(lines[0].to.x).toBeCloseTo(-7.071, 3);
  expect(lines[0].to.y).toBeCloseTo(7.071, 3);

  expect(lines[1].from.x).toBeCloseTo(0, 3);
  expect(lines[1].from.y).toBeCloseTo(0, 3);
  expect(lines[1].to.x).toBeCloseTo(0, 3);
  expect(lines[1].to.y).toBeCloseTo(10, 3);

  expect(lines[2].from.x).toBeCloseTo(0, 3);
  expect(lines[2].from.y).toBeCloseTo(0, 3);
  expect(lines[2].to.x).toBeCloseTo(7.071, 3);
  expect(lines[2].to.y).toBeCloseTo(7.071, 3);
});
