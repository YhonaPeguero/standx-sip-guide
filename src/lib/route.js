// Deep-link routing as `#/<locale>/<tab>` — e.g. `#/en/vaults`.
//
// The app ships as a static bundle with no server config, so the hash carries the route:
// every section is linkable from anywhere without a rewrite rule, and the locale travels
// with the link so a shared URL opens in the language it was shared in.
//
// This module stays locale- and tab-agnostic: it reads and writes raw segments, and the
// consumers (I18nProvider for the locale, App for the tab) validate their own slice.

export function parseHash(hash) {
  const raw = typeof hash === 'string' ? hash.replace(/^#\/?/, '') : '';
  const [locale = '', tab = ''] = raw.split('/');

  return { locale: locale.trim(), tab: tab.trim() };
}

export function buildHash({ locale = '', tab = '' }) {
  return `#/${locale}/${tab}`;
}

export function readRoute() {
  if (typeof window === 'undefined') {
    return { locale: '', tab: '' };
  }

  return parseHash(window.location.hash);
}

// Merges into whatever is already in the URL, so the locale and the tab can be written
// independently without either clobbering the other. `replace` keeps programmatic moves
// (canonicalizing on load, language switches, guide steps) out of the history stack.
export function writeRoute(partial, { replace = false } = {}) {
  if (typeof window === 'undefined') {
    return;
  }

  const current = readRoute();
  const nextHash = buildHash({
    locale: partial.locale ?? current.locale,
    tab: partial.tab ?? current.tab,
  });

  if (window.location.hash === nextHash) {
    return;
  }

  const url = `${window.location.pathname}${window.location.search}${nextHash}`;

  if (replace) {
    window.history.replaceState(null, '', url);
  } else {
    window.history.pushState(null, '', url);
  }

  // pushState/replaceState do not fire hashchange, so subscribers are notified explicitly.
  window.dispatchEvent(new Event('hashchange'));
}

export function subscribeRoute(listener) {
  if (typeof window === 'undefined') {
    return () => {};
  }

  window.addEventListener('hashchange', listener);
  window.addEventListener('popstate', listener);

  return () => {
    window.removeEventListener('hashchange', listener);
    window.removeEventListener('popstate', listener);
  };
}
