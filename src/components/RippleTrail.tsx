import { useEffect, useRef } from 'react';

interface Ripple {
  x: number;
  y: number;
  age: number;
  active: boolean;
}

export default function RippleTrail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ripplesRef = useRef<Ripple[]>([]);
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const ripples: Ripple[] = [];
    for (let i = 0; i < 80; i++) {
      ripples.push({ x: 0, y: 0, age: 0, active: false });
    }
    ripplesRef.current = ripples;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastMouseRef.current.x;
      const dy = e.clientY - lastMouseRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 25) {
        const inactiveIndex = ripplesRef.current.findIndex(r => !r.active);
        if (inactiveIndex !== -1) {
          ripplesRef.current[inactiveIndex] = {
            x: e.clientX,
            y: e.clientY,
            age: 0,
            active: true
          };
          lastMouseRef.current = { x: e.clientX, y: e.clientY };
        }
      }
    };

    const animate = () => {
      ripplesRef.current.forEach((ripple, index) => {
        if (ripple.active) {
          ripple.age += 0.012;
          if (ripple.age >= 1) {
            ripple.active = false;
            ripple.age = 0;
          }
        }
      });

      if (containerRef.current) {
        const elements = containerRef.current.children;
        ripplesRef.current.forEach((ripple, index) => {
          const element = elements[index] as HTMLDivElement;
          if (ripple.active) {
            const size = 20 + ripple.age * (300 - 20);
            const opacity = 1 - Math.pow(ripple.age, 1.2);
            element.style.left = `${ripple.x - size / 2}px`;
            element.style.top = `${ripple.y - size / 2}px`;
            element.style.width = `${size}px`;
            element.style.height = `${size}px`;
            element.style.opacity = opacity.toString();
            element.style.display = 'block';
          } else {
            element.style.display = 'none';
          }
        });
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 30,
        pointerEvents: 'none'
      }}
    >
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="liquid-trail">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
      {ripplesRef.current.map((_, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            borderRadius: '50%',
            backdropFilter: 'url(#liquid-trail) blur(1px)',
            boxShadow: 'inset 0 0 30px rgba(255,255,255,0.1), 0 0 15px rgba(147,197,253,0.15)',
            display: 'none'
          }}
        />
      ))}
    </div>
  );
}
