import i18n from 'i18next';
import { initReactI18next, } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationVI from './locales/vi/translation.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: translationEN
            },
            vi: {
                translation: translationVI
            }
        },
        lng: 'en', // default language
        fallbackLng: 'en', // fallback language
        interpolation: {
            escapeValue: false // react already save from xss (Cross Site Scripting)
        }
    });

export default i18n;