'use client';

import { Box, Typography } from '@mui/material';
import {
  PersonAdd,
  Business,
  Chat,
  Analytics,
  Notifications,
  ExpandMore
} from '@mui/icons-material';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/components/Language';

interface ProcessStepProps {
  step: {
    id: number;
    titleKey: string;
    descriptionKey: string;
    icon: string;
    isActive?: boolean;
  };
  isMobile?: boolean;
  iconRef?: React.RefObject<HTMLDivElement | null>;
  animationDelay?: number;
}

const iconMap = {
  planning: PersonAdd,
  design: Business,
  development: Chat,
  testing: Analytics,
  launch: Notifications,
  support: ExpandMore,
};

export default function ProcessStep({ step, isMobile = false, iconRef, animationDelay = 0 }: ProcessStepProps) {
  const { t } = useLanguage();
  const IconComponent = iconMap[step.icon as keyof typeof iconMap];
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const stepRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    if (!stepRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );
    
    observer.observe(stepRef.current);
    
    return () => observer.disconnect();
  }, []);

  // Trigger animation with delay when visible
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsAnimated(true);
      }, animationDelay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, animationDelay]);

  return (
    <Box
      ref={stepRef}
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'row' : 'column',
        alignItems: isMobile ? 'flex-start' : 'center',
        gap: isMobile ? 2 : 1.5,
        textAlign: isMobile ? 'left' : 'center',
        position: 'relative',
        zIndex: 2,
        opacity: isAnimated ? 1 : 0,
        transform: isAnimated 
          ? 'translateY(0) scale(1)' 
          : 'translateY(30px) scale(0.9)',
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDelay: `${animationDelay}ms`,
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-5px) scale(1.05)',
          '& .icon-circle': {
            border: '4px solid #1976d2',
            boxShadow: '0 12px 35px rgba(25,118,210,0.4)',
            transform: 'scale(1.1)',
          },
          '& .step-title': {
            color: '#1565c0',
            textShadow: '0 2px 4px rgba(0,0,0,0.2)',
            transform: 'scale(1.05)',
          },
          '& .step-description': {
            color: '#1f2937',
            fontWeight: 600,
          }
        }
      }}
    >
      {/* Icon Circle */}
      <Box
        ref={iconRef}
        className="icon-circle"
        sx={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          backgroundColor: 'white', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 25px rgba(25,118,210,0.3)', // Enhanced shadow
          transition: 'all 0.3s ease',
          flexShrink: 0,
          position: 'relative',
          zIndex: 3,
        }}
      >
        <IconComponent
          sx={{
            fontSize: 24,
            color: ' rgb(193, 71, 6)',
            transition: 'color 0.3s ease',
          }}
        />
      </Box>

      {/* Text Content */}
      <Box sx={{ 
        flex: isMobile ? 1 : 'none',
        opacity: isAnimated ? 1 : 0,
        transform: isAnimated ? 'translateY(0)' : 'translateY(10px)',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDelay: `${animationDelay + 200}ms`,
      }}>
        <Typography
          variant="h6"
          className="step-title"
          sx={{
            fontWeight: 700,
            color: '#215170', // Consistent title color
            fontSize: { xs: '0.9rem', sm: '1rem' },
            mb: 0.5,
            textShadow: '0 1px 2px rgba(0,0,0,0.1)', // Text shadow for better visibility
            transition: 'all 0.3s ease',
          }}
        >
          {t(step.titleKey)}
        </Typography>
        <Typography
          variant="body2"
          className="step-description"
          sx={{
            color: '#215170', // Consistent color for descriptions
            fontSize: { xs: '0.75rem', sm: '0.8rem' },
            lineHeight: 1.4,
            maxWidth: isMobile ? 'none' : 180,
            fontWeight: 400, // Normal weight for smaller text
            transition: 'all 0.3s ease',
          }}
        >
          {t(step.descriptionKey)}
        </Typography>
      </Box>
    </Box>
  );
}
