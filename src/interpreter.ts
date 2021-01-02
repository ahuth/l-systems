import { DrawInstruction } from './draw/instructions';
import { SystemInstruction } from './system/instructions';

/**
 * Covnert a sequence of system instructions into the corresponding canvas drawing instructions.
 */
export default function interpret(systemInstructions: SystemInstruction[]): DrawInstruction[] {
  const output: DrawInstruction[] = [];

  for (let instruction of systemInstructions) {
    switch (instruction) {
      case SystemInstruction.DrawLine:
        output.push(DrawInstruction.Line);
        break;
      default:
        continue;
    }
  }

  return output;
}
