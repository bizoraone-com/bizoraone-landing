'use client';

import { Box, useTheme } from '@mui/material';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type Pt = { x: number; y: number };

type Props = {
  containerRef: React.RefObject<HTMLDivElement | null>;
  iconRefs: React.RefObject<HTMLDivElement | null>[];
};

export default function AnimatedPath({ containerRef, iconRefs }: Props) {
  const pathRef = useRef<SVGPathElement>(null);
  const mobilePathRef = useRef<SVGPathElement>(null);
  const [d, setD] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [penPosition, setPenPosition] = useState(0);
  const [penVisible, setPenVisible] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [lastValidPenPos, setLastValidPenPos] = useState({ x: 0, y: 0 });
  const theme = useTheme();

  const prefersReducedMotion = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
    []
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 900);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getPoints = useCallback((): Pt[] => {
    const host = containerRef.current;
    if (!host) return [];
    const hb = host.getBoundingClientRect();

    const points = iconRefs
      .map(r => r.current?.getBoundingClientRect())
      .filter((b): b is DOMRect => b !== undefined)
      .map((b: DOMRect) => ({
        x: (b.left - hb.left) + b.width / 2,
        y: (b.top  - hb.top)  + b.height / 2,
      }));

    if (process.env.NODE_ENV === 'development') {
      console.log('Path points:', points);
    }

    return points;
  }, [containerRef, iconRefs]);

  const buildSmoothPath = (pts: Pt[]) => {
    if (pts.length < 2) return '';
    let out = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[i + 2] || p2;
      const c1x = p1.x + (p2.x - p0.x) / 6;
      const c1y = p1.y + (p2.y - p0.y) / 6;
      const c2x = p2.x - (p3.x - p1.x) / 6;
      const c2y = p2.y - (p3.y - p1.y) / 6;
      out += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`;
    }
    return out;
  };

  const getPenPosition = useCallback((progress: number) => {
    const el = pathRef.current;
    if (!el || !d || d.trim() === '') return { x: 0, y: 0 };
    
    try {
      const pathLength = el.getTotalLength();
      if (pathLength === 0) return { x: 0, y: 0 };
      
      const clampedProgress = Math.max(0, Math.min(1, progress));
      const point = el.getPointAtLength(pathLength * clampedProgress);
      
      if (isNaN(point.x) || isNaN(point.y) || point.x < 0 || point.y < 0) {
        console.warn('Invalid pen position:', point);
        return { x: 0, y: 0 };
      }
      
      return { x: point.x, y: point.y };
    } catch (error) {
      console.warn('Error getting pen position:', error);
      return { x: 0, y: 0 };
    }
  }, [d]);

  const recompute = useCallback(() => {
    const pts = getPoints();
    setD(buildSmoothPath(pts));
    setAnimationTriggered(false);
    setPenPosition(0);
    setPenVisible(false);
  }, [getPoints]);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );
    
    observer.observe(containerRef.current);
    
    return () => observer.disconnect();
  }, [containerRef]);

  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(recompute);
    ro.observe(containerRef.current);

    const id = requestAnimationFrame(recompute);

    const id2 = window.setTimeout(recompute, 120);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(id);
      clearTimeout(id2);
    };
  }, [containerRef, recompute]);

  // Draw-once animation (only when visible) - delayed to start after step animations
  useEffect(() => {
    const el = pathRef.current;
    if (!el || !d || !isVisible) return;
    const L = el.getTotalLength();
    el.style.strokeDasharray = `${L}`;
    el.style.strokeDashoffset = prefersReducedMotion ? '0' : `${L}`;
    // Delay line animation to start after step animations complete
    const delay = prefersReducedMotion ? 0 : 2000;
    setTimeout(() => {
      requestAnimationFrame(() => {
        el.style.transition = 'none';
        
        if (!prefersReducedMotion) {
          const startTime = Date.now();
          setPenVisible(true);
          setAnimationTriggered(true);
          
          const animatePen = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / 3200, 1);
            
            setPenPosition(progress);
            
            const drawnLength = L * progress;
            el.style.strokeDashoffset = `${L - drawnLength}`;
            
            if (progress < 1) {
              requestAnimationFrame(animatePen);
            } else {
              setTimeout(() => {
                setPenVisible(false);
              }, 500);
            }
          };
          requestAnimationFrame(animatePen);
        } else {
          el.style.strokeDashoffset = '0';
          setAnimationTriggered(true);
        }
      });
    }, delay);
  }, [d, isVisible, prefersReducedMotion]);

  useEffect(() => {
    const el = pathRef.current;
    const mobileEl = mobilePathRef.current;
    if (!el || !d) return;
    
    const checkScreenSize = () => {
      if (window.innerWidth < 900) {
        console.log('Mobile screen detected, forcing path visibility');
        const L = el.getTotalLength();
        
        el.style.strokeDasharray = `${L}`;
        el.style.strokeDashoffset = prefersReducedMotion ? '0' : `${L}`;
        el.style.display = 'block';
        el.style.opacity = '1';
        
        if (mobileEl) {
          mobileEl.style.strokeDasharray = `${L}`;
          mobileEl.style.strokeDashoffset = prefersReducedMotion ? '0' : `${L}`;
        }
        
        const delay = prefersReducedMotion ? 0 : 2000;
        setTimeout(() => {
          requestAnimationFrame(() => {
            el.style.transition = 'none';
            if (mobileEl) {
              mobileEl.style.transition = 'none';
            }
            
            if (!prefersReducedMotion) {
              const startTime = Date.now();
              setPenVisible(true);
              setAnimationTriggered(true);
              
              const animatePen = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / 3200, 1);
                
                setPenPosition(progress);
                
                const drawnLength = L * progress;
                el.style.strokeDashoffset = `${L - drawnLength}`;
                
                if (mobileEl) {
                  mobileEl.style.strokeDashoffset = `${L - drawnLength}`;
                }
                
                if (progress < 1) {
                  requestAnimationFrame(animatePen);
                } else {
                  setTimeout(() => {
                    setPenVisible(false);
                  }, 500);
                }
              };
              requestAnimationFrame(animatePen);
            } else {
              el.style.strokeDashoffset = '0';
              if (mobileEl) {
                mobileEl.style.strokeDashoffset = '0';
              }
              setAnimationTriggered(true);
            }
          });
        }, delay);
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [d, prefersReducedMotion]);

  const penPos = useMemo(() => getPenPosition(penPosition), [penPosition, d]);
  
  const currentPenPos = penPos.x > 0 && penPos.y > 0 && !isNaN(penPos.x) && !isNaN(penPos.y) 
    ? penPos 
    : lastValidPenPos;

  if (penPos.x > 0 && penPos.y > 0 && !isNaN(penPos.x) && !isNaN(penPos.y)) {
    if (lastValidPenPos.x !== penPos.x || lastValidPenPos.y !== penPos.y) {
      setLastValidPenPos(penPos);
    }
  }

  return (
    <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      <svg 
        width="100%" 
        height="100%" 
        style={{ 
          overflow: 'visible',
          minHeight: '400px'
        }}
      >
        <defs>
          <linearGradient id="howitworksGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={theme.palette.primary.main} />
            <stop offset="100%" stopColor={theme.palette.success.main} />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d={d}
          fill="none"
          stroke="url(#howitworksGradient)"
          strokeWidth={6}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          style={{ 
            stroke: 'url(#howitworksGradient)',
            strokeDasharray: d && animationTriggered ? `${pathRef.current?.getTotalLength() || 0}` : 'none',
            strokeDashoffset: d && animationTriggered ? `${pathRef.current?.getTotalLength() || 0}` : '0',
            display: d && animationTriggered ? 'block' : 'none'
          }}
        />
        {/* Fallback path for mobile - always visible on small screens with animation */}
        <path
          ref={mobilePathRef}
          d={d}
          fill="none"
          stroke="#1976d2"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.8}
          style={{ 
            display: isMobile && d && animationTriggered ? 'block' : 'none',
            strokeDasharray: d && animationTriggered ? `${mobilePathRef.current?.getTotalLength() || 0}` : 'none',
            strokeDashoffset: d && animationTriggered ? `${mobilePathRef.current?.getTotalLength() || 0}` : '0'
          }}
        />
        
      
        {d && d.trim() !== '' && penPosition > 0 && penVisible && (
          <image
            href="/writing.png"
            x={currentPenPos.x}
            y={currentPenPos.y - 46}
            width="50"
            height="50"
            style={{
              opacity: penVisible ? 1 : 0,
              transformOrigin: '12px 12px',
              transition: 'opacity 2s ease-out'
            }}
          />
        )}
      </svg>
    </Box>
  );
}