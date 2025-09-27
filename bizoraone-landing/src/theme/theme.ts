import { createTheme } from '@mui/material/styles';
import { tokens } from './tokens';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: tokens.colors.primary[500],
      light: tokens.colors.primary[300],
      dark: tokens.colors.primary[700],
      contrastText: tokens.colors.text.inverse,
    },
    secondary: {
      main: tokens.colors.accent[500],
      light: tokens.colors.accent[300],
      dark: tokens.colors.accent[700],
      contrastText: tokens.colors.text.inverse,
    },
    background: {
      default: tokens.colors.surface.light,
      paper: tokens.colors.surface.light,
    },
    text: {
      primary: tokens.colors.text.primary,
      secondary: tokens.colors.text.secondary,
      disabled: tokens.colors.text.disabled,
    },
    success: {
      main: tokens.colors.status.success,
    },
    warning: {
      main: tokens.colors.status.warning,
    },
    error: {
      main: tokens.colors.status.error,
    },
    info: {
      main: tokens.colors.status.info,
    },
  },
  
  typography: {
    fontFamily: tokens.typography.fontFamily.primary.join(','),
    h1: {
      fontSize: tokens.typography.fontSize['6xl'],
      fontWeight: 800,
      lineHeight: tokens.typography.lineHeight.tight,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontSize: tokens.typography.fontSize['5xl'],
      fontWeight: 700,
      lineHeight: tokens.typography.lineHeight.tight,
      letterSpacing: '-0.025em',
    },
    h3: {
      fontSize: tokens.typography.fontSize['4xl'],
      fontWeight: 600,
      lineHeight: tokens.typography.lineHeight.tight,
    },
    h4: {
      fontSize: tokens.typography.fontSize['3xl'],
      fontWeight: 600,
      lineHeight: tokens.typography.lineHeight.normal,
    },
    h5: {
      fontSize: tokens.typography.fontSize['2xl'],
      fontWeight: 600,
      lineHeight: tokens.typography.lineHeight.normal,
    },
    h6: {
      fontSize: tokens.typography.fontSize.xl,
      fontWeight: 600,
      lineHeight: tokens.typography.lineHeight.normal,
    },
    body1: {
      fontSize: tokens.typography.fontSize.base,
      lineHeight: tokens.typography.lineHeight.normal,
    },
    body2: {
      fontSize: tokens.typography.fontSize.sm,
      lineHeight: tokens.typography.lineHeight.normal,
    },
    button: {
      fontSize: tokens.typography.fontSize.sm,
      fontWeight: 600,
      textTransform: 'none',
    },
  },

  spacing: (factor: number) => `${factor * 8}px`,

  shape: {
    borderRadius: parseInt(tokens.borderRadius.lg),
  },

  shadows: [
    'none',
    `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`,
    `0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)`,
    `0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)`,
    `0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)`,
    `0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)`,
    `0 25px 50px rgba(0,0,0,0.25), 0 20px 20px rgba(0,0,0,0.20)`,
    `0 30px 60px rgba(0,0,0,0.25), 0 25px 25px rgba(0,0,0,0.20)`,
    `0 35px 70px rgba(0,0,0,0.25), 0 30px 30px rgba(0,0,0,0.20)`,
    `0 40px 80px rgba(0,0,0,0.25), 0 35px 35px rgba(0,0,0,0.20)`,
    `0 45px 90px rgba(0,0,0,0.25), 0 40px 40px rgba(0,0,0,0.20)`,
    `0 50px 100px rgba(0,0,0,0.25), 0 45px 45px rgba(0,0,0,0.20)`,
    `0 55px 110px rgba(0,0,0,0.25), 0 50px 50px rgba(0,0,0,0.20)`,
    `0 60px 120px rgba(0,0,0,0.25), 0 55px 55px rgba(0,0,0,0.20)`,
    `0 65px 130px rgba(0,0,0,0.25), 0 60px 60px rgba(0,0,0,0.20)`,
    `0 70px 140px rgba(0,0,0,0.25), 0 65px 65px rgba(0,0,0,0.20)`,
    `0 75px 150px rgba(0,0,0,0.25), 0 70px 70px rgba(0,0,0,0.20)`,
    `0 80px 160px rgba(0,0,0,0.25), 0 75px 75px rgba(0,0,0,0.20)`,
    `0 85px 170px rgba(0,0,0,0.25), 0 80px 80px rgba(0,0,0,0.20)`,
    `0 90px 180px rgba(0,0,0,0.25), 0 85px 85px rgba(0,0,0,0.20)`,
    `0 95px 190px rgba(0,0,0,0.25), 0 90px 90px rgba(0,0,0,0.20)`,
    `0 100px 200px rgba(0,0,0,0.25), 0 95px 95px rgba(0,0,0,0.20)`,
    `0 105px 210px rgba(0,0,0,0.25), 0 100px 100px rgba(0,0,0,0.20)`,
    `0 110px 220px rgba(0,0,0,0.25), 0 105px 105px rgba(0,0,0,0.20)`,
    `0 115px 230px rgba(0,0,0,0.25), 0 110px 110px rgba(0,0,0,0.20)`,
  ],

  transitions: {
    duration: {
      shortest: tokens.motion.duration.fast * 1000,
      shorter: tokens.motion.duration.normal * 1000,
      short: tokens.motion.duration.normal * 1000,
      standard: tokens.motion.duration.normal * 1000,
      complex: tokens.motion.duration.slow * 1000,
      enteringScreen: tokens.motion.duration.normal * 1000,
      leavingScreen: tokens.motion.duration.fast * 1000,
    },
    easing: {
      easeInOut: `cubic-bezier(${tokens.motion.easing.standard.join(', ')})`,
      easeOut: `cubic-bezier(${tokens.motion.easing.decelerate.join(', ')})`,
      easeIn: `cubic-bezier(${tokens.motion.easing.accelerate.join(', ')})`,
      sharp: `cubic-bezier(${tokens.motion.easing.sharp.join(', ')})`,
    },
  },

  breakpoints: {
    values: {
      xs: parseInt(tokens.breakpoints.xs),
      sm: parseInt(tokens.breakpoints.sm),
      md: parseInt(tokens.breakpoints.md),
      lg: parseInt(tokens.breakpoints.lg),
      xl: parseInt(tokens.breakpoints.xl),
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: tokens.borderRadius.lg,
          padding: `${tokens.spacing.sm} ${tokens.spacing.lg}`,
          fontSize: tokens.typography.fontSize.sm,
          fontWeight: 600,
          textTransform: 'none',
          transition: `all ${tokens.motion.duration.normal}ms ${tokens.motion.easing.standard}`,
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: tokens.shadows.medium,
          },
        },
        contained: {
          background: `linear-gradient(135deg, ${tokens.colors.primary[500]} 0%, ${tokens.colors.accent[500]} 100%)`,
          '&:hover': {
            background: `linear-gradient(135deg, ${tokens.colors.primary[600]} 0%, ${tokens.colors.accent[600]} 100%)`,
          },
        },
        outlined: {
          borderColor: tokens.colors.neutral[300],
          color: tokens.colors.text.primary,
          '&:hover': {
            borderColor: tokens.colors.primary[500],
            backgroundColor: tokens.colors.primary[50],
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: tokens.borderRadius['2xl'],
          boxShadow: tokens.shadows.soft,
          border: `1px solid ${tokens.colors.neutral[200]}`,
          transition: `all ${tokens.motion.duration.normal}ms ${tokens.motion.easing.standard}`,
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: tokens.shadows.medium,
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '72rem',
          paddingLeft: tokens.spacing.lg,
          paddingRight: tokens.spacing.lg,
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  ...theme,
  palette: {
    ...theme.palette,
    mode: 'dark',
    background: {
      default: tokens.colors.surface.dark,
      paper: '#1E1E1E',
    },
    text: {
      primary: tokens.colors.text.inverse,
      secondary: tokens.colors.neutral[400],
      disabled: tokens.colors.neutral[600],
    },
  },
  components: {
    ...theme.components,
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#2A2A2A',
          border: `1px solid ${tokens.colors.neutral[700]}`,
        },
      },
    },
  },
});
