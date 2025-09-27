'use client';

import { Stack, Button } from '@mui/material';
import { LanguageSelector } from '@/components/Language';
import { useLanguage } from '@/components/Language';

interface DesktopNavigationProps {
  isScrolled: boolean;
}

export default function DesktopNavigation({ isScrolled }: DesktopNavigationProps) {
  const { t } = useLanguage();
  return (
    <Stack 
      direction="row" 
      spacing={2} 
      alignItems="center"
      sx={{ display: { xs: 'none', md: 'flex' } }}
    >
      <Button 
        href="#features" 
        sx={{ 
          color: isScrolled ? '#1E293B' : 'white',
          textTransform: 'none',
          fontWeight: 500,
          '&:hover': { backgroundColor: 'transparent' }
        }}
      >
        {t('nav.about')}
      </Button>
      <Button 
        href="#how-it-works" 
        sx={{ 
          color: isScrolled ? '#1E293B' : 'white',
          textTransform: 'none',
          fontWeight: 500,
          '&:hover': { backgroundColor: 'transparent' }
        }}
      >
        {t('nav.howItWorks')}
      </Button>
      <Button 
        href="#faq" 
        sx={{ 
          color: isScrolled ? '#1E293B' : 'white',
          textTransform: 'none',
          fontWeight: 500,
          '&:hover': { backgroundColor: 'transparent' }
        }}
      >
        {t('nav.faqs')}
      </Button>
      <Button 
        href="#contact" 
        sx={{ 
          color: isScrolled ? '#1E293B' : 'white',
          textTransform: 'none',
          fontWeight: 500,
          '&:hover': { backgroundColor: 'transparent' }
        }}
      >
        {t('nav.contact')}
      </Button>
      
      {/* Language Selector */}
      <LanguageSelector size="small" variant="desktop" textColor={isScrolled ? '#1E293B' : 'white'} />
    </Stack>
  );
}
