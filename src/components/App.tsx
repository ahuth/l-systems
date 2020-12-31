import { useRef, useState } from 'react';

export default function App() {
  const [angle, setAngle] = useState(45);
  const [iterations, setIterations] = useState(1);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
      </header>
      <main>
        <canvas ref={canvasRef} style={styles.canvas} />
      </main>
    </>
  );
}

const styles = {
  canvas: {
    height: 600,
    width: 600,
  },
}
