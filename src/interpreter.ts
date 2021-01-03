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
 *
 * These lines are in a different coordinate system than the HTML canvas element uses, and will
 * need to be converted before drawing.
 */
export default function interpret(systemInstructions: Instruction[], context: Context): Line[] {
  const output: Line[] = [];
  const turtle = new Turtle(context.startAngle, context.startPosition);
  const angleStack: Angle[] = [];
  const positionStack: Vec[] = [];
  let currentPosition = context.startPosition;

  // Convert an instruction into one or more lines. This is a state machine, since the instructions
  // can be statefull.
  for (let instruction of systemInstructions) {
    switch (instruction) {
      case Instruction.DrawLeaf: {
        const originalAngle = turtle.angle;
        const leafLength = context.segmentLength / 2;

        // Line 1.
        turtle.turnLeft(context.turnAngle);
        const end1 = turtle.moveForward(leafLength);
        output.push(new Line(currentPosition, end1));

        // Line 2.
        turtle.gotoAngle(originalAngle);
        turtle.gotoPosition(currentPosition);
        const end2 = turtle.moveForward(leafLength);
        output.push(new Line(currentPosition, end2));

        // Line 3.
        turtle.gotoAngle(originalAngle);
        turtle.gotoPosition(currentPosition);
        turtle.turnRight(context.turnAngle);
        const end3 = turtle.moveForward(leafLength);
        output.push(new Line(currentPosition, end3));

        // Restore original location.
        turtle.gotoAngle(originalAngle);
        turtle.gotoPosition(currentPosition);
        break;
      }
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
