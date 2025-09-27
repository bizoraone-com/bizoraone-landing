'use client';

import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/components/Language';

const features = [
  ["features.chat.title", "features.chat.description"],
  ["features.insights.title", "features.insights.description"],
  ["features.alerts.title", "features.alerts.description"],
  ["features.website.title", "features.website.description"],
  ["features.appointments.title", "features.appointments.description"],
  ["features.email.title", "features.email.description"],
  ["features.integrations.title", "features.integrations.description"],
  ["features.security.title", "features.security.description"],
];

export default function Features() {
  const { t } = useLanguage();

  return (
    <Box id="features" sx={{ py: { xs: 8, md: 10 } }}>
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
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 1,
              textAlign: 'center',
              color: '#215170',
            }}
          >
            {t('features.title')}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#215170',
              textAlign: 'center',
              mb: 6,
            }}
          >
            {t('features.subtitle')}
          </Typography>
        </AnimatedSection>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
            gap: 3,
          }}
        >
          {features.map(([titleKey, descriptionKey], index) => (
            <AnimatedSection 
              key={titleKey}
              animation="fadeInUp" 
              delay={200 + (index * 50)} 
              duration={0.3}
              animateOnScroll={true}
              triggerOnce={false}
            >
              <Card
                sx={{
                  height: '100%',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1.5,
                      color: '#215170',
                    }}
                  >
                      {t(titleKey)}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#215170',
                      lineHeight: 1.6,
                    }}
                  >
                      {t(descriptionKey)}
                  </Typography>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
