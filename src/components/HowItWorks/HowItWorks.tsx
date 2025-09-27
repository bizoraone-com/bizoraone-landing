'use client';

import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useMemo, useRef } from 'react';
import ProcessStep from './ProcessStep';
import AnimatedPath from './AnimatedPath';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/components/Language';

const processSteps = [
  { id: 1, titleKey: 'process.steps.signup.title', descriptionKey: 'process.steps.signup.description', icon: 'planning', isActive: false },
  { id: 2, titleKey: 'process.steps.businessDetails.title', descriptionKey: 'process.steps.businessDetails.description', icon: 'design', isActive: true },
  { id: 3, titleKey: 'process.steps.chatWebsite.title', descriptionKey: 'process.steps.chatWebsite.description', icon: 'development', isActive: false },
  { id: 4, titleKey: 'process.steps.insights.title', descriptionKey: 'process.steps.insights.description', icon: 'testing', isActive: false },
  { id: 5, titleKey: 'process.steps.alerts.title', descriptionKey: 'process.steps.alerts.description', icon: 'launch', isActive: false },
  { id: 6, titleKey: 'process.steps.expand.title', descriptionKey: 'process.steps.expand.description', icon: 'support', isActive: false },
] as const;

export default function HowItWorks() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useLanguage();

 
  const containerRef = useRef<HTMLDivElement>(null);

 
  const iconRefs = useRef(processSteps.map(() => ({ current: null as HTMLDivElement | null })));

 
  const topRow = useMemo(() => processSteps.slice(0, 3), []);
  const bottomRow = useMemo(() => processSteps.slice(3, 6), []);

  return (
    <Box id="how-it-works" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#FAFAFA' }}>
      <Container maxWidth="xl">
       
        <AnimatedSection 
          animation="fadeInUp" 
          delay={100} 
          duration={0.4}
          animateOnScroll={true}
          triggerOnce={false}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700, mb: 1, textAlign: 'center', color: '#215170' }}
          >
            {t('process.title')}
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: '1.5rem', md: '1.8rem' }, fontWeight: 600, mb: 2, textAlign: 'center', color: '#215170' }}
          >
            {t('process.subtitle')}
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: '#215170', textAlign: 'center', mb: 6, maxWidth: 720, mx: 'auto' }}
          >
            {t('process.description')}
          </Typography>
        </AnimatedSection>
       
        <Box
          ref={containerRef}
          sx={{
            position: 'relative',
            minHeight: { xs: 900, sm: 800, md: 360 },
            px: { xs: 2, sm: 4, md: 6 },
            pb: { xs: 8, md: 2 },
            overflow: 'visible',
           
           
            borderRadius: { xs: 2, md: 0 },
            backgroundColor: { xs: '#F9FAFB', md: 'transparent' }
          }}
        >
          
          <AnimatedPath
            containerRef={containerRef}
            iconRefs={iconRefs.current}
          />

          
          {isMobile ? (
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: { xs: 4, sm: 5 },
              py: 2,
            }}>
              {processSteps.map((s, i) => (
                <ProcessStep 
                  key={s.id} 
                  step={s} 
                  isMobile 
                  iconRef={iconRefs.current[i]} 
                  animationDelay={i * 150}
                />
              ))}
            </Box>
          ) : (
           
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  mb: { md: 14 },
                  gap: 2,
                }}
              >
                {topRow.map((s, i) => (
                  <Box key={s.id} sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    <ProcessStep 
                      step={s} 
                      iconRef={iconRefs.current[i]} 
                      animationDelay={i * 200}
                    />
                  </Box>
                ))}
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: 2,
                }}
              >
                {bottomRow.map((s, i) => (
                  <Box key={s.id} sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    <ProcessStep 
                      step={s} 
                      iconRef={iconRefs.current[i + topRow.length]} 
                      animationDelay={(i + topRow.length) * 200}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}