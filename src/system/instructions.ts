/**
 * L-system drawing instructions.
 */
export enum Instruction {
  DrawLeaf,
  DrawLine,
  Noop,
  PopAngle,
  PopPosition,
  PushAngle,
  PushPosition,
  TurnLeft,
  TurnRight,
}
