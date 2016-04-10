import { translation } from './en';

function setupTranslations(translateService) {
  translateService.setTranslation('en', translation);
  translateService.setDefaultLang('en');
  translateService.use('en');
}

export {
  setupTranslations,
  translation as enTranslation
};
