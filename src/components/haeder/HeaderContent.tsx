'use client';

import { Box, Container, Toolbar } from '@mui/material';
import Logo from '../Logo';
import DesktopNavigation from './DesktopNavigation';
import MobileMenu from './MobileMenu';

interface HeaderContentProps {
  isScrolled: boolean;
  onMobileMenuOpen: () => void;
}

export default function HeaderContent({ 
  isScrolled, 
  onMobileMenuOpen 
}: HeaderContentProps) {
  return (
    <Toolbar sx={{ minHeight: { xs: 64, sm: 72 }, px: 0 }}>
      <Container maxWidth="xl" disableGutters sx={{ px: { xs: 2, md: 3 } }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          width: '100%' 
        }}>
        
          <Box>
            <Logo size="medium" variant="default" />
          </Box>
          
     
          <DesktopNavigation 
            isScrolled={isScrolled}
          />

      
          <MobileMenu 
            isScrolled={isScrolled}
            onOpen={onMobileMenuOpen}
          />
        </Box>
      </Container>
    </Toolbar>
  );
}
