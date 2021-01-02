/**
 * L-system drawing instructions.
 */
export enum SystemInstruction {
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
