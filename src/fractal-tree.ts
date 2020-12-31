import { Instruction } from './interpreter';
import { generate, goto } from './l-system';

const axiom = '0';
const rules = {
  1: '11',
  0: '1[0]0',
};

/**
 * Generate drawing instructions for a binary, fractal tree.
 */
export default function fractalTree(iterations: number): Instruction[] {
  const system = generate(axiom, rules);
  const symbols = goto(system, iterations);
  return symbols.split('').flatMap(getInstructions);
}

function getInstructions(char: string): Instruction[] {
  switch (char) {
    case '0':
      return [Instruction.DrawLeaf];
    case '1':
      return [Instruction.DrawLine];
    case '[':
      return [Instruction.PushPosition, Instruction.PushAngle, Instruction.TurnLeft];
    case ']':
      return [Instruction.PopPosition, Instruction.PopAngle, Instruction.TurnRight];
    default:
      return [Instruction.Noop];
  }
}
