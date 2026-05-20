import React, { useRef, useEffect } from "react";
import p5 from "p5";

const Sketch = () => {
  const sketchRef = useRef();

  useEffect(() => {
    // Define the p5 sketch
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(1000, 280);
        p.frameRate(30);
      };

      p.draw = () => {
        p.noFill();
        p.stroke(0);
        p.circle(p.random(p.width), p.random(p.height), 5, 5);
      };
    };

    let p5Instance;

    // Small delay prevents StrictMode double-mount race condition
    const timer = setTimeout(() => {
      p5Instance = new p5(sketch, sketchRef.current);
    }, 0);

    // Cleanup on unmount
    return () => {
      clearTimeout(timer);
      if (p5Instance) p5Instance.remove();
    };
  }, []);

  return (
    <div className="flex flex-col">
      <a
        className="w-25 mb-1 px-2 bg-black text-white"
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        sketch-read
      </a>
      <div className="border-2 border-black" ref={sketchRef}></div>
    </div>
  );
};

export default Sketch;
