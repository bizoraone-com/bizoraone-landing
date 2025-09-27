'use client';

import { Box, Typography, Stack, IconButton } from '@mui/material';
import { LinkedIn, Facebook, WhatsApp } from '@mui/icons-material';
import { useLanguage } from '@/components/Language';

const socialActions = [
  {
    id: 'linkedin',
    icon: LinkedIn,
    href: 'https://linkedin.com/company/bizoraone',
    color: '#0077B5',
  },
  {
    id: 'facebook',
    icon: Facebook,
    href: 'https://facebook.com/bizoraone',
    color: '#1877F2',
  },
  {
    id: 'whatsapp',
    icon: WhatsApp,
    href: 'https://wa.me/1234567890',
    color: '#25D366',
  },
];

export default function Social() {
  const { t } = useLanguage();

  return (
    <Box sx={{ textAlign: 'center' }} suppressHydrationWarning>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 1.5,
            color: '#215170',
            fontSize: '1.1rem',
          }}
        >
          {t('contact.share.title')}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#6B7280',
            mb: 2.5,
            fontSize: '0.9rem',
          }}
        >
          {t('contact.share.description')}
        </Typography>
        
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ flexWrap: 'wrap', gap: 2 }}
        >
          {socialActions.map((social) => (
            <IconButton
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              sx={{
                backgroundColor: social.color,
                color: '#FFFFFF',
                '&:hover': {
                  backgroundColor: social.color,
                  opacity: 0.9,
                  transform: 'scale(1.05)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <social.icon />
            </IconButton>
          ))}
        </Stack>
      </Box>
  );
}
