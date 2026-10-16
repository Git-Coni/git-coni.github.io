import { DICTIONARY, type SupportedLang, type I18nContent } from './i18n.data.ts';

const STORAGE_KEY = 'coni_teck_lang';
const DEFAULT_LANG: SupportedLang = 'en';

let currentLang: SupportedLang = (() => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'ko') {
      return saved;
    }
  }
  return DEFAULT_LANG;
})();

type LangChangeListener = (lang: SupportedLang) => void;
const listeners: Set<LangChangeListener> = new Set();

export function getLanguage(): SupportedLang {
  return currentLang;
}

export function setLanguage(lang: SupportedLang): void {
  if (currentLang === lang) return;
  currentLang = lang;
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem(STORAGE_KEY, lang);
  }
  listeners.forEach(fn => fn(currentLang));
}

export function toggleLanguage(): SupportedLang {
  const nextLang: SupportedLang = currentLang === 'en' ? 'ko' : 'en';
  setLanguage(nextLang);
  return nextLang;
}

export function getI18n(): I18nContent {
  return DICTIONARY[currentLang];
}

export function onLanguageChange(listener: LangChangeListener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
