'use client';

import { Box, Container, Typography, Card, CardContent, Button } from '@mui/material';
import { 
  AttachMoney, 
  PersonAdd, 
  Handshake, 
  Email
} from '@mui/icons-material';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/components/Language';

const getContactActions = (t: (key: string) => string) => [
  {
    id: 'waitlist',
    icon: PersonAdd,
    title: t('contact.waitlist.title'),
    description: t('contact.waitlist.description'),
    buttonText: t('contact.waitlist.button'),
    href: t('contact.waitlist.href'),
    target: '_blank',
    variant: 'outlined' as const,
    color: 'primary' as const,
  },
  {
    id: 'contribute',
    icon: AttachMoney,
    title: t('contact.contribute.title'),
    description: t('contact.contribute.description'),
    buttonText: t('contact.contribute.button'),
    href: 'https://paypal.me/bizoraone',
    target: '_blank',
    variant: 'outlined' as const,
    color: 'primary' as const,
  },
  {
    id: 'partnerships',
    icon: Handshake,
    title: t('contact.partnerships.title'),
    description: t('contact.partnerships.description'),
    buttonText: t('contact.partnerships.button'),
    href: 'mailto:hello@bizoraone.com?subject=Partnership%20Inquiry',
    target: '_self',
    variant: 'outlined' as const,
    color: 'primary' as const,
  },
  {
    id: 'contact',
    icon: Email,
    title: t('contact.contact.title'),
    description: t('contact.contact.description'),
    buttonText: t('contact.contact.button'),
    href: 'mailto:info@bizoraone.com',
    target: '_self',
    variant: 'outlined' as const,
    color: 'primary' as const,
  },
];


export default function Contact() {
  const { t } = useLanguage();
  const contactActions = getContactActions(t);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@bizoraone.com');
  };

  return (
    <Box id="contact" sx={{ 
      py: { xs: 6, md: 8 },
      backgroundColor: '#F8FAFB',
    }} suppressHydrationWarning>
      <Container maxWidth="lg">
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
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              fontWeight: 700,
              mb: 1,
              textAlign: 'center',
              color: '#215170',
            }}
          >
            {t('contact.title')}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#6B7280',
              textAlign: 'center',
              mb: 4,
              maxWidth: '500px',
              mx: 'auto',
              fontSize: '1rem',
            }}
          >
            {t('contact.subtitle')}
          </Typography>
        </AnimatedSection>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
              xl: 'repeat(4, 1fr)',
            },
            gap: 1.5,
            mb: 4,
           
            mx: 'auto',
          }}
          suppressHydrationWarning
        >
          {contactActions.map((action, index) => (
            <AnimatedSection 
              key={action.id}
              animation="fadeInUp" 
              delay={200 + (index * 100)} 
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
                suppressHydrationWarning
              >
                <CardContent sx={{ p: 2.5, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 1,
                    }}
                  >
                    <Box
                      sx={{
                        p: 1,
                        borderRadius: '50%',
                        backgroundColor: '#E0F7FA',
                        color: '#00ACC1',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    >
                      <action.icon sx={{ fontSize: 20 }} />
                    </Box>
                  </Box>
                  
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 0.5,
                      color: '#215170',
                      fontSize: '1rem',
                    }}
                  >
                    {action.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#6B7280',
                      lineHeight: 1.4,
                      mb: 2,
                      fontSize: '0.85rem',
                      flex: 1,
                    }}
                  >
                    {action.description}
                  </Typography>
                  
                  <Button
                    variant={action.variant}
                    color={action.color}
                    size="small"
                    href={action.href}
                    target={action.target}
                    rel="noreferrer"
                    onClick={action.id === 'contact' ? handleCopyEmail : undefined}
                    sx={{
                      px: 2.5,
                      py: 1,
                      borderRadius: '8px',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      minWidth: '120px',
                      mt: 'auto',
                      ...(action.id === 'contribute' && {
                        background: 'linear-gradient(90deg, #1976d2 0%, #00C9A7 100%)',
                        '&:hover': {
                          background: 'linear-gradient(90deg, #1565c0 0%, #00B39A 100%)',
                        },
                      }),
                    }}
                  >
                    {action.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </Box>

       
      </Container>
    </Box>
  );
}
