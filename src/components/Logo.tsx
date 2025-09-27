'use client';

import Image from 'next/image';
import {  Typography, Stack, Link } from '@mui/material';

interface LogoProps {
  showText?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'white' | 'dark';
  className?: string;
}

const sizeMap = {
  small: { width: 32, height: 32, fontSize: '1rem' },
  medium: { width: 44, height: 44, fontSize: '1.25rem' },
  large: { width: 56, height: 56, fontSize: '1.5rem' },
};

const variantMap = {
  default: { color: '#1E293B' },
  white: { color: '#FFFFFF' },
  dark: { color: '#0F172A' },
};

export default function Logo({ 
  showText = true, 
  size = 'medium', 
  variant = 'default',
  className = ''
}: LogoProps) {
  const { width, height, fontSize } = sizeMap[size];
  const { color } = variantMap[variant];

  return (
    <Link 
      href="/#" 
      sx={{ 
        textDecoration: 'none',
        '&:hover': { textDecoration: 'none' }
      }}
    >
      <Stack 
        direction="row" 
        alignItems="center" 
        spacing={1}
        className={className}
        sx={{ cursor: 'pointer' }}
      >
        <Image
          src="/bizoraoneLogoIcon.png"
          alt="BizoraOne logo"
          width={width}
          height={height}
          priority
          sizes={`${width}px`}
          style={{ borderRadius: 8 }}
        />
        {showText && (
          <Typography 
            sx={{ 
              color,
              fontSize,
              fontWeight: 600,
              letterSpacing: '-0.025em'
            }}
          >
            BizoraOne
          </Typography>
        )}
      </Stack>
    </Link>
  );
}
