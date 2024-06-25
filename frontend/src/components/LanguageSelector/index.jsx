import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
      setLanguage(prevLang => (prevLang === 'en' ? 'vi' : 'en'));
    };

    useEffect(() => {
      i18n.changeLanguage(language);
    }, [language, i18n]);

    return (
      <div className="absolute top-6 right-10">
        <label className='flex cursor-pointer gap-2'>
          <span className='label-text'>EN</span>
          <input
            type='checkbox'
            value={language}
            checked={language === 'vi'}
            className='toggle theme-controller'
            onChange={toggleLanguage}
          />
          <span className='label-text'>VI</span>
        </label>
      </div>
    );
};

export default LanguageSelector;