'use client';

import { Box, Typography, Stack, Button, Card, CardContent, Grid } from '@mui/material';
import { FormatAlignLeft, FormatAlignCenter, FormatAlignRight } from '@mui/icons-material';

interface AlignmentAdjustmentsProps {
  settings: {
    alignLeft: boolean;
    alignCenter: boolean;
    alignRight: boolean;
  };
  onToggle: (key: string) => void;
}

export default function AlignmentAdjustments({ settings, onToggle }: AlignmentAdjustmentsProps) {
  const alignmentOptions = [
    {
      key: 'alignLeft',
      label: 'Align Left',
      icon: <FormatAlignLeft sx={{ fontSize: 20 }} />,
      description: 'Left-align all text'
    },
    {
      key: 'alignCenter',
      label: 'Align Center',
      icon: <FormatAlignCenter sx={{ fontSize: 20 }} />,
      description: 'Center-align all text'
    },
    {
      key: 'alignRight',
      label: 'Align Right',
      icon: <FormatAlignRight sx={{ fontSize: 20 }} />,
      description: 'Right-align all text'
    }
  ];

  return (
    <Card sx={{ 
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
      borderRadius: '10px',
      border: '1px solid rgba(255,255,255,0.2)',
      backdropFilter: 'blur(10px)',
      '&:hover': {
        boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
        transform: 'translateY(-2px)',
      },
      transition: 'all 0.3s ease'
    }}>
      <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
        <Typography variant="h6" sx={{ 
          mb: { xs: 2, sm: 3 }, 
          fontWeight: 700, 
          color: '#1e293b',
          background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: { xs: '1rem', sm: '1.25rem' }
        }}>
          Text Alignment
        </Typography>
        
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
          gap: { xs: 2, sm: 3 }
        }}>
          {alignmentOptions.map((option) => (
            <Button
              key={option.key}
              fullWidth
              variant={settings[option.key as keyof typeof settings] ? 'contained' : 'outlined'}
              onClick={() => onToggle(option.key)}
              sx={{
                p: { xs: 2, sm: 3 },
                height: { xs: 120, sm: 140 },
                minHeight: { xs: 120, sm: 140 },
                flexDirection: 'column',
                gap: { xs: 1, sm: 1.5 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                  background: settings[option.key as keyof typeof settings] 
                    ? 'linear-gradient(135deg, #007BFF 0%, #0056B3 100%)' 
                    : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
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
                  },
                  textTransform: 'none',
                  borderRadius: '10px',
                  transition: 'all 0.3s ease',
                  border: '2px solid',
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
