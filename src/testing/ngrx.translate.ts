import { TranslateTestingModule } from 'ngx-translate-testing';

const ENGLISH_LANGUAGE = 'en';
const ENGLISH_TRANSLATIONS = {
  'home.prologue': 'Welcome in Angular starter with standalone component'
};

const ITALIAN_LANGUAGE = 'it';
const ITALIAN_TRANSLATIONS = {
  'home.prologue': 'Benvenuti in Angular starter con standalone component'
};

const TRANSLATIONS = {
  [ENGLISH_LANGUAGE]: ENGLISH_TRANSLATIONS,
  [ITALIAN_LANGUAGE]: ITALIAN_TRANSLATIONS
};

export const NGRX_TESTING_TRANSLATE = TranslateTestingModule.withTranslations(TRANSLATIONS);
