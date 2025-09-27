'use client';

import { Box, FormControl, Select, MenuItem, Typography } from '@mui/material';
import { useLanguage } from './LanguageContext';

interface LanguageSelectorProps {
  size?: 'small' | 'medium';
  variant?: 'desktop' | 'mobile';
  textColor?: string;
}

export default function LanguageSelector({ 
  size = 'medium', 
  variant = 'desktop',
  textColor = '#1E293B'
}: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'HE', name: 'עברית' },
    { code: 'ES', name: 'Español' },
    { code: 'FR', name: 'Français' },
  ];

  return (
    <Box sx={{ minWidth: variant === 'mobile' ? 120 : 100 }}>
      <FormControl fullWidth size={size}>
        <Select
          value={language}
          onChange={(e) => setLanguage(e.target.value )}
          MenuProps={{
            disableScrollLock: true,
            PaperProps: {
              sx: {
                backgroundColor: 'transparent',
                boxShadow: 'none',
                border: 'none',
                width: '140px',
                '& .MuiMenuItem-root': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  margin: '4px 8px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
                    
                  },
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    fontWeight: 600,
                    boxShadow: '0 8px 30px rgba(0, 123, 255, 0.1)',
                  },
                  '&.Mui-selected:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  },
                },
              },
            },
          }}
          sx={{
            color: textColor,
            borderRadius: '10px',
            width: '123px',
            backgroundColor: 'transparent',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent',
            },
            '&:hover': {
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent',
            },
            '&.Mui-focused': {
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              boxShadow: '0 8px 30px rgba(0, 123, 255, 0.2)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent',
            },
            '& .MuiSelect-select': {
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              padding: '2px 14px',
              fontWeight: 500,
              transition: 'color 0.3s ease',
            },
            '& .MuiSvgIcon-root': {
              color: textColor,
              transition: 'transform 0.3s ease',
            },
            
          }}
        >
          {languages.map((lang) => (
            <MenuItem key={lang.code} value={lang.code}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, py: 0.5, height: '25px'}}>
               
                <Typography variant="body2" sx={{ fontWeight: 500, color: textColor, transition: 'color 0.3s ease' }}>
                  {lang.name}
                </Typography>
              </Box>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

