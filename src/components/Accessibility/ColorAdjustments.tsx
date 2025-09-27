'use client';

import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import { 
  DarkMode, 
  LightMode, 
  Contrast,
  FilterVintage,
  FilterBAndW,
  ColorLens
} from '@mui/icons-material';

interface ColorAdjustmentsProps {
  settings: {
    darkContrast: boolean;
    lightContrast: boolean;
    highContrast: boolean;
    monochrome: boolean;
    lowSaturation: boolean;
    highSaturation: boolean;
  };
  onToggle: (key: string) => void;
}
const colorOptions = [
  {
    key: 'darkContrast',
    label: 'Dark Contrast',
    icon: <DarkMode sx={{ fontSize: 20 }} />,
    description: 'Enhanced dark contrast'
  },
  {
    key: 'lightContrast',
    label: 'Light Contrast',
    icon: <LightMode sx={{ fontSize: 20 }} />,
    description: 'Enhanced light contrast'
  },
  {
    key: 'highContrast',
    label: 'High Contrast',
    icon: <Contrast sx={{ fontSize: 20 }} />,
    description: 'Maximum contrast mode'
  },
  {
    key: 'monochrome',
    label: 'Monochrome',
    icon: <FilterBAndW sx={{ fontSize: 20 }} />,
    description: 'Grayscale display'
  },
  {
    key: 'lowSaturation',
    label: 'Low Saturation',
    icon: <FilterVintage sx={{ fontSize: 20 }} />,
    description: 'Reduced color intensity'
  },
  {
    key: 'highSaturation',
    label: 'High Saturation',
    icon: <ColorLens sx={{ fontSize: 20 }} />,
    description: 'Enhanced color intensity'
  }
];


export default function ColorAdjustments({ settings, onToggle }: ColorAdjustmentsProps) {
 

  return (
    <Card sx={{ 
      boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
      borderRadius: '10px',
    }}>
      <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
        <Typography variant="h6" sx={{ mb: { xs: 2, sm: 3 }, fontWeight: 700, display: 'flex', fontSize: { xs: '1rem', sm: '1.25rem' } }}>
          Color Adjustments
        </Typography>
        
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)' },
          gap: { xs: 1.5, sm: 2 }
        }}>
          {colorOptions.map((option) => (
            <Button   
              key={option.key}
              onClick={() => onToggle(option.key)}
              sx={{
                p: { xs: 2, sm: 3 },
                height: { xs: 120, sm: 140 },
                flexDirection: 'column',
                gap: { xs: 1, sm: 1.5 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '10px',
                transition: 'all 0.3s ease',
                background: settings[option.key as keyof typeof settings] 
                  ? 'linear-gradient(135deg, #007BFF 0%, #0056B3 100%)' 
                  : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                border: '2px solid',
                borderColor: settings[option.key as keyof typeof settings] ? '#007BFF' : '#e2e8f0',
                color: settings[option.key as keyof typeof settings] ? 'white' : '#475569',
                boxShadow: settings[option.key as keyof typeof settings] 
                  ? '0 8px 25px rgba(0,123,255,0.3)' 
                  : '0 4px 15px rgba(0,0,0,0.05)',
                '&:hover': {
                  background: settings[option.key as keyof typeof settings] 
                    ? 'linear-gradient(135deg, #0056B3 0%, #003d82 100%)' 
                    : 'linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%)',
                  borderColor: '#007BFF',
                  transform: 'translateY(-2px)',
                  boxShadow: settings[option.key as keyof typeof settings] 
                    ? '0 12px 35px rgba(0,123,255,0.4)' 
                    : '0 8px 25px rgba(0,0,0,0.1)',
                }
              }}
            >
                <Box sx={{ color: 'inherit' }}>
                  {option.icon}
                </Box>
                <Typography variant="body2" sx={{ 
                  fontWeight: 600, 
                  fontSize: { xs: '0.75rem', sm: '0.8rem' },
                  textAlign: 'center',
                  lineHeight: 1.2
                }}>
                  {option.label}
                </Typography>
                <Typography variant="caption" sx={{ 
                  opacity: 0.8,
                  textAlign: 'center',
                  lineHeight: 1.2,
                  fontSize: { xs: '0.6rem', sm: '0.7rem' },
                  fontWeight: 500,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {option.description}
                </Typography>
              </Button>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
