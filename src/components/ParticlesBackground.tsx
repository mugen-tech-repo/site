import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    color: string;
    opacity: number;
}

const COLORS = [
    "187, 255, 255",   // cyan
    "180, 120, 255",   // violet
    "255, 100, 180",   // magenta
];

const ParticlesBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Particle[]>([]);
    const animationRef = useRef<number>(0);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticles = () => {
            const count = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 18000), 80);
            particles.current = Array.from({ length: count }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                radius: Math.random() * 2 + 0.5,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                opacity: Math.random() * 0.5 + 0.1,
            }));
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const pts = particles.current;
            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;

            // Draw connection lines
            for (let i = 0; i < pts.length; i++) {
                for (let j = i + 1; j < pts.length; j++) {
                    const dx = pts[i].x - pts[j].x;
                    const dy = pts[i].y - pts[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        const alpha = (1 - dist / 150) * 0.12;
                        ctx.strokeStyle = `rgba(${pts[i].color}, ${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(pts[i].x, pts[i].y);
                        ctx.lineTo(pts[j].x, pts[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Update and draw particles
            for (const p of pts) {
                // Mouse repulsion
                const dmx = p.x - mx;
                const dmy = p.y - my;
                const mouseDist = Math.sqrt(dmx * dmx + dmy * dmy);
                if (mouseDist < 120) {
                    const force = (120 - mouseDist) / 120;
                    p.vx += (dmx / mouseDist) * force * 0.3;
                    p.vy += (dmy / mouseDist) * force * 0.3;
                }

                // Dampen velocity
                p.vx *= 0.99;
                p.vy *= 0.99;

                p.x += p.vx;
                p.y += p.vy;

                // Wrap around
                if (p.x < -10) p.x = canvas.width + 10;
                if (p.x > canvas.width + 10) p.x = -10;
                if (p.y < -10) p.y = canvas.height + 10;
                if (p.y > canvas.height + 10) p.y = -10;

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
                ctx.fill();
            }

            animationRef.current = requestAnimationFrame(draw);
        };

        const handleMouse = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        resize();
        createParticles();
        draw();

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouse);

        return () => {
            cancelAnimationFrame(animationRef.current);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouse);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-0"
            style={{ opacity: 0.6 }}
        />
    );
};

export default ParticlesBackground;
