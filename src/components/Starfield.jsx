import { useEffect, useRef } from "react";

const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    
    const layers = [
      { count: 150, speed: 0.2, size: 1 },
      { count: 100, speed: 0.4, size: 1.5 },
      { count: 60, speed: 0.7, size: 2 },
    ];

    
    const stars = layers.map(layer =>
      Array.from({ length: layer.count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * layer.size + 0.2,
        speed: layer.speed,
        drift: (Math.random() - 0.5) * 0.15, 
        phase: Math.random() * Math.PI * 2,   
      }))
    );

    const draw = () => {
      
      ctx.fillStyle = "#0b0f1a";
      ctx.fillRect(0, 0, width, height);

      
      const nebula = ctx.createRadialGradient(
        width * 0.3,
        height * 0.3,
        0,
        width * 0.3,
        height * 0.3,
        width * 0.7
      );
      nebula.addColorStop(0, "rgba(180,100,255,0.08)");
      nebula.addColorStop(1, "transparent");
      ctx.fillStyle = nebula;
      ctx.fillRect(0, 0, width, height);

      
      stars.forEach(layer =>
        layer.forEach(star => {
          star.y += star.speed;
          star.x += star.drift;

        
          if (star.y > height) star.y = 0;
          if (star.x > width) star.x = 0;
          if (star.x < 0) star.x = width;

          const alpha = 0.5 + 0.5 * Math.sin(Date.now() / 600 + star.phase);

          ctx.beginPath();
          ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${alpha})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = "#fff";
          ctx.fill();
        })
      );

      requestAnimationFrame(draw);
    };

    draw();

    
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="starfield-canvas" />;
};

export default Starfield;