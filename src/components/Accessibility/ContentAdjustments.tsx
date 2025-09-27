'use client';

import { Box, Typography, Slider, IconButton, Card, CardContent } from '@mui/material';
import { Remove, Add, FormatSize, Height, TextFields, ZoomIn } from '@mui/icons-material';

interface ContentAdjustmentsProps {
  settings: {
    fontScale: number;
    textSize: number;
    lineHeight: number;
    letterSpacing: number;
  };
  onChange: (key: string, value: number) => void;
}

export default function ContentAdjustments({ settings, onChange }: ContentAdjustmentsProps) {
  const adjustments = [
    {
      key: 'fontScale',
      label: 'Content Scaling',
      icon: <ZoomIn sx={{ fontSize: 20 }} />,
      min: 0.9,
      max: 1.3,
      step: 0.05,
      defaultValue: 1,
      description: 'Scale entire content'
    },
    {
      key: 'textSize',
      label: 'Font Sizing',
      icon: <FormatSize sx={{ fontSize: 20 }} />,
      min: 0.8,
      max: 1.5,
      step: 0.1,
      defaultValue: 1,
      description: 'Adjust text size'
    },
    {
      key: 'lineHeight',
      label: 'Line Height',
      icon: <Height sx={{ fontSize: 20 }} />,
      min: 1.2,
      max: 2.0,
      step: 0.1,
      defaultValue: 1.5,
      description: 'Space between lines'
    },
    {
      key: 'letterSpacing',
      label: 'Letter Spacing',
      icon: <TextFields sx={{ fontSize: 20 }} />,
      min: -0.5,
      max: 2.0,
      step: 0.1,
      defaultValue: 0,
      description: 'Space between letters'
    },
  ];

  return (
    <Card sx={{ 
      background: '#ffffff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      borderRadius: '12px',
      border: '1px solid #f0f0f0',
      '&:hover': {
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      },
      transition: 'all 0.2s ease'
    }}>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ 
          mb: 2, 
          fontWeight: 600, 
          color: '#374151',
          fontSize: '1.1rem'
        }}>
          Content Adjustments
        </Typography>
        
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
          gap: { xs: 2, sm: 3 } 
        }}>
          {adjustments.map((adjustment) => (
            <Box key={adjustment.key}>
              <Box sx={{ 
                p: 3, 
                height: 180,
                minHeight: 180,
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                background: '#ffffff',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  borderColor: '#3b82f6',
                  boxShadow: '0 4px 12px rgba(59,130,246,0.1)',
                },
                transition: 'all 0.2s ease'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <Box sx={{ color: '#3b82f6', mr: 1.5, mt: 0.5 }}>
                    {adjustment.icon}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle2" sx={{ 
                      fontWeight: 600, 
                      color: '#374151',
                      fontSize: '0.95rem',
                      mb: 0.5
                    }}>
                      {adjustment.label}
                    </Typography>
                    <Typography variant="caption" sx={{ 
                      color: '#6b7280',
                      fontSize: '0.8rem',
                      lineHeight: 1.3
                    }}>
                      {adjustment.description}
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  flex: 1,
                  justifyContent: 'center'
                }}>
                  <IconButton
                    size="small"
                    onClick={() => onChange(adjustment.key, Math.max(adjustment.min, settings[adjustment.key as keyof typeof settings] - adjustment.step))}
                    disabled={settings[adjustment.key as keyof typeof settings] <= adjustment.min}
                    sx={{ 
                      backgroundColor: '#f9fafb',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      width: 32,
                      height: 32,
                      '&:hover': { 
                        backgroundColor: '#f3f4f6',
                        borderColor: '#9ca3af'
                      },
                      '&:disabled': { opacity: 0.4 },
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <Remove sx={{ fontSize: 16, color: '#6b7280' }} />
                  </IconButton>
                  
                  <Box sx={{ flex: 1, mx: 1 }}>
                    <Slider
                      value={settings[adjustment.key as keyof typeof settings]}
                      onChange={(_, value) => onChange(adjustment.key, value as number)}
                      min={adjustment.min}
                      max={adjustment.max}
                      step={adjustment.step}
                      valueLabelDisplay="auto"
                      valueLabelFormat={(value) => `${Math.round(value * 100)}%`}
                      sx={{
                        '& .MuiSlider-thumb': {
                          backgroundColor: '#3b82f6',
                          width: 20,
                          height: 20,
                          '&:hover': {
                            backgroundColor: '#2563eb',
                          }
                        },
                        '& .MuiSlider-track': {
                          backgroundColor: '#3b82f6',
                          height: 4,
                        },
                        '& .MuiSlider-rail': {
                          backgroundColor: '#e5e7eb',
                          height: 4,
                        },
                      }}
                    />
                  </Box>
                  
                  <IconButton
                    size="small"
                    onClick={() => onChange(adjustment.key, Math.min(adjustment.max, settings[adjustment.key as keyof typeof settings] + adjustment.step))}
                    disabled={settings[adjustment.key as keyof typeof settings] >= adjustment.max}
                    sx={{ 
                      backgroundColor: '#f9fafb',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      width: 32,
                      height: 32,
                      '&:hover': { 
                        backgroundColor: '#f3f4f6',
                        borderColor: '#9ca3af'
                      },
                      '&:disabled': { opacity: 0.4 },
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <Add sx={{ fontSize: 16, color: '#6b7280' }} />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
