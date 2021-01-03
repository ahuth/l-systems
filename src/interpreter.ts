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
  const angleStack: Angle[] = [];
  const positionStack: Vec[] = [];
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
      case Instruction.PopAngle: {
        const previousAngle = angleStack.pop();
        if (previousAngle) {
          turtle.gotoAngle(previousAngle);
        }
        break;
      }
      case Instruction.PopPosition: {
        const previousPosition = positionStack.pop();
        if (previousPosition) {
          currentPosition = previousPosition;
          turtle.gotoPosition(previousPosition);
        }
        break;
      }
      case Instruction.PushAngle:
        angleStack.push(turtle.angle);
        break;
      case Instruction.PushPosition:
        positionStack.push(turtle.position);
        break;
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
