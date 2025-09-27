'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  animateOnScroll?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    delay = 0,
    animateOnScroll = false
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = currentScrollY;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            if (triggerOnce) {
              setHasAnimated(true);
            }
          }, delay);
        } else if (!triggerOnce && animateOnScroll) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    if (animateOnScroll) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      observer.unobserve(element);
      if (animateOnScroll) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [threshold, rootMargin, triggerOnce, delay, animateOnScroll]);

  return {
    elementRef,
    isVisible: triggerOnce ? (hasAnimated ? true : isVisible) : isVisible,
    hasAnimated,
    scrollDirection
  };
}
