import { DrawInstruction } from './draw/instructions';
import { SystemInstruction } from './system/instructions';
import interpret from './interpreter';

test('converting system to canvas instructions', () => {
  const systemInstructions = [
    SystemInstruction.DrawLine,
    SystemInstruction.TurnLeft,
    SystemInstruction.DrawLine,
  ];
  const drawInstructions = interpret(systemInstructions);
  expect(drawInstructions).toEqual([
    DrawInstruction.Line,
    DrawInstruction.Line,
  ]);
});
