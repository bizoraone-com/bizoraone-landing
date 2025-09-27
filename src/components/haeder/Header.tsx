'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { ArrowForwardIos, RocketLaunch } from '@mui/icons-material';
import { useLanguage } from '@/components/Language';
import AnimatedSection from '@/components/AnimatedSection';

const gradientBg =
  'linear-gradient(135deg, #FFFFFF 0%, #FFFFFF 10%, #007BFF 32%, #00C9A7 100%)';

export default function Header() {
  const { t } = useLanguage();
  
  return (
    <Box
      component="header"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        background: gradientBg,
        pt: { xs: 12, sm: 10, md: 8 }, 
      }}
      className="rounded-b-[50%] pb-[14% h-fit]"
    >

      <Container maxWidth="xl" sx={{ py: { xs: 2, md: 10 } }}>
        <AnimatedSection 
          animation="fadeInUp" 
          delay={100} 
          duration={0.4}
          animateOnScroll={true}
          triggerOnce={false}
        >
          <Typography
            component="h1"
            sx={{
              fontWeight: 800,
              lineHeight: 1.05,
              mb: 2,
              fontSize: 'clamp(2rem, 2.4rem + 2vw, 4rem)',
              color: 'white',
            }}
          >
            {t('hero.title')}
          </Typography>
        </AnimatedSection>

        <AnimatedSection 
          animation="fadeInUp" 
          delay={150} 
          duration={0.4}
          animateOnScroll={true}
          triggerOnce={false}
        >
          <Typography
            variant="h6"
            sx={{
              maxWidth: 640,
              color: 'rgba(255,255,255,0.95)',
              mb: 4,
              fontSize: '1.125rem',
              lineHeight: 1.6,
            }}
          >
            {t('hero.subtitle')}
          </Typography>
        </AnimatedSection>
      </Container>

      <AnimatedSection 
        animation="fadeInUp" 
        delay={200} 
        duration={0.4}
        animateOnScroll={true}
        triggerOnce={false}
      >
        <Box
          sx={{
             mx: 'auto',
           mb: 10,
            zIndex: 2,
            width: '100%',
            maxWidth: 720,
            px: 2,
          }}
        >
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{
              '@media (prefers-reduced-motion: no-preference)': {
                '& a, & button': {
                  transition: 'transform .2s ease, box-shadow .2s ease, background .2s',
                },
                '& a:hover, & button:hover': { 
                  transform: 'translateY(-2px)',
                  '&:not([data-custom-hover])': {
                    transform: 'translateY(-2px)',
                  }
                },
              },
            }}
          >
          <Button
            variant="contained"
            size="large"
            href={t('contact.waitlist.href')}
            target="_blank"
            aria-label="Join the waitlist"
            endIcon={<RocketLaunch sx={{ fontSize: 18 }} />}
            data-custom-hover
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 700,
              borderRadius: '10px',
              minWidth: 200,
              height: 56,
              border: '1.5px solid rgba(255,255,255,0.8)',
             
              '&:hover': {
                transform: 'scale(1.05)',
                background: 'linear-gradient(90deg, #0056B3, #009E8E)',
                boxShadow: '0 0 20px rgba(0, 201, 167, 0.6), 0 12px 34px rgba(0,123,255,0.4)',
              },
         
            }}
          >
            {t('hero.joinWaitlist')}
          </Button>

          <Button
            variant="outlined"
            size="large"
            href="#features"
            aria-label="See features"
            endIcon={<ArrowForwardIos sx={{ fontSize: 16 }} />}
            data-custom-hover
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 700,
              borderRadius: '10px',
              minWidth: 200,
              height: 56,
              color: 'white',
              border: '1.5px solid rgba(255,255,255,0.8)',
              backgroundColor: 'transparent',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                border: '2px solid transparent',
                backgroundColor: 'rgba(255,255,255,0.1)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(0,123,255,0.2)',
              },
              '&:focus-visible': {
                outline: '3px solid rgba(15,23,42,0.3)',
                outlineOffset: 2,
              },
            }}
          >
             {t('hero.seeFeatures')}
          </Button>
          </Stack>
        </Box>
      </AnimatedSection>
    </Box>
  );
}
