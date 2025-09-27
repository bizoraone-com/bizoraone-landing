'use client';

import { useEffect, useState } from 'react';
import { Box, Fab, Drawer, Typography, Stack, Portal, IconButton } from '@mui/material';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import CloseIcon from '@mui/icons-material/Close';
import RefreshIcon from '@mui/icons-material/Refresh';
import ColorAdjustments from './ColorAdjustments';
import ContentAdjustments from './ContentAdjustments';
import TextAdjustments from './TextAdjustments';
import AlignmentAdjustments from './AlignmentAdjustments';
import MotionAdjustments from './MotionAdjustments';
import { useLanguage } from '@/components/Language';

const STORAGE_KEY = 'a11y-settings-v1';

type A11ySettings = {
  highContrast: boolean;
  readableFont: boolean;
  reduceMotion: boolean;
  highlightLinks: boolean;
  fontScale: number;
  nightMode: boolean;
  textSize: number;
  lineHeight: number;
  letterSpacing: number;
  highlightTitles: boolean;
  textMagnifier: boolean;
  alignCenter: boolean;
  alignLeft: boolean;
  alignRight: boolean;
  darkContrast: boolean;
  lightContrast: boolean;
  monochrome: boolean;
  lowSaturation: boolean;
  highSaturation: boolean;
};

const defaultSettings: A11ySettings = {
  highContrast: false,
  readableFont: false,
  reduceMotion: false,
  highlightLinks: false,
  fontScale: 1,
  nightMode: false,
  textSize: 1,
  lineHeight: 1.5,
  letterSpacing: 0,
  highlightTitles: false,
  textMagnifier: false,
  alignCenter: false,
  alignLeft: false,
  alignRight: false,
  darkContrast: false,
  lightContrast: false,
  monochrome: false,
  lowSaturation: false,
  highSaturation: false,
};

