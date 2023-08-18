import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en';
import ja from './locales/ja';

i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    interpolation: {
        escapeValue: false,
    },
    lng: 'en',
    fallbackLng: 'en',
    resources: {
        en: {
            translation: en,
        },
        ja: {
            translation: ja,
        },
    },
});

export default i18next;
