'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'EN' | 'HE' | 'ES' | 'FR';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

import enTranslations from './translations/en.json';
import heTranslations from './translations/he.json';
import esTranslations from './translations/es.json';
import frTranslations from './translations/fr.json';

const translations = {
  EN: enTranslations,
  HE: heTranslations,
  ES: esTranslations,
  FR: frTranslations,
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('EN');

  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem('bizoraone-language') as Language;
      if (savedLanguage && ['EN', 'HE', 'ES', 'FR'].includes(savedLanguage)) {
        setLanguage(savedLanguage);
      }
    } catch (error) {
      console.warn('Failed to load language from localStorage:', error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('bizoraone-language', language);
    } catch (error) {
      console.warn('Failed to save language to localStorage:', error);
    }
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
