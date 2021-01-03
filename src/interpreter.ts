import Angle from './geometry/Angle';
import Line from './geometry/Line';
import Turtle from './geometry/Turtle';
import Vec from './geometry/Vec';
import { Instruction } from './system/instructions';

interface Context {
  segmentLength: number,
  startAngle: Angle,
  startPosition: Vec,
  turnAngle: Angle,
}

/**
 * Covnert a sequence of instructions into corresponding lines we can draw to a canvas.
 */
export default function interpret(systemInstructions: Instruction[], context: Context): Line[] {
  const output: Line[] = [];
  const turtle = new Turtle(context.startAngle, context.startPosition);
  let currentPosition = context.startPosition;

  for (let instruction of systemInstructions) {
    switch (instruction) {
      case Instruction.DrawLine: {
        const nextPosition = turtle.moveForward(context.segmentLength);
        const line = new Line(currentPosition, nextPosition);
        output.push(line);
        currentPosition = nextPosition;
        break;
      }
      case Instruction.TurnLeft:
        turtle.turnLeft(context.turnAngle);
        break;
      case Instruction.TurnRight:
        turtle.turnRight(context.turnAngle);
        break;
      default:
        // Noop
    }
  }

  return output;
}
