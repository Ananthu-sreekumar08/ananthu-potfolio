import { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let width = window.innerWidth;
        let height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        // Grid configuration
        const DOT_SPACING = 30;
        const DOT_SIZE = 1.5;
        const ACTIVE_RADIUS = 100;
        const DOT_COLOR = '#5c3a75'; // Medium Purple
        const ACTIVE_COLOR = '#d633b8'; // Neon Magenta

        let dots = [];

        // Mouse state
        const mouse = {
            x: null,
            y: null,
        };

        const initDots = () => {
            dots = [];
            for (let x = 0; x < width; x += DOT_SPACING) {
                for (let y = 0; y < height; y += DOT_SPACING) {
                    dots.push({ x, y, baseX: x, baseY: y });
                }
            }
        };

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initDots();
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            dots.forEach((dot) => {
                // Calculate distance between mouse and the dot's BASE position (for stable physics)
                let dx = mouse.x - dot.baseX;
                let dy = mouse.y - dot.baseY;
                let distance = Math.sqrt(dx * dx + dy * dy);

                // Interaction configuration
                const maxDistance = 150; // Larger radius
                const maxScale = 4; // Scale up to 4x (1 + 3)
                const repulsionStrength = 20; // Pixels to push away

                let size = DOT_SIZE;
                let color = DOT_COLOR;
                let x = dot.baseX;
                let y = dot.baseY;

                if (mouse.x != null && distance < maxDistance) {
                    // Calculate ratio (0 to 1, where 1 is at mouse center)
                    const ratio = (maxDistance - distance) / maxDistance;

                    // Dynamic Scale
                    size = DOT_SIZE + (DOT_SIZE * maxScale * ratio);
                    color = ACTIVE_COLOR;

                    // Repulsion Physics: Move dots away from mouse cursors
                    const angle = Math.atan2(dy, dx);
                    const moveDistance = ratio * repulsionStrength;

                    x = dot.baseX + Math.cos(angle) * moveDistance;
                    y = dot.baseY + Math.sin(angle) * moveDistance;
                }

                // Draw Dot
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();

                // Connect lines
                if (mouse.x != null && distance < maxDistance / 2) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(214, 51, 184, ${0.4 * ((maxDistance / 2 - distance) / (maxDistance / 2))})`; // Neon Magenta
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(x, y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        // Initialize
        initDots();
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseLeave);
        // Touch support
        window.addEventListener('touchstart', (e) => {
            const touch = e.touches[0];
            mouse.x = touch.clientX;
            mouse.y = touch.clientY;
        }, { passive: true });
        window.addEventListener('touchmove', (e) => {
            const touch = e.touches[0];
            mouse.x = touch.clientX;
            mouse.y = touch.clientY;
        }, { passive: true });
        window.addEventListener('touchend', handleMouseLeave);
        draw();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
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
                zIndex: -1,
                background: 'var(--bg-color)', // Fallback/Base
                pointerEvents: 'none', // Allow clicks to pass through
            }}
        />
    );
};

export default InteractiveBackground;
