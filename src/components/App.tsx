import { useRef, useState } from 'react';
import { clear, drawLines } from '../draw/canvas';
import Angle from '../geometry/Angle';
import Vec from '../geometry/Vec';
import fractalTree from '../system/fractal-tree';
import interpret from '../interpreter';

export default function App() {
  const [angle, setAngle] = useState(45);
  const [iterations, setIterations] = useState(7);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function handleClick() {
    if (canvasRef.current) {
      const instructions = fractalTree(iterations);
      const lines = interpret(instructions, {
        segmentLength: 2,
        startAngle: Angle.fromDegrees(90),
        startPosition: new Vec(0, -300),
        turnAngle: Angle.fromDegrees(angle),
      });
      const context = canvasRef.current.getContext('2d')!;
      clear(context);
      drawLines(lines, context);
    }
  }

  return (
    <>
      <header>
        <div>
          <label htmlFor="angle">Angle</label>
          <input id="angle" type="range" min="10" max="60" value={angle} onChange={(event) => setAngle(Number(event.target.value))} />
          <span>{angle}</span>
        </div>
        <div>
          <label htmlFor="iterations">Iterations</label>
          <input id="iterations" type="range" min="1" max="20" value={iterations} onChange={(event) => setIterations(Number(event.target.value))} />
          <span>{iterations}</span>
        </div>
        <button onClick={handleClick}>Draw</button>
      </header>
      <main>
        <canvas ref={canvasRef} height="600" width="600" />
      </main>
    </>
  );
}
