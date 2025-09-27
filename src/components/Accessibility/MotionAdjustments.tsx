'use client';

import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import { Speed, Accessibility } from '@mui/icons-material';

interface MotionAdjustmentsProps {
  settings: {
    reduceMotion: boolean;
  };
  onToggle: (key: string) => void;
}

export default function MotionAdjustments({ settings, onToggle }: MotionAdjustmentsProps) {
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
          Motion Adjustments
        </Typography>
        
        <Button
          fullWidth
          variant={settings.reduceMotion ? 'contained' : 'outlined'}
          onClick={() => onToggle('reduceMotion')}
          sx={{
            p: { xs: 2, sm: 3 },
            height: { xs: 120, sm: 140 },
            minHeight: { xs: 120, sm: 140 },
            flexDirection: 'column',
            gap: { xs: 1, sm: 1.5 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: settings.reduceMotion 
              ? 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)' 
              : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            borderColor: settings.reduceMotion ? '#dc2626' : '#e2e8f0',
            color: settings.reduceMotion ? 'white' : '#475569',
            boxShadow: settings.reduceMotion 
              ? '0 8px 25px rgba(220,38,38,0.3)' 
              : '0 4px 15px rgba(0,0,0,0.05)',
            '&:hover': {
              background: settings.reduceMotion 
                ? 'linear-gradient(135deg, #b91c1c 0%, #991b1b 100%)' 
                : 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
              borderColor: '#dc2626',
              transform: 'translateY(-2px)',
              boxShadow: settings.reduceMotion 
                ? '0 12px 35px rgba(220,38,38,0.4)' 
                : '0 8px 25px rgba(0,0,0,0.1)',
            },
            textTransform: 'none',
            borderRadius: '10px',
            transition: 'all 0.3s ease',
            border: '2px solid',
          
          }}
        >
          <Box sx={{ color: 'inherit' }}>
            <Speed sx={{ fontSize: 20 }} />
          </Box>
          <Typography variant="body2" sx={{ 
            fontWeight: 600, 
            fontSize: { xs: '0.75rem', sm: '0.8rem' },
            textAlign: 'center',
            lineHeight: 1.2
          }}>
            Reduce Motion
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
            Disable animations and transitions
          </Typography>
        </Button>
      </CardContent>
    </Card>
  );
}
