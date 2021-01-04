import { useRef, useState } from 'react';
import { clear, drawLine } from '../draw/canvas';
import Angle from '../geometry/Angle';
import Line from '../geometry/Line';
import Vec from '../geometry/Vec';
import fractalTree from '../system/fractal-tree';
import interpret from '../interpreter';

export default function App() {
  const [angle, setAngle] = useState(45);
  const [iterations, setIterations] = useState(7);
  const [length, setLength] = useState(2);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function handleClick() {
    if (canvasRef.current) {
      const instructions = fractalTree(iterations);
      const lines = interpret(instructions, {
        segmentLength: length,
        startAngle: Angle.fromDegrees(90),
        startPosition: new Vec(0, -300),
        turnAngle: Angle.fromDegrees(angle),
      });
      const context = canvasRef.current.getContext('2d')!;
      clear(context);
      drawLinesSequentially(lines, context);
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
        <div>
          <label htmlFor="length">Length</label>
          <input id="length" type="range" min="0.1" max="20" step="0.1" value={length} onChange={(event) => setLength(Number(event.target.value))} />
          <span>{length}</span>
        </div>
        <button onClick={handleClick}>Draw</button>
      </header>
      <main>
        <canvas ref={canvasRef} height="600" width="600" />
      </main>
    </>
  );
}

function drawLinesSequentially(lines: Line[], context: CanvasRenderingContext2D): void {
  lines.reduce((acc, line) => {
    return acc.then(() => {
      return new Promise((resolve) => {
        drawLine(line, context);
        setTimeout(() => {
          resolve();
        }, 1);
      });
    });
  }, Promise.resolve());
}
