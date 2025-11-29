"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import i18n from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";

// English translations
const en = {
  navbar: {
    about: "About",
    experiences: "Experiences",
    projects: "Projects",
    certifications: "Certifications",
    contact: "Contact"
  },
  hero: {
    greeting: "Hello, I'm",
    webDeveloper: "Web Developer",
    mobileDeveloper: "Mobile Developer",
    description: "I am passionate about creating innovative web and mobile solutions that bring ideas to life.",
    connect: "Let's Connect",
    downloadCV: "Download CV"
  },
  about: {
    title: "About Me",
    description: "I am a full stack web developer with a passion for creating interactive and responsive web applications."
  },
  tabs: {
    skills: "Skills",
    education: "Education"
  },
  skills: {
    html: "HTML5",
    css: "CSS3",
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
  },
  education: {
    epitech: "Epitech: The School of Excellence in Computer Science | Coding Academy",
    epitechAlt: "Epitech Logo",
    ifri: "Institute for Training and Research in Computer Science (IFRI) - University of Abomey-Calavi",
    ifriAlt: "IFRI Logo"
  },
  experiences: {
    title: "Professional Experiences",
    viewCV: "View / Download CV",
    resumePreview: "Resume Preview",
    open: "Open",
    bestExperts: {
      role: "Flutter / Laravel Developer",
      period: "July 2025",
      location: "Cotonou, Benin",
      description: "Developed a mobile application for tracking school activities, designed for teachers and parents."
    },
    tettrix: {
      role: "Fullstack Vue.js / Laravel Developer",
      period: "Oct 2024 — Jan 2025",
      location: "Remote",
      description: "Developed an innovative MVP in the healthcare domain using Vue.js and Laravel."
    },
    byteinnovit: {
      role: "Lead Front-End Developer",
      period: "July 2024 — Oct 2024",
      location: "Cotonou, Benin",
      description: "Designed interfaces and integrated APIs for a SaaS suite (Next.js / Tailwind-like design)."
    },
    fictagroup: {
      role: "React.js Developer Intern",
      period: "Apr 2024 — Aug 2024",
      location: "Remote",
      description: "Developed a React project for a university and a company specializing in agriculture."
    },
    mify: {
      role: "Analyst / Developer Intern",
      period: "Aug 2023 — Nov 2023",
      location: "Arconville, Benin",
      description: "Analyzed patient data to improve a predictive model for chronic kidney diseases."
    }
  },
  projects: {
    title: "My Projects",
    all: "All",
    web: "Web",
    mobile: "Mobile",
    project1: {
      title: "Website showcasing African models",
      description: "This is a static website built with HTML, CSS, Tailwind CSS, and JavaScript to promote African haute couture."
    },
    project2: {
      title: "Yowl Community",
      description: "Share your ideas, start discussions and discover what others are saying about a product online with VueJS, Laravel"
    },
    project3: {
      title: "Roten Movies",
      description: "Online film presentation platform with Next Js 16"
    },
    project4: {
      title: "Post It",
      description: "Design of a task management and organization platform with Vue.js - API WordPress"
    },
    project5: {
      title: "Kidney Doc",
      description: "Development of a patient data management platform for the nephrology department of a hospital center with Nextjs 14"
    }
  },
  certifications: {
    title: "My Certifications"
  },
  contact: {
    title: "Let's Connect",
    description: "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    emailLabel: "Your email",
    emailPlaceholder: "jacob@google.com",
    subjectLabel: "Subject",
    subjectPlaceholder: "Just saying hi",
    messageLabel: "Message",
    messagePlaceholder: "Let's talk about...",
    sendButton: "Send Message",
    successMessage: "Email sent successfully!",
    errorMessage: "Failed to send email. Please try again.",
    genericError: "An error occurred. Please try again."
  },
  footer: {
    copyright: "© 2025 - Samira MVOGO All rights reserved."
  }
};

