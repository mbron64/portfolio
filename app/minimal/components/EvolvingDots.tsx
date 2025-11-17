'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  speed: number;
  direction: number; // angle in radians
  color: string;
  lastSpawnTime: number; // cooldown to prevent spam spawning
  curveDirection: number; // -1 or 1, changes rarely
  lastCurveChange: number; // when we last changed curve direction
}

const COLORS = ['#EDECEC', '#F44E01', '#999895']; // Only visible colors

export function EvolvingDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
  const modeRef = useRef<'growth' | 'decay'>('growth'); // Track whether we're adding or removing dots

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { 
      alpha: true,
      desynchronized: true, // Better performance for animations
    });
    if (!ctx) return;

    // Set canvas to full viewport size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Start with one white dot (below nav bar)
    const now = Date.now();
    particlesRef.current = [
      {
        x: canvas.width / 2,
        y: Math.max(canvas.height / 2, 180), // Start at 180px (80px nav + 100px buffer)
        speed: 2.5,
        direction: Math.random() * Math.PI * 2,
        color: COLORS[0],
        lastSpawnTime: now,
        curveDirection: Math.random() > 0.5 ? 1 : -1,
        lastCurveChange: now,
      },
    ];

    let lastTime = performance.now();
    const animate = (currentTime: number) => {
      // Cap delta time to prevent huge jumps when tab is inactive
      const deltaTime = Math.min((currentTime - lastTime) / 16.67, 2); // Normalize to 60fps
      lastTime = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const newParticles: Particle[] = [];
      const particlesToRemove = new Set<number>();
      const now = Date.now();
      const navBarHeight = 80; // Nav bar height constant

      // Check mode transitions
      if (particlesRef.current.length >= 100) {
        modeRef.current = 'decay';
      } else if (particlesRef.current.length <= 1) {
        modeRef.current = 'growth';
      }

      particlesRef.current.forEach((particle, index) => {
        // Change curve direction every 3-5 seconds
        if (now - particle.lastCurveChange > 3000 + Math.random() * 2000) {
          particle.curveDirection *= -1;
          particle.lastCurveChange = now;
        }
        
        // Stronger, more pronounced sweeping curves
        particle.direction += 0.01 * particle.curveDirection * deltaTime;

        // Move particle with deltaTime for frame-independent movement
        particle.x += particle.speed * Math.cos(particle.direction) * deltaTime;
        particle.y += particle.speed * Math.sin(particle.direction) * deltaTime;

        // Track if we already added a dot (prevents corner double-spawn)
        let dotAdded = false;
        const canSpawn = now - particle.lastSpawnTime > 1000; // 1 second cooldown to prevent rapid spawning

        // Text bounding box (center area where hero text is)
        const textCenterX = canvas.width / 2;
        const heroHeight = canvas.height - navBarHeight;
        const textCenterY = navBarHeight + (heroHeight / 2); // centered in hero section below nav
        const textWidth = Math.min(670, canvas.width * 0.67); // narrower to fit text better
        const textHeight = 155; // rough height of single line hero text
        const textLeft = textCenterX - textWidth / 2;
        const textRight = textCenterX + textWidth / 2;
        const textTop = textCenterY - textHeight / 2;
        const textBottom = textCenterY + textHeight / 2;

        // Check if particle is near text area
        if (
          particle.x > textLeft - 20 && 
          particle.x < textRight + 20 && 
          particle.y > textTop - 20 && 
          particle.y < textBottom + 20
        ) {
          // Determine which side to bounce from
          const distLeft = particle.x - (textLeft - 20);
          const distRight = (textRight + 20) - particle.x;
          const distTop = particle.y - (textTop - 20);
          const distBottom = (textBottom + 20) - particle.y;
          const minDist = Math.min(distLeft, distRight, distTop, distBottom);

          if (minDist === distLeft || minDist === distRight) {
            particle.direction = Math.PI - particle.direction;
            particle.x = minDist === distLeft ? textLeft - 25 : textRight + 25;
          } else {
            particle.direction = -particle.direction;
            particle.y = minDist === distTop ? textTop - 25 : textBottom + 25;
          }

          if (canSpawn) {
            if (modeRef.current === 'growth') {
              // Growth mode: spawn new dot
              const colorIndex = (COLORS.indexOf(particle.color) + 1) % COLORS.length;
              newParticles.push({
                x: particle.x,
                y: particle.y,
                speed: 2 + Math.random() * 1.5,
                direction: Math.random() * Math.PI * 2,
                color: COLORS[colorIndex],
                lastSpawnTime: now,
                curveDirection: Math.random() > 0.5 ? 1 : -1,
                lastCurveChange: now,
              });
            } else {
              // Decay mode: mark for removal
              particlesToRemove.add(index);
            }
            particle.lastSpawnTime = now;
            dotAdded = true;
          }
        }

        // Hit left or right edge
        if (particle.x <= 5 || particle.x >= canvas.width - 5) {
          particle.x = Math.max(10, Math.min(canvas.width - 10, particle.x));
          particle.direction = Math.PI - particle.direction;
          
          if (!dotAdded && canSpawn) {
            if (modeRef.current === 'growth') {
              // Growth mode: spawn new dot
              const colorIndex = (COLORS.indexOf(particle.color) + 1) % COLORS.length;
              newParticles.push({
                x: particle.x,
                y: particle.y,
                speed: 2 + Math.random() * 1.5,
                direction: Math.random() * Math.PI * 2,
                color: COLORS[colorIndex],
                lastSpawnTime: now,
                curveDirection: Math.random() > 0.5 ? 1 : -1,
                lastCurveChange: now,
              });
            } else {
              // Decay mode: mark for removal
              particlesToRemove.add(index);
            }
            particle.lastSpawnTime = now;
            dotAdded = true;
          }
        }

        // Hit top (nav bar at 80px) or bottom edge
        if (particle.y <= navBarHeight - 20 || particle.y >= canvas.height - 5) {
          particle.y = particle.y <= navBarHeight - 20 
            ? navBarHeight - 17 
            : canvas.height - 10;
          particle.direction = -particle.direction;
          
          if (!dotAdded && canSpawn) {
            if (modeRef.current === 'growth') {
              // Growth mode: spawn new dot
              const colorIndex = (COLORS.indexOf(particle.color) + 1) % COLORS.length;
              newParticles.push({
                x: particle.x,
                y: particle.y,
                speed: 2 + Math.random() * 1.5,
                direction: Math.random() * Math.PI * 2,
                color: COLORS[colorIndex],
                lastSpawnTime: now,
                curveDirection: Math.random() > 0.5 ? 1 : -1,
                lastCurveChange: now,
              });
            } else {
              // Decay mode: mark for removal
              particlesToRemove.add(index);
            }
            particle.lastSpawnTime = now;
            dotAdded = true;
          }
        }

        // Draw dot
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = 1.0; // Fully opaque for crisp rendering
        ctx.fill();
      });

        // Remove particles marked for removal (in decay mode)
        if (particlesToRemove.size > 0) {
          particlesRef.current = particlesRef.current.filter((_, index) => !particlesToRemove.has(index));
        }

        // Add new particles after iteration (in growth mode)
        particlesRef.current.push(...newParticles);

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none"
      style={{ height: '100vh' }}
    />
  );
}
