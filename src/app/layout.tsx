import type { Metadata } from "next";
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/components/Language';
import Accessibility from '@/components/Accessibility/Accessibility';
import "./globals.css";

export const metadata: Metadata = {
  title: "BizoraOne — AI for SMBs",
  description:
    "All-in-one AI: chat with customers, get insights, launch a site, and grow smarter.",
  icons: {
    icon: '/bizoraoneLogoIcon.png',
    shortcut: '/bizoraoneLogoIcon.png',
    apple: '/bizoraoneLogoIcon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <LanguageProvider>
          <ThemeProvider>
            {children}
            <Accessibility />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}