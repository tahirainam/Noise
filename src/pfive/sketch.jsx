import { useRef, useEffect } from "react";

function Sketch() {
  const sketchRef = useRef();
  const p5InstanceRef = useRef(null);

  useEffect(() => {
    if (p5InstanceRef.current) return;

    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(1000, 520);
        p.frameRate(30);
      };
      p.draw = () => {
        p.noFill();
        p.stroke(0);
        p.circle(p.random(p.width), p.random(p.height), 5, 5);
      };
    };

    p5InstanceRef.current = new window.p5(sketch, sketchRef.current);

    return () => {
      p5InstanceRef.current.remove();
      p5InstanceRef.current = null;
    };
  }, []);

  return (
    <div className="flex flex-col">
      <a className="w-25 mb-1 px-2 bg-black text-white" href="https://www.google.com" target="_blank" rel="noopener noreferrer">
        sketch-read
      </a>
      <div className="border-2 border-black" ref={sketchRef}></div>
    </div>
  );
}

export default Sketch;