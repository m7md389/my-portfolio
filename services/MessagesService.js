import PageMessages from "../messages/PageMessages.json";

let DEFAULT_LANGUAGE = "en";

export function getMessages(language) {
  if (PageMessages[language]) return PageMessages[language].sections;
  return PageMessages[DEFAULT_LANGUAGE].sections;
}

export function getDir(language) {
  return PageMessages[language]?.dir ?? PageMessages[DEFAULT_LANGUAGE];
}
