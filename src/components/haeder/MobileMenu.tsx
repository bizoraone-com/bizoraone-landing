'use client';

import { IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

interface MobileMenuProps {
  isScrolled: boolean;
  onOpen: () => void;
}

export default function MobileMenu({ isScrolled, onOpen }: MobileMenuProps) {
  return (
    <IconButton
      sx={{ 
        display: { xs: 'flex', md: 'none' },
        color: isScrolled ? '#1E293B' : 'white'
      }}
      onClick={onOpen}
    >
      <MenuIcon />
    </IconButton>
  );
}
