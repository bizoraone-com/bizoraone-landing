'use client';

import { AppBar } from '@mui/material';
import { useState, useEffect } from 'react';
import HeaderContent from './HeaderContent';
import MobileDrawer from './MobileDrawer';


export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.3)' : 'transparent',
        color: isScrolled ? '#1E293B' : 'white',
        backgroundImage: isScrolled ? 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))' : 'none',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        transition: 'background-color 0.3s ease, background-image 0.3s ease, color 0.3s ease',
        '& *': {
          transition: 'color 0.3s ease',
        },
      
      }}
    >
      <HeaderContent 
        isScrolled={isScrolled}
        onMobileMenuOpen={() => setMobileMenuOpen(true)}
      />

      <MobileDrawer   
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </AppBar>
  );
}
