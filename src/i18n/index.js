import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import english from './languages/en.json';
import chinese from './languages/zh.json';

var numeral = require('numeral');

const numberFormatter = (value, format) => numeral(value).format(format);

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: english,
    zh: chinese,
  },
  react: {
    useSuspense: false,
  },
  interpolation: {
    format: (value, format) => numberFormatter(value, format),
  },
});
export default i18n;
