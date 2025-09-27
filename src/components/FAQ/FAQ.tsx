'use client';

import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/components/Language';

const faqData = [
  { id: 1, questionKey: 'faq.questions.difference.question', answerKey: 'faq.questions.difference.answer' },
  { id: 2, questionKey: 'faq.questions.knowledge.question', answerKey: 'faq.questions.knowledge.answer' },
  { id: 3, questionKey: 'faq.questions.analytics.question', answerKey: 'faq.questions.analytics.answer' },
  { id: 4, questionKey: 'faq.questions.integrations.question', answerKey: 'faq.questions.integrations.answer' },
  { id: 5, questionKey: 'faq.questions.security.question', answerKey: 'faq.questions.security.answer' },
  { id: 6, questionKey: 'faq.questions.gettingStarted.question', answerKey: 'faq.questions.gettingStarted.answer' },
];

export default function FAQ() {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState<number | false>(1);

  const handleChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box id="faq" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#F0F4F8' }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 4, md: 8 } }}>
          {/* Left Column - Heading */}
          <Box sx={{ flex: { md: '0 0 40%' }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <AnimatedSection 
              animation="fadeInLeft" 
              delay={100} 
              duration={0.6}
              animateOnScroll={true}
              triggerOnce={false}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.1,
                  mb: 2,
                  fontFamily: 'serif',
                }}
              >
                <Box component="span" sx={{ color: '#215170', display: 'block' }}>
                  {t('faq.title').split(' ').slice(0, -1).join(' ')}
                </Box>
                <Box component="span" sx={{ color: '#E88080', display: 'block' }}>
                  {t('faq.title').split(' ').slice(-1)[0]}
                </Box>
              </Typography>
            </AnimatedSection>
          </Box>

          {/* Right Column - FAQ Items */}
          <Box sx={{ flex: { md: '0 0 60%' } }}>
            <AnimatedSection 
              animation="fadeInRight" 
              delay={200} 
              duration={0.6}
              animateOnScroll={true}
              triggerOnce={false}
            >
              {faqData.map((faq) => (
                <Accordion
                  key={faq.id}
                  expanded={expanded === faq.id}
                  onChange={handleChange(faq.id)}
                  sx={{
                    mb: 2,
                    borderRadius: '12px !important',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    border: '1px solid #E0E0E0',
                    backgroundColor: 'white',
                    '&:before': {
                      display: 'none',
                    },
                    '&.Mui-expanded': {
                      margin: '0 0 16px 0',
                    },
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      transform: 'translateY(-1px)',
                    }
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <Box
                        sx={{
                          width: 24,
                          height: 24,
                          borderRadius: '6px',
                          backgroundColor: '#E0E0E0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {expanded === faq.id ? (
                          <Remove sx={{ fontSize: 16, color: '#2A526B' }} />
                        ) : (
                          <Add sx={{ fontSize: 16, color: '#2A526B' }} />
                        )}
                      </Box>
                    }
                    sx={{
                      py: 2,
                      px: 3,
                      '& .MuiAccordionSummary-content': {
                        margin: '0',
                        alignItems: 'center',
                      },
                      '&:hover': {
                        '& .MuiAccordionSummary-expandIconWrapper': {
                          backgroundColor: '#D0D0D0',
                          transform: 'scale(1.05)',
                        }
                      }
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 500,
                        color: '#215170',
                        fontSize: { xs: '1rem', sm: '1.1rem' },
                        lineHeight: 1.4,
                      }}
                    >
                      {t(faq.questionKey)}
                    </Typography>
                  </AccordionSummary>
                  
                  <AccordionDetails
                    sx={{
                      px: 3,
                      pb: 3,
                      pt: 0,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#215170',
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        lineHeight: 1.6,
                        fontWeight: 400,
                      }}
                    >
                      {t(faq.answerKey)}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </AnimatedSection>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
