'use client';

import { Box } from '@mui/material';
import Header from "@/components/haeder/Header";
import Footer from "@/components/Footer";
import StickyHeader from "@/components/haeder/StickyHeader";
import HowItWorks from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Contact } from "@/components/Contact";

export default function HomePage() {
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