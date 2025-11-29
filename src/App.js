import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  const { t } = useTranslation();

  return (
    <div>
      <LanguageSwitcher />
      <h1>{t('welcome')}</h1>
      <p>{t('about')}</p>
      <p>{t('contact')}</p>
    </div>
  );
}

export default App;
