import { useEffect, useRef } from "react";
import { useTheme } from "@/hooks/useTheme";

const AnimatedBackground3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // 3D wave parameters
    const waves: { x: number; y: number; radius: number; speed: number; opacity: number }[] = [];
    
    // Create floating orbs
    for (let i = 0; i < 6; i++) {
      waves.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 150 + Math.random() * 200,
        speed: 0.002 + Math.random() * 0.003,
        opacity: 0.03 + Math.random() * 0.05
      });
    }

    const draw = () => {
      time += 0.01;
      
      // Clear with gradient
      const isDark = theme === "dark";
      
      // Create dynamic gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      
      if (isDark) {
        gradient.addColorStop(0, "hsl(222, 47%, 11%)");
        gradient.addColorStop(0.5, "hsl(220, 40%, 13%)");
        gradient.addColorStop(1, "hsl(222, 47%, 11%)");
      } else {
        gradient.addColorStop(0, "hsl(210, 60%, 98%)");
        gradient.addColorStop(0.5, "hsl(200, 50%, 95%)");
        gradient.addColorStop(1, "hsl(210, 60%, 98%)");
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw floating 3D-like orbs
      waves.forEach((wave, index) => {
        // Animate position
        wave.x += Math.sin(time * wave.speed * 100 + index) * 0.5;
        wave.y += Math.cos(time * wave.speed * 100 + index) * 0.3;

        // Wrap around
        if (wave.x > canvas.width + wave.radius) wave.x = -wave.radius;
        if (wave.x < -wave.radius) wave.x = canvas.width + wave.radius;
        if (wave.y > canvas.height + wave.radius) wave.y = -wave.radius;
        if (wave.y < -wave.radius) wave.y = canvas.height + wave.radius;

        // Draw glowing orb with 3D effect
        const orbGradient = ctx.createRadialGradient(
          wave.x - wave.radius * 0.2,
          wave.y - wave.radius * 0.2,
          0,
          wave.x,
          wave.y,
          wave.radius
        );

        if (isDark) {
          orbGradient.addColorStop(0, `hsla(198, 93%, 59%, ${wave.opacity * 2})`);
          orbGradient.addColorStop(0.3, `hsla(200, 80%, 50%, ${wave.opacity})`);
          orbGradient.addColorStop(0.7, `hsla(220, 70%, 40%, ${wave.opacity * 0.5})`);
          orbGradient.addColorStop(1, "transparent");
        } else {
          orbGradient.addColorStop(0, `hsla(200, 98%, 60%, ${wave.opacity * 1.5})`);
          orbGradient.addColorStop(0.3, `hsla(200, 80%, 70%, ${wave.opacity})`);
          orbGradient.addColorStop(0.7, `hsla(210, 60%, 80%, ${wave.opacity * 0.5})`);
          orbGradient.addColorStop(1, "transparent");
        }

        ctx.beginPath();
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
        ctx.fillStyle = orbGradient;
        ctx.fill();
      });

      // Draw flowing lines (3D ribbon effect)
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * 0.3 + i * 100);
        
        for (let x = 0; x <= canvas.width; x += 20) {
          const y = canvas.height * 0.3 + i * 100 + 
            Math.sin(x * 0.005 + time + i) * 50 +
            Math.sin(x * 0.01 + time * 1.5 + i * 2) * 30;
          ctx.lineTo(x, y);
        }

        const lineGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        if (isDark) {
          lineGradient.addColorStop(0, "transparent");
          lineGradient.addColorStop(0.3, `hsla(198, 93%, 59%, ${0.08 - i * 0.02})`);
          lineGradient.addColorStop(0.7, `hsla(198, 93%, 59%, ${0.08 - i * 0.02})`);
          lineGradient.addColorStop(1, "transparent");
        } else {
          lineGradient.addColorStop(0, "transparent");
          lineGradient.addColorStop(0.3, `hsla(200, 98%, 50%, ${0.1 - i * 0.02})`);
          lineGradient.addColorStop(0.7, `hsla(200, 98%, 50%, ${0.1 - i * 0.02})`);
          lineGradient.addColorStop(1, "transparent");
        }

        ctx.strokeStyle = lineGradient;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default AnimatedBackground3D;
