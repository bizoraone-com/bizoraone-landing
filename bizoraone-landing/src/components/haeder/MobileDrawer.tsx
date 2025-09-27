'use client';

import { Box, Drawer, List, ListItem, Button, Divider, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import Logo from '../Logo';
import { LanguageSelector } from '@/components/Language';
import { useLanguage } from '@/components/Language';
import { Social } from '@/components/Contact';

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const { t } = useLanguage();
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: 280,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Logo size="small" variant="default" />
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        
        <Divider sx={{ mb: 2 }} />
        
        <List>
          <ListItem>
            <Button 
              href="#features" 
              fullWidth
              sx={{ 
                color: '#1E293B',
                textTransform: 'none',
                fontWeight: 500,
                justifyContent: 'flex-start'
              }}
              onClick={onClose}
            >
              {t('nav.about')}
            </Button>
          </ListItem>
          <ListItem>
            <Button 
              href="#how-it-works" 
              fullWidth
              sx={{ 
                color: '#1E293B',
                textTransform: 'none',
                fontWeight: 500,
                justifyContent: 'flex-start'
              }}
              onClick={onClose}
            >
              {t('nav.howItWorks')}
            </Button>
          </ListItem>
          <ListItem>
            <Button 
              href="#faq" 
              fullWidth
              sx={{ 
                color: '#1E293B',
                textTransform: 'none',
                fontWeight: 500,
                justifyContent: 'flex-start'
              }}
              onClick={onClose}
            >
              {t('nav.faqs')}
            </Button>
          </ListItem>
          <ListItem>
            <Button 
              href="#contact" 
              fullWidth
              sx={{ 
                color: '#1E293B',
                textTransform: 'none',
                fontWeight: 500,
                justifyContent: 'flex-start'
              }}
              onClick={onClose}
            >
              {t('nav.contact')}
            </Button>
          </ListItem>
        </List>
        
        <Divider sx={{ my: 2 }} />
        
        <Box sx={{ px: 2, mb: 2 }}>
          <LanguageSelector size="small" variant="mobile" />
        </Box>
        
        <Divider sx={{ mb: 2 }} />
        
        <Box sx={{ px: 2 }}>
          <Social />
        </Box>
      </Box>
    </Drawer>
  );
}
