import React, { useEffect, useRef } from "react";


const Header = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    const numStars = 300;
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.2,
        d: Math.random() * 0.5,
        twinkle: Math.random()
      });
    }

    const draw = () => {
      ctx.fillStyle = "#0b0f1a";
      ctx.fillRect(0, 0, w, h);


      const nebula1 = ctx.createRadialGradient(w * 0.3, h * 0.3, 0, w * 0.3, h * 0.3, w * 0.7);
      nebula1.addColorStop(0, "rgba(255,100,200,0.1)");
      nebula1.addColorStop(1, "transparent");
      ctx.fillStyle = nebula1;
      ctx.fillRect(0, 0, w, h);

      const nebula2 = ctx.createRadialGradient(w * 0.8, h * 0.7, 0, w * 0.8, h * 0.7, w * 0.6);
      nebula2.addColorStop(0, "rgba(100,200,255,0.1)");
      nebula2.addColorStop(1, "transparent");
      ctx.fillStyle = nebula2;
      ctx.fillRect(0, 0, w, h);


      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.5 + 0.5 * Math.sin(Date.now() / 500 + star.twinkle * 10)})`;
        ctx.shadowBlur = 2;
        ctx.shadowColor = "#fff";
        ctx.fill();

        // Move stars
        star.y += star.d;
        if (star.y > h) star.y = 0;
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <canvas ref={canvasRef} className="header-canvas"></canvas>

      <div className="header-content">
        <h1 className="header-name">Hi, I'm Neilsen</h1>
        <h2 className="header-title">Versatile and mission-driven Software Developer</h2>
        <a href="#about" className="header-button">About Me</a>
      </div>
    </header>
  );
};

export default Header;