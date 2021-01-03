import { convertCoordinates } from './canvas';
import Vec from '../geometry/Vec';

test('converting coordinates', () => {
  const pointInNormalCoordinateSystem = new Vec(10, 20);
  const fakeCanvasContext = { canvas: { height: 400, width: 600 } } as CanvasRenderingContext2D;
  const pointInCanvasCoordinateSystem = convertCoordinates(pointInNormalCoordinateSystem, fakeCanvasContext);
  expect(pointInCanvasCoordinateSystem.x).toEqual(310);
  expect(pointInCanvasCoordinateSystem.y).toEqual(180);
});
