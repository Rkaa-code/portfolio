"use client";

import { useEffect, useRef } from "react";

type AuroraProps = {
  colorStops?: string[];
};

const Aurora: React.FC<AuroraProps> = ({
  colorStops = ["#9022FF", "#189CFA", "#00DBFF"],
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    let t = 0;

    const draw = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      colorStops.forEach((color, i) => {
        gradient.addColorStop(i / (colorStops.length - 1), color);
      });

      ctx.globalAlpha = 0.4 + Math.sin(t) * 0.1;
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      t += 0.01;
      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [colorStops]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
};

export default Aurora;
