const VOICE_LOAD_TIMEOUT_MS = 1800;
const VOICE_POLL_INTERVAL_MS = 140;

const LANGUAGE_CANDIDATES = {
  en: ['en-us', 'en'],
  es: ['es-es', 'es-us', 'es'],
  'pt-br': ['pt-br', 'pt'],
  uk: ['uk-ua', 'uk'],
  ko: ['ko-kr', 'ko'],
};

const CANONICAL_LANGUAGE = {
  en: 'en-US',
  es: 'es-ES',
  'pt-br': 'pt-BR',
  uk: 'uk-UA',
  ko: 'ko-KR',
};

function normalizeLanguageCode(languageCode) {
  return String(languageCode ?? '').trim().toLowerCase();
}

function mapLanguageKey(languageCode) {
  const normalized = normalizeLanguageCode(languageCode);

  if (normalized.startsWith('pt-br')) {
    return 'pt-br';
  }

  if (normalized.startsWith('en')) {
    return 'en';
  }

  if (normalized.startsWith('es')) {
    return 'es';
  }

  if (normalized.startsWith('uk')) {
    return 'uk';
  }

  if (normalized.startsWith('ko')) {
    return 'ko';
  }

  return normalized;
}

function resolveLanguageCandidates(languageCode) {
  const languageKey = mapLanguageKey(languageCode);

  if (LANGUAGE_CANDIDATES[languageKey]) {
    return LANGUAGE_CANDIDATES[languageKey];
  }

  if (!languageKey) {
    return [];
  }

  const base = languageKey.split('-')[0];
  return languageKey === base ? [languageKey] : [languageKey, base];
}

function scoreVoiceLanguage(voiceLanguage, candidates) {
  const normalizedVoiceLanguage = normalizeLanguageCode(voiceLanguage);

  if (!normalizedVoiceLanguage || candidates.length === 0) {
    return -1;
  }

  let bestScore = -1;

  candidates.forEach((candidate, index) => {
    if (normalizedVoiceLanguage === candidate) {
      bestScore = Math.max(bestScore, 100 - index);
      return;
    }

    if (normalizedVoiceLanguage.startsWith(`${candidate}-`)) {
      bestScore = Math.max(bestScore, 80 - index);
      return;
    }

    if (candidate.startsWith(`${normalizedVoiceLanguage}-`)) {
      bestScore = Math.max(bestScore, 60 - index);
    }
  });

  return bestScore;
}

function getCanonicalLanguage(languageCode) {
  const languageKey = mapLanguageKey(languageCode);
  return CANONICAL_LANGUAGE[languageKey] ?? languageCode;
}

function isSpeechSupported() {
  return (
    typeof window !== 'undefined' &&
    typeof window.speechSynthesis !== 'undefined' &&
    typeof window.SpeechSynthesisUtterance !== 'undefined'
  );
}

export function getAvailableVoices() {
  if (!isSpeechSupported()) {
    return Promise.resolve([]);
  }

  const synth = window.speechSynthesis;
  const immediateVoices = synth.getVoices();

  if (immediateVoices.length > 0) {
    return Promise.resolve(immediateVoices);
  }

  return new Promise((resolve) => {
    let didResolve = false;
    let pollTimer = null;
    let timeoutTimer = null;
    let previousOnVoicesChanged = null;

    const cleanup = () => {
      if (pollTimer) {
        window.clearInterval(pollTimer);
      }

      if (timeoutTimer) {
        window.clearTimeout(timeoutTimer);
      }

      if (typeof synth.removeEventListener === 'function') {
        synth.removeEventListener('voiceschanged', onVoicesChanged);
      } else if (previousOnVoicesChanged !== null) {
        synth.onvoiceschanged = previousOnVoicesChanged;
      }
    };

    const finish = () => {
      if (didResolve) {
        return;
      }

      didResolve = true;
      cleanup();
      resolve(synth.getVoices());
    };

    const onVoicesChanged = () => {
      const voices = synth.getVoices();

      if (voices.length > 0) {
        finish();
      }
    };

    if (typeof synth.addEventListener === 'function') {
      synth.addEventListener('voiceschanged', onVoicesChanged);
    } else {
      previousOnVoicesChanged = synth.onvoiceschanged;
      synth.onvoiceschanged = () => {
        onVoicesChanged();

        if (typeof previousOnVoicesChanged === 'function') {
          previousOnVoicesChanged();
        }
      };
    }

    pollTimer = window.setInterval(onVoicesChanged, VOICE_POLL_INTERVAL_MS);
    timeoutTimer = window.setTimeout(finish, VOICE_LOAD_TIMEOUT_MS);

    synth.getVoices();
    window.requestAnimationFrame(() => synth.getVoices());
  });
}

export async function findBestVoiceForLanguage(languageCode) {
  const voices = await getAvailableVoices();
  const candidates = resolveLanguageCandidates(languageCode);

  if (voices.length === 0 || candidates.length === 0) {
    return null;
  }

  const scoredVoices = voices
    .map((voice) => ({
      voice,
      score: scoreVoiceLanguage(voice.lang, candidates),
    }))
    .filter((entry) => entry.score >= 0)
    .sort((left, right) => {
      if (right.score !== left.score) {
        return right.score - left.score;
      }

      if (left.voice.default !== right.voice.default) {
        return left.voice.default ? -1 : 1;
      }

      return 0;
    });

  return scoredVoices[0]?.voice ?? null;
}

export async function canNarrateLanguage(languageCode) {
  if (!isSpeechSupported()) {
    return false;
  }

  const voice = await findBestVoiceForLanguage(languageCode);
  return Boolean(voice);
}

export async function speakGuideStep(text, languageCode) {
  if (!isSpeechSupported()) {
    return { status: 'unsupported', utterance: null, voice: null };
  }

  const content = String(text ?? '').trim();
  if (!content) {
    return { status: 'empty', utterance: null, voice: null };
  }

  const voice = await findBestVoiceForLanguage(languageCode);
  if (!voice) {
    return { status: 'unavailable', utterance: null, voice: null };
  }

  const utterance = new window.SpeechSynthesisUtterance(content);
  utterance.voice = voice;
  utterance.lang = voice.lang || getCanonicalLanguage(languageCode);
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.volume = 1;

  const synth = window.speechSynthesis;
  synth.cancel();
  synth.speak(utterance);

  return { status: 'spoken', utterance, voice };
}
