import { SystemInstruction } from './instructions';
import { generate, goto } from './l-system';

const axiom = '0';
const rules = {
  1: '11',
  0: '1[0]0',
};

/**
 * Generate drawing instructions for a binary, fractal tree.
 */
export default function fractalTree(iterations: number): SystemInstruction[] {
  const system = generate(axiom, rules);
  const symbols = goto(system, iterations);
  return symbols.split('').flatMap(getInstructions);
}

function getInstructions(char: string): SystemInstruction[] {
  switch (char) {
    case '0':
      return [SystemInstruction.DrawLeaf];
    case '1':
      return [SystemInstruction.DrawLine];
    case '[':
      return [SystemInstruction.PushPosition, SystemInstruction.PushAngle, SystemInstruction.TurnLeft];
    case ']':
      return [SystemInstruction.PopPosition, SystemInstruction.PopAngle, SystemInstruction.TurnRight];
    default:
      return [SystemInstruction.Noop];
  }
}
