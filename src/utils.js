/**
 * Template for internationalization (i18n).
 * Replaces placeholders in the format {key} with provided values.
 * @param {string} template - The template string with placeholders
 * @param {Record<string, string>} values - Object with key-value pairs for replacement
 * @returns {string} The template with placeholders replaced
 */
export function i18nTemplate(template, values = {}) {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return key in values ? values[key] : match;
  });
}
