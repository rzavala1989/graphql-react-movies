export const formatLanguages = (language) => {
  return {
    en: 'English',
    ta: `Tamil`,
    tr: 'Turkish',
    mr: 'Marathi',
    sp: 'Spanish',
    de: 'Deutsch',
    ja: 'Japanese',
    default: '(Language not listed)',
  }[language];
};

const countrycodedict = {
  en: 'us',
  ta: 'in',
  tr: 'tr',
  mr: 'in',
  es: 'es',
  de: 'de',
  ja: 'jp',
  default: 'xx',
};

export const getCountryCode = (language) => {
  return `https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/${countrycodedict[language]}.svg`;
};
