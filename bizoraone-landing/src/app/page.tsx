'use client';

import { Box, Container, Typography, Card, CardContent, Stack, Button } from '@mui/material';
import Header from "@/components/haeder/Header";
import Footer from "@/components/Footer";
import StickyHeader from "@/components/haeder/StickyHeader";
import HowItWorks from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Contact } from "@/components/Contact";
import { useLanguage } from "@/components/Language";

export default function HomePage() {
  const { t } = useLanguage();
  
  return (
    <Box component="main" suppressHydrationWarning>
      <StickyHeader />
      <Header />
      <Features />
      <HowItWorks />
      <FAQ />
      <Contact />
      <Footer />
    </Box>
  );
}