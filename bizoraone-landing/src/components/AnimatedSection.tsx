'use client';

import { Box, BoxProps } from '@mui/material';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ReactNode } from 'react';

interface AnimatedSectionProps extends BoxProps {
  children: ReactNode;
  animation?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'scaleIn';
  delay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
  animateOnScroll?: boolean;
}

export default function AnimatedSection({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  triggerOnce = true,
  animateOnScroll = false,
  sx,
  ...props
}: AnimatedSectionProps) {
  const { elementRef, isVisible, scrollDirection } = useScrollAnimation({
    threshold,
    triggerOnce,
    delay,
    animateOnScroll
  });

  const getAnimationStyles = () => {
    const baseStyles = {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0) translateX(0) scale(1)' : getInitialTransform(),
      transition: `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`,
    };

    return baseStyles;
  };

  const getInitialTransform = () => {
    if (animateOnScroll && !isVisible) {
      switch (animation) {
        case 'fadeInUp':
          return scrollDirection === 'down' ? 'translateY(30px)' : 'translateY(-30px)';
        case 'fadeInDown':
          return scrollDirection === 'down' ? 'translateY(-30px)' : 'translateY(30px)';
        case 'fadeInLeft':
          return scrollDirection === 'down' ? 'translateX(-30px)' : 'translateX(30px)';
        case 'fadeInRight':
          return scrollDirection === 'down' ? 'translateX(30px)' : 'translateX(-30px)';
        case 'fadeIn':
          return 'translateY(0)';
        case 'scaleIn':
          return 'scale(0.9)';
        default:
          return scrollDirection === 'down' ? 'translateY(30px)' : 'translateY(-30px)';
      }
    }

    switch (animation) {
      case 'fadeInUp':
        return 'translateY(30px)';
      case 'fadeInDown':
        return 'translateY(-30px)';
      case 'fadeInLeft':
        return 'translateX(-30px)';
      case 'fadeInRight':
        return 'translateX(30px)';
      case 'fadeIn':
        return 'translateY(0)';
      case 'scaleIn':
        return 'scale(0.9)';
      default:
        return 'translateY(30px)';
    }
  };

  return (
    <Box
      ref={elementRef}
      sx={{
        ...getAnimationStyles(),
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}