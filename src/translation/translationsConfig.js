import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {translationsDe} from './translationsDe';
import {translationsEn} from './translationsEn';

i18next
    .use(initReactI18next)
    .init({
        lng: "de",
        fallbackLng: "en",
        resources: {
            en: { translation: translationsEn},
            de: { translation: translationsDe},
        }

})