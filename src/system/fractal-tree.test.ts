import fractalTree from './fractal-tree';
import { Instruction } from './instructions';

test('generating instructions', () => {
  const instructions = fractalTree(1);
  // 11[1[0]0]1[0]0
  expect(instructions).toEqual([
    // 1
    Instruction.DrawLine,
    // 1
    Instruction.DrawLine,
    // [
    Instruction.PushPosition,
    Instruction.PushAngle,
    Instruction.TurnLeft,
    // 1
    Instruction.DrawLine,
    // [
    Instruction.PushPosition,
    Instruction.PushAngle,
    Instruction.TurnLeft,
    // 0
    Instruction.DrawLeaf,
    // ]
    Instruction.PopPosition,
    Instruction.PopAngle,
    Instruction.TurnRight,
    // 0
    Instruction.DrawLeaf,
    // ]
    Instruction.PopPosition,
    Instruction.PopAngle,
    Instruction.TurnRight,
    // 1
    Instruction.DrawLine,
    // [
    Instruction.PushPosition,
    Instruction.PushAngle,
    Instruction.TurnLeft,
    // 0
    Instruction.DrawLeaf,
    // ]
    Instruction.PopPosition,
    Instruction.PopAngle,
    Instruction.TurnRight,
    // 0
    Instruction.DrawLeaf,
  ]);
});
