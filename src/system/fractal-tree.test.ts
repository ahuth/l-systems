import fractalTree from './fractal-tree';
import { SystemInstruction } from './instructions';

test('generating instructions', () => {
  const instructions = fractalTree(1);
  // 11[1[0]0]1[0]0
  expect(instructions).toEqual([
    // 1
    SystemInstruction.DrawLine,
    // 1
    SystemInstruction.DrawLine,
    // [
    SystemInstruction.PushPosition,
    SystemInstruction.PushAngle,
    SystemInstruction.TurnLeft,
    // 1
    SystemInstruction.DrawLine,
    // [
    SystemInstruction.PushPosition,
    SystemInstruction.PushAngle,
    SystemInstruction.TurnLeft,
    // 0
    SystemInstruction.DrawLeaf,
    // ]
    SystemInstruction.PopPosition,
    SystemInstruction.PopAngle,
    SystemInstruction.TurnRight,
    // 0
    SystemInstruction.DrawLeaf,
    // ]
    SystemInstruction.PopPosition,
    SystemInstruction.PopAngle,
    SystemInstruction.TurnRight,
    // 1
    SystemInstruction.DrawLine,
    // [
    SystemInstruction.PushPosition,
    SystemInstruction.PushAngle,
    SystemInstruction.TurnLeft,
    // 0
    SystemInstruction.DrawLeaf,
    // ]
    SystemInstruction.PopPosition,
    SystemInstruction.PopAngle,
    SystemInstruction.TurnRight,
    // 0
    SystemInstruction.DrawLeaf,
  ]);
});
