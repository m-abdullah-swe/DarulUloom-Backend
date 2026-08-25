const SUPPORTED_LANGUAGES = ["en", "ur"];
const DEFAULT_LANGUAGE = "en";

function normalizeLanguage(value) {
  if (!value) return DEFAULT_LANGUAGE;
  const language = value.toLowerCase().split(",")[0].trim().split("-")[0];
  return SUPPORTED_LANGUAGES.includes(language) ? language : DEFAULT_LANGUAGE;
}

module.exports = { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, normalizeLanguage };
