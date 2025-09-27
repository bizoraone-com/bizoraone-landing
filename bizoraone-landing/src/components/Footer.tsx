'use client';

import { Box, Container, Typography } from '@mui/material';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '@/components/Language';
import Social from './Contact/Social';

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <Box
      component="footer"
      sx={{
        borderTop: 1,
        borderColor: 'divider',
        py: 5,
      }}
    >
      <Container maxWidth="xl">
        <AnimatedSection 
          animation="fadeInUp" 
          delay={100} 
          duration={0.3}
          animateOnScroll={true}
          triggerOnce={false}
        >
           <Social />
          <Typography
            variant="body2"
            sx={{
              mt: 2,
              color: 'text.secondary',
              textAlign: 'center',
            }}
          >
            {t('footer.copyright')}
          </Typography>
        </AnimatedSection>
      </Container>
    </Box>
  );
}
