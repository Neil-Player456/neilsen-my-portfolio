import React, { useEffect, useRef } from "react";

const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = document.body.scrollHeight;

    
    const layers = [
      { num: 150, speed: 0.2, size: 1.0, stars: [] }, // far stars
      { num: 100, speed: 0.5, size: 1.5, stars: [] }, // middle stars
      { num: 50, speed: 1.0, size: 2.0, stars: [] },  // near stars
    ];

    
    layers.forEach(layer => {
      for (let i = 0; i < layer.num; i++) {
        layer.stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * layer.size + 0.2,
          twinkle: Math.random() * Math.PI * 2
        });
      }
    });

    const draw = () => {
      
      ctx.fillStyle = "#0b0f1a";
      ctx.fillRect(0, 0, w, h);

      
      const nebula1 = ctx.createRadialGradient(w*0.3, h*0.3, 0, w*0.3, h*0.3, w*0.7);
      nebula1.addColorStop(0, "rgba(255,100,200,0.05)");
      nebula1.addColorStop(1, "transparent");
      ctx.fillStyle = nebula1;
      ctx.fillRect(0, 0, w, h);

      const nebula2 = ctx.createRadialGradient(w*0.8, h*0.7, 0, w*0.8, h*0.7, w*0.6);
      nebula2.addColorStop(0, "rgba(100,200,255,0.05)");
      nebula2.addColorStop(1, "transparent");
      ctx.fillStyle = nebula2;
      ctx.fillRect(0, 0, w, h);

      
      layers.forEach(layer => {
        layer.stars.forEach(star => {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.r, 0, Math.PI*2);
          const opacity = 0.5 + 0.5 * Math.sin(Date.now()/500 + star.twinkle);
          ctx.fillStyle = `rgba(255,255,255,${opacity})`;
          ctx.shadowBlur = 2;
          ctx.shadowColor = "#fff";
          ctx.fill();

        
          star.y += layer.speed;
          if (star.y > h) star.y = 0;
        });
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = document.body.scrollHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="starfield-canvas"></canvas>;
};

export default Starfield;