import Line from '../geometry/Line';
import Vec from '../geometry/Vec';

/**
 * Completely clear the canvas.
 */
export function clear(context: CanvasRenderingContext2D): void {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}

/**
 * Draw a list of lines.
 */
export function drawLines(lines: Line[], context: CanvasRenderingContext2D): void {
  lines.forEach((line) => drawLine(line, context));
}

/**
 * Draw a single line.
 */
export function drawLine(line: Line, context: CanvasRenderingContext2D): void {
  const from = convertCoordinates(line.from, context);
  const to = convertCoordinates(line.to, context);
  context.beginPath();
  context.moveTo(from.x, from.y);
  context.lineTo(to.x, to.y);
  context.fill();
}

/**
 * Convert "normal" coordinates into the coordinate system used by the HTML canvas element.
 *
 * "Normal" coordinates are how we (I) usually think of a coordainte system:
 * - The origin is in the center
 * - The x axis increases to the right
 * - The y axis increases going up
 *
 * The HTML canvas element uses a different system, where
 * - The origin is in the upper left
 * - The x axis increases to the right (as it does in the "normal" one)
 * - The y axis  increases going down.
 */
export function convertCoordinates(point: Vec, context: CanvasRenderingContext2D): Vec {
  return new Vec(
    point.x + (context.canvas.width / 2),
    -point.y + (context.canvas.height / 2),
  );
}
