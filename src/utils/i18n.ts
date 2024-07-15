import i18n from 'i18next';
import Backend from 'i18next-http-backend';

i18n.use(Backend).init({
  backend: {
    // for all available options read the backend's repository readme file
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
  fallbackLng: 'en', // use en if detected lng is not available
  saveMissing: true, // send not translated keys to endpoint
});

export default i18n;
