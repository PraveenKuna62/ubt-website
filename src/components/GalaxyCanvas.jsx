import { useEffect, useRef } from 'react';

const GalaxyCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Color palette: Cyan, Electric Blue, Gold/Amber, Neon Violet
    const colors = [
      'rgba(56, 189, 248, ',  // Cyan
      'rgba(255, 153, 51, ',  // Gold
      'rgba(168, 85, 247, ',  // Violet
      'rgba(96, 165, 250, ',  // Electric Blue
      'rgba(255, 255, 255, ', // White Star
    ];

    // Robotic Star / Constellation Nodes
    const particleCount = Math.min(85, Math.floor((width * height) / 14000));
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.2 + 1,
        colorBase: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.7 + 0.3,
        alphaSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
      });
    }

    // Shooting Stars / Meteors
    const meteors = [];
    const createMeteor = () => {
      meteors.push({
        x: Math.random() * width * 0.8,
        y: Math.random() * height * 0.4,
        length: Math.random() * 90 + 70,
        speed: Math.random() * 7 + 8,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2, // ~45 deg diagonal
        opacity: 1,
        color: Math.random() > 0.4 ? '#38bdf8' : '#ff9933',
      });
    };

    let meteorTimer = 0;

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Robotic Constellation Network Lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * 0.28;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      // 2. Draw Robotic Constellation Nodes with Glowing Halos
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce bounds
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Twinkle
        p.alpha += p.alphaSpeed;
        if (p.alpha > 0.95 || p.alpha < 0.25) {
          p.alphaSpeed = -p.alphaSpeed;
        }

        // Outer glow
        const glowRadius = p.radius * 3.5;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius);
        grad.addColorStop(0, `${p.colorBase}${p.alpha})`);
        grad.addColorStop(1, `${p.colorBase}0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Inner solid core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorBase}1)`;
        ctx.fill();
      }

      // 3. Draw & Animate Shooting Stars
      meteorTimer++;
      if (meteorTimer > 110 && Math.random() < 0.35) {
        createMeteor();
        meteorTimer = 0;
      }

      for (let m = meteors.length - 1; m >= 0; m--) {
        const meteor = meteors[m];
        const tailX = meteor.x - Math.cos(meteor.angle) * meteor.length;
        const tailY = meteor.y - Math.sin(meteor.angle) * meteor.length;

        const meteorGrad = ctx.createLinearGradient(meteor.x, meteor.y, tailX, tailY);
        meteorGrad.addColorStop(0, meteor.color === '#38bdf8' ? `rgba(56, 189, 248, ${meteor.opacity})` : `rgba(255, 153, 51, ${meteor.opacity})`);
        meteorGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = meteorGrad;
        ctx.lineWidth = 2.2;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Head spark
        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `#ffffff`;
        ctx.fill();

        // Advance
        meteor.x += Math.cos(meteor.angle) * meteor.speed;
        meteor.y += Math.sin(meteor.angle) * meteor.speed;
        meteor.opacity -= 0.015;

        if (meteor.opacity <= 0 || meteor.x > width + 100 || meteor.y > height + 100) {
          meteors.splice(m, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default GalaxyCanvas;