// French translations
const fr = {
  navbar: {
    about: "À propos",
    experiences: "Expériences",
    projects: "Projets",
    certifications: "Certifications",
    contact: "Contact"
  },
  hero: {
    greeting: "Bonjour, je suis",
    webDeveloper: "Développeuse Web",
    mobileDeveloper: "Développeuse Mobile",
    description: "Je suis passionnée par la création de solutions web et mobiles innovantes qui donnent vie aux idées.",
    connect: "Entrons en contact",
    downloadCV: "Télécharger CV"
  },
  about: {
    title: "À propos de moi",
    description: "Je suis une développeuse web full stack passionnée par la création d'applications web interactives et réactives."
  },
  tabs: {
    skills: "Compétences",
    education: "Éducation"
  },
  skills: {
    html: "HTML5",
    css: "CSS3",
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
  },
  education: {
    epitech: "Epitech : L'école d'excellence en informatique | Coding Academy",
    epitechAlt: "Logo Epitech",
    ifri: "Institut de Formation et de Recherche en Informatique (IFRI) - Université d'Abomey-Calavi",
    ifriAlt: "Logo IFRI"
  },
  experiences: {
    title: "Expériences Professionnelles",
    viewCV: "Voir / Télécharger CV",
    resumePreview: "Aperçu du CV",
    open: "Ouvrir",
    bestExperts: {
      role: "Développeuse Flutter / Laravel",
      period: "Juillet 2025",
      location: "Cotonou, Bénin",
      description: "Développement d'une application mobile pour le suivi des activités scolaires, conçue pour les enseignants et les parents."
    },
    tettrix: {
      role: "Développeuse Fullstack Vue.js / Laravel",
      period: "Oct 2024 — Jan 2025",
      location: "Télétravail",
      description: "Développement d'un MVP innovant dans le domaine de la santé avec Vue.js et Laravel."
    },
    byteinnovit: {
      role: "Lead Développeuse Front-End",
      period: "Juil 2024 — Oct 2024",
      location: "Cotonou, Bénin",
      description: "Conception d'interfaces et intégration d'APIs pour une suite SaaS (design Next.js / Tailwind)."
    },
    fictagroup: {
      role: "Stagiaire Développeuse React.js",
      period: "Avr 2024 — Août 2024",
      location: "Télétravail",
      description: "Développement d'un projet React pour une université et une entreprise spécialisée dans l'agriculture."
    },
    mify: {
      role: "Stagiaire Analyste / Développeuse",
      period: "Août 2023 — Nov 2023",
      location: "Arconville, Bénin",
      description: "Analyse des données patients pour améliorer un modèle prédictif des maladies rénales chroniques."
    }
  },
  projects: {
    title: "Mes Projets",
    all: "Tous",
    web: "Web",
    mobile: "Mobile",
    project1: {
      title: "Site vitrine de modèles africains",
      description: "Site web statique construit avec HTML, CSS, Tailwind CSS et JavaScript pour promouvoir la haute couture africaine."
    },
    project2: {
      title: "Yowl Community",
      description: "Partagez vos idées, lancez des discussions et découvrez ce que les autres disent d'un produit en ligne avec VueJS, Laravel"
    },
    project3: {
      title: "Roten Movies",
      description: "Plateforme de présentation de films en ligne avec Next Js 16"
    },
    project4: {
      title: "Post It",
      description: "Conception d'une plateforme de gestion et d'organisation de tâches avec Vue.js - API WordPress"
    },
    project5: {
      title: "Kidney Doc",
      description: "Développement d'une plateforme de gestion des données patients pour le service de néphrologie d'un centre hospitalier avec Nextjs 14"
    }
  },
  certifications: {
    title: "Mes Certifications"
  },
  contact: {
    title: "Entrons en contact",
    description: "Je suis actuellement à la recherche de nouvelles opportunités, ma boîte de réception est toujours ouverte. Que vous ayez une question ou que vous vouliez simplement dire bonjour, je ferai de mon mieux pour vous répondre !",
    emailLabel: "Votre email",
    emailPlaceholder: "exemple@email.com",
    subjectLabel: "Sujet",
    subjectPlaceholder: "Juste pour dire bonjour",
    messageLabel: "Message",
    messagePlaceholder: "Parlons de...",
    sendButton: "Envoyer le message",
    successMessage: "Email envoyé avec succès !",
    errorMessage: "Échec de l'envoi de l'email. Veuillez réessayer.",
    genericError: "Une erreur s'est produite. Veuillez réessayer."
  },
  footer: {
    copyright: "© 2025 - Samira MVOGO Tous droits réservés."
  }
};

// Initialize i18n only once
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
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

  useEffect(() => {
    // Sync with i18n on mount
    const currentLang = i18n.language || "en";
    setLanguage(currentLang);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
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