"use client";
import { useEffect, useRef } from "react";

export default function BackgroundFlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handles Retina/High-DPI screens so the particles aren't blurry
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);

    const particles: Particle[] = [];
    const numParticles = Math.floor((width * height) / 15000); // density

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.maxLife = Math.random() * 100 + 50;
        this.life = this.maxLife;
        this.size = Math.random() * 1.5 + 0.5;
        // Thermal colors: deep orange to subtle blue
        this.color = Math.random() > 0.8 ? "rgba(0, 210, 255, 0.5)" : "rgba(255, 90, 0, 0.5)";
      }

      update() {
        // Flow field logic (pseudo-perlin noise effect)
        let angle = (this.x * 0.005) + (this.y * 0.005);
        this.vx += Math.cos(angle) * 0.05;
        this.vy += Math.sin(angle) * 0.05;

        // Friction
        this.vx *= 0.98;
        this.vy *= 0.98;

        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height || this.life <= 0) {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.vx = 0;
          this.vy = 0;
          this.life = this.maxLife;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    let animationFrameId: number;

    const render = () => {
      // Trails effect (clears the canvas with a slight opacity)
      ctx.fillStyle = "rgba(5, 5, 5, 0.15)"; 
      ctx.fillRect(0, 0, width, height);

      // Use additive blending to make overlapping particles glow
      ctx.globalCompositeOperation = "screen";

      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      
      ctx.globalCompositeOperation = "source-over"; // Reset for the background clear

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        // 👉 fixed, -z-50, and pointer-events-none makes it a perfect global background
        className="pointer-events-none fixed inset-0 -z-50 h-full w-full opacity-60"
        aria-hidden="true"
      />
      
      {/* Vignette overlay to ensure text is always readable over the bright particles */}
      <div 
        className="pointer-events-none fixed inset-0 -z-40 h-full w-full"
        style={{
          background: "radial-gradient(circle at 50% 30%, rgba(5,5,5,0.85) 0%, rgba(5,5,5,0.4) 60%, transparent 100%)"
        }}
      />
    </>
  );
}