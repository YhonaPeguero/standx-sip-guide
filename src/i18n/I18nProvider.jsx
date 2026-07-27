import { useCallback, useEffect, useMemo, useState } from 'react';
import { readRoute, subscribeRoute, writeRoute } from '../lib/route';
import { I18nContext } from './context';
import en from './locales/en';
import es from './locales/es';
import ko from './locales/ko';
import ptBR from './locales/ptBR';
import uk from './locales/uk';

const DEFAULT_LOCALE = 'en';
const STORAGE_KEY = 'standx.locale';

const DICTIONARY = {
  en,
  es,
  'pt-BR': ptBR,
  uk,
  ko,
};

const LOCALE_OPTIONS = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'pt-BR', label: 'PT-BR', name: 'Português (BR)' },
  { code: 'uk', label: 'UK', name: 'Українська' },
  { code: 'ko', label: 'KO', name: '한국어' },
];

// Locale codes are matched case-insensitively so `#/pt-br/...` from a pasted link still
// resolves, and always normalized back to the canonical code the dictionary uses.
function normalizeLocale(value) {
  if (!value) {
    return null;
  }

  const lower = String(value).toLowerCase();
  return Object.keys(DICTIONARY).find((code) => code.toLowerCase() === lower) ?? null;
}

function resolvePath(messages, path) {
  return path.split('.').reduce((current, segment) => {
    if (current && typeof current === 'object' && segment in current) {
      return current[segment];
    }

    return undefined;
  }, messages);
}

function formatMessage(message, values) {
  if (!values || typeof message !== 'string') {
    return message;
  }

  return message.replace(/\{(\w+)\}/g, (fullMatch, key) => {
    if (key in values) {
      return String(values[key]);
    }

    return fullMatch;
  });
}

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    // A locale in the URL wins: a shared link must open in the language it was shared in,
    // regardless of what this browser used last.
    const fromUrl = normalizeLocale(readRoute().locale);
    if (fromUrl) {
      return fromUrl;
    }

    if (typeof window === 'undefined') {
      return DEFAULT_LOCALE;
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    return DICTIONARY[stored] ? stored : DEFAULT_LOCALE;
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  // Keep the URL carrying the active locale, including when it arrived without one.
  useEffect(() => {
    if (!normalizeLocale(readRoute().locale)) {
      writeRoute({ locale }, { replace: true });
    }
  }, [locale]);

  // Back/forward and links pasted into the address bar change the locale segment.
  useEffect(
    () =>
      subscribeRoute(() => {
        const fromUrl = normalizeLocale(readRoute().locale);

        if (fromUrl) {
          setLocaleState(fromUrl);
        }
      }),
    [],
  );

  const setLocale = useCallback((nextLocale) => {
    const normalized = normalizeLocale(nextLocale);

    if (!normalized) {
      return;
    }

    setLocaleState(normalized);
    // Language switches replace rather than push: the back button should undo navigation,
    // not step back through language changes.
    writeRoute({ locale: normalized }, { replace: true });
  }, []);

  const t = useCallback(
    (path, values) => {
      const activeMessages = DICTIONARY[locale] ?? DICTIONARY[DEFAULT_LOCALE];
      const localized = resolvePath(activeMessages, path);

      if (localized !== undefined) {
        return formatMessage(localized, values);
      }

      const fallback = resolvePath(DICTIONARY[DEFAULT_LOCALE], path);
      if (fallback !== undefined) {
        return formatMessage(fallback, values);
      }

      return path;
    },
    [locale],
  );

  const contextValue = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      localeOptions: LOCALE_OPTIONS,
    }),
    [locale, setLocale, t],
  );

  return <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>;
}