export default function Accessibility() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<A11ySettings>(defaultSettings);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setSettings({ ...defaultSettings, ...JSON.parse(raw) });
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    
    
    const timeoutId = setTimeout(() => {
      const body = document.body;
      const root = document.documentElement;

    body.toggleAttribute('data-a11y-contrast', settings.highContrast);
    body.toggleAttribute('data-a11y-readable-font', settings.readableFont);
    body.toggleAttribute('data-a11y-reduce-motion', settings.reduceMotion);
    body.toggleAttribute('data-a11y-highlight-links', settings.highlightLinks);
    body.toggleAttribute('data-a11y-night-mode', settings.nightMode);
    body.toggleAttribute('data-a11y-highlight-titles', settings.highlightTitles);
    body.toggleAttribute('data-a11y-text-magnifier', settings.textMagnifier);
    body.toggleAttribute('data-a11y-align-center', settings.alignCenter);
    body.toggleAttribute('data-a11y-align-left', settings.alignLeft);
    body.toggleAttribute('data-a11y-align-right', settings.alignRight);
    body.toggleAttribute('data-a11y-dark-contrast', settings.darkContrast);
    body.toggleAttribute('data-a11y-light-contrast', settings.lightContrast);
    body.toggleAttribute('data-a11y-monochrome', settings.monochrome);
    body.toggleAttribute('data-a11y-low-saturation', settings.lowSaturation);
    body.toggleAttribute('data-a11y-high-saturation', settings.highSaturation);

    root.style.setProperty('--a11y-font-scale', String(settings.fontScale));
    root.style.setProperty('--a11y-text-size', String(settings.textSize));
    root.style.setProperty('--a11y-line-height', String(settings.lineHeight));
    root.style.setProperty('--a11y-letter-spacing', `${settings.letterSpacing}px`);

      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
      } catch {}
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [settings]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const body = document.body;
    if (open) {
      body.setAttribute('data-a11y-panel-open', 'true');
    } else {
      body.removeAttribute('data-a11y-panel-open');
    }
  }, [open]);

  const handleChange = (key: string, value: boolean | number) => {
    setSettings(prev => ({ ...prev, [key as keyof A11ySettings]: value }));
  };

  const toggle = (key: string) => {
    setSettings(prev => ({ ...prev, [key as keyof A11ySettings]: !prev[key as keyof A11ySettings] }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  return (
    <>
      <Portal>
        <Fab
          color="primary"
          aria-label="Accessibility adjustments"
          onClick={() => setOpen(true)}
          sx={{
            position: 'fixed',
            right: 16,
            bottom: 16,
            zIndex: 9999,
            pointerEvents: 'auto',
          }}
        >
          <AccessibilityNewIcon />
        </Fab>
      </Portal>

      <Drawer 
        anchor="right" 
        open={open} 
        onClose={() => setOpen(false)} 
        keepMounted
        sx={{
          '& .MuiDrawer-paper': {
            background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
            color: '#1e293b',
            filter: 'none !important',
            width: { xs: '100vw', sm: 500 },
            maxWidth: { xs: '100vw', sm: 500 },
            boxShadow: { xs: 'none', sm: '-10px 0 30px rgba(0,0,0,0.1)' },
          },
        }}
      >
        <Box className="a11y-panel" sx={{ 
          width: { xs: '100%', sm: 500 }, 
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          background: 'transparent',
          color: '#1e293b',
        }} role="dialog" aria-label="Accessibility adjustments">
          
          {/* Header */}
          <Box sx={{ 
            p: { xs: 2, sm: 3 }, 
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
          }}>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5, fontSize: { xs: '1.1rem', sm: '1.5rem' } }}>
                {t('accessibility.title')}
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.8, fontSize: { xs: '0.7rem', sm: '0.75rem' } }}>
                {t('accessibility.subtitle')}
              </Typography>
            </Box>
            <IconButton 
              onClick={() => setOpen(false)}
              sx={{ 
                color: 'white',
                backgroundColor: 'rgba(255,255,255,0.1)',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' }
              }}
              aria-label="Close accessibility panel"
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Action Buttons */}
          <Box sx={{ 
            p: { xs: 2, sm: 3 }, 
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            borderBottom: '1px solid #e2e8f0',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
          }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <IconButton 
                onClick={resetSettings}
                sx={{ 
                  backgroundColor: '#f1f5f9',
                  color: '#475569',
                  border: '1px solid #e2e8f0',
                  borderRadius: 2,
                  '&:hover': { 
                    backgroundColor: '#e2e8f0',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  },
                  transition: 'all 0.2s ease'
                }}
                aria-label="Reset all settings"
              >
                <RefreshIcon />
              </IconButton>
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 600, color: '#1e293b' }}>
                  {t('accessibility.reset')}
                </Typography>
                <Typography variant="caption" sx={{ color: '#64748b' }}>
                  {t('accessibility.resetDesc')}
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* Content */}
          <Box sx={{ 
            flex: 1, 
            p: { xs: 2, sm: 3 }, 
            overflow: 'auto',
            background: 'transparent'
          }}>
            <Stack spacing={{ xs: 2, sm: 4 }}>
              <ColorAdjustments 
                settings={{
                  darkContrast: settings.darkContrast,
                  lightContrast: settings.lightContrast,
                  highContrast: settings.highContrast,
                  monochrome: settings.monochrome,
                  lowSaturation: settings.lowSaturation,
                  highSaturation: settings.highSaturation,
                }}
                onToggle={toggle}
              />

              <ContentAdjustments 
                settings={{
                  fontScale: settings.fontScale,
                  textSize: settings.textSize,
                  lineHeight: settings.lineHeight,
                  letterSpacing: settings.letterSpacing,
                }}
                onChange={handleChange}
              />

              <TextAdjustments 
                settings={{
                  readableFont: settings.readableFont,
                  highlightTitles: settings.highlightTitles,
                  highlightLinks: settings.highlightLinks,
                  textMagnifier: settings.textMagnifier,
                }}
                onToggle={toggle}
              />

              <AlignmentAdjustments 
                settings={{
                  alignLeft: settings.alignLeft,
                  alignCenter: settings.alignCenter,
                  alignRight: settings.alignRight,
                }}
                onToggle={toggle}
              />

              <MotionAdjustments 
                settings={{
                  reduceMotion: settings.reduceMotion,
                }}
                onToggle={toggle}
              />
            </Stack>
          </Box>

          {/* Footer */}
          <Box sx={{ 
            p: { xs: 2, sm: 3 }, 
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            color: 'white',
            textAlign: 'center',
            boxShadow: '0 -4px 20px rgba(0,0,0,0.15)'
          }}>
            <Typography variant="caption" sx={{ 
              color: '#94a3b8',
              fontSize: '0.75rem',
              fontWeight: 500
            }}>
              {t('accessibility.poweredBy')}
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
