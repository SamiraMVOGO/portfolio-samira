"use client";

import React, { createContext, useContext, useState } from "react";
import i18n from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";

// Locale resources - expanded from existing i18n/locales files
const resources = {
  en: {
    translation: {
      welcome: "Welcome to my portfolio",
      about: {
        title: "About Me",
        description: "I am a passionate full-stack web and mobile developer with experience in modern technologies such as React, Next.js, Vue.js, Laravel, and more."
      },
      tabs: {
        skills: "Skills",
        education: "Education"
      },
      skills: {
        html: "HTML",
        css: "CSS",
        js: "JavaScript",
        python: "Python",
        php: "PHP",
        react: "React",
        vue: "Vue.js",
        next: "Next.js",
        laravel: "Laravel",
        flask: "Flask",
        nest: "NestJS",
        git: "Git",
        gitlab: "GitLab",
        docker: "Docker",
        tailwind: "Tailwind CSS"
      }
    }
  },
  fr: {
    translation: {
      welcome: "Bienvenue sur mon portfolio",
      about: {
        title: "À Propos de Moi",
        description: "Je suis une développeuse full-stack web et mobile passionnée avec une expérience dans les technologies modernes telles que React, Next.js, Vue.js, Laravel, et plus encore."
      },
      tabs: {
        skills: "Compétences",
        education: "Éducation"
      },
      skills: {
        html: "HTML",
        css: "CSS",
        js: "JavaScript",
        python: "Python",
        php: "PHP",
        react: "React",
        vue: "Vue.js",
        next: "Next.js",
        laravel: "Laravel",
        flask: "Flask",
        nest: "NestJS",
        git: "Git",
        gitlab: "GitLab",
        docker: "Docker",
        tailwind: "Tailwind CSS"
      }
    }
  }
};

// Initialize i18next once on module load
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
}

// Créer le contexte
const LanguageContext = createContext();

// Fournisseur de contexte
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    const newLang = language === "en" ? "fr" : "en";
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
        {children}
      </LanguageContext.Provider>
    </I18nextProvider>
  );
};

// Hook pour utiliser le contexte
export const useLanguage = () => useContext(LanguageContext);