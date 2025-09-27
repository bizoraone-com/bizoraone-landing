export const tokens = {
  motion: {
    duration: {
      fast: 0.16,
      normal: 0.24,
      slow: 0.32,
    },
    delay: {
      short: 0.06,
      medium: 0.12,
    },
    easing: {
      standard: [0.4, 0, 0.2, 1],
      decelerate: [0, 0, 0.2, 1],
      accelerate: [0.4, 0, 1, 1],
      sharp: [0.4, 0, 0.6, 1],
    },
    stagger: {
      small: 0.02,
      medium: 0.04,
      large: 0.06,
    },
  },

  colors: {
    primary: {
      50: '#E3F2FD',
      100: '#BBDEFB',
      200: '#90CAF9',
      300: '#64B5F6',
      400: '#42A5F5',
      500: '#007BFF',
      600: '#1E88E5',
      700: '#1976D2',
      800: '#1565C0',
      900: '#0D47A1',
    },
    accent: {
      50: '#E0F2F1',
      100: '#B2DFDB',
      200: '#80CBC4',
      300: '#4DB6AC',
      400: '#26A69A',
      500: '#00C9A7',
      600: '#00ACC1',
      700: '#009688',
      800: '#00695C',
      900: '#004D40',
    },
    neutral: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
    surface: {
      light: '#FFFFFF',
      dark: '#121212',
    },
    text: {
      primary: '#1E293B',
      secondary: '#6B7280',
      disabled: '#9CA3AF',
      inverse: '#FFFFFF',
    },
    status: {
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      info: '#3B82F6',
    },
  },

  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
  },

  typography: {
    fontFamily: {
      primary: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },

  shadows: {
    soft: '0 10px 30px rgba(0,0,0,0.08)',
    medium: '0 4px 12px rgba(0,0,0,0.15)',
    strong: '0 8px 24px rgba(0,0,0,0.25)',
    glow: '0 0 20px rgba(0,123,255,0.3)',
  },

  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.25rem',
    full: '9999px',
  },

  breakpoints: {
    xs: '0px',
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1536px',
  },

  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
  },
} as const;

export const createAnimation = (
  type: 'fade' | 'slide' | 'scale' | 'elevate',
  options: {
    duration?: keyof typeof tokens.motion.duration;
    delay?: keyof typeof tokens.motion.delay;
    easing?: keyof typeof tokens.motion.easing;
    distance?: number;
  } = {}
) => {
  const { duration = 'normal', delay = 'short', easing = 'standard', distance = 20 } = options;
  
  const baseTransition = {
    duration: tokens.motion.duration[duration],
    delay: tokens.motion.delay[delay],
    ease: tokens.motion.easing[easing],
  };

  switch (type) {
    case 'fade':
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: baseTransition,
      };
    case 'slide':
      return {
        initial: { opacity: 0, y: distance },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -distance },
        transition: baseTransition,
      };
    case 'scale':
      return {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
        transition: baseTransition,
      };
    case 'elevate':
      return {
        initial: { opacity: 0, y: distance, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: distance, scale: 0.95 },
        transition: baseTransition,
      };
    default:
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: baseTransition,
      };
  }
};

export const createStaggerAnimation = (
  staggerDelay: keyof typeof tokens.motion.stagger = 'medium'
) => ({
  animate: {
    transition: {
      staggerChildren: tokens.motion.stagger[staggerDelay],
    },
  },
});
